// Search Console client. The service-account key arrives as JSON in GSC_SERVICE_ACCOUNT_JSON and
// lives only in memory: nothing here logs or rethrows it.
import { searchconsole } from "@googleapis/searchconsole";
import { GoogleAuth } from "google-auth-library";
import { ConfigError } from "./config";
import { normalize, type GscRow, type Metrics, type QueryTotals } from "./analyze";

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const PAGE_SIZE = 25000; // API maximum per request
const MAX_PAGES = 20; // 500k rows: far beyond this site, stops a runaway loop

type Credentials = { client_email: string; private_key: string };

/** Parses and sanity-checks the key. Errors name the problem, never the content. */
export function parseCredentials(raw: string | undefined): Credentials {
  if (!raw || !raw.trim()) throw new ConfigError("GSC_SERVICE_ACCOUNT_JSON is not set");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new ConfigError("GSC_SERVICE_ACCOUNT_JSON is not valid JSON");
  }
  const c = parsed as Partial<Credentials> & { type?: unknown };
  if (c.type !== "service_account" || typeof c.client_email !== "string" || typeof c.private_key !== "string") {
    throw new ConfigError("GSC_SERVICE_ACCOUNT_JSON is not a service-account key (needs type, client_email, private_key)");
  }
  return { client_email: c.client_email, private_key: c.private_key };
}

/** "seo-bot@project.iam.gserviceaccount.com" -> "project.iam.gserviceaccount.com", safe to log. */
export const accountDomain = (c: Credentials) => c.client_email.split("@")[1] ?? "unknown";

/** Search Console / auth failure (exit code 3). Carries only the status and Google's message. */
export class GscError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
  }
}

export async function fetchRows(
  creds: Credentials,
  siteUrl: string,
  startDate: string,
  endDate: string,
): Promise<{ rows: GscRow[]; totals: QueryTotals }> {
  const auth = new GoogleAuth({ credentials: creds, scopes: [SCOPE] });
  const client = searchconsole({ version: "v1", auth });
  const window = { siteUrl, startDate, endDate };
  // [query, page] rows give the landing pages. Their impressions count once per page shown, so a
  // query with two of our pages in the results is counted twice: totals come from a [query] call.
  const [pageRows, queryRows] = await Promise.all([pull(client, window, ["query", "page"]), pull(client, window, ["query"])]);
  const rows: GscRow[] = [];
  for (const r of pageRows) {
    const [query, pageUrl] = r.keys;
    if (query && pageUrl) rows.push({ query, page: pageUrl, ...r.metrics });
  }
  const totals: QueryTotals = new Map();
  for (const r of queryRows) if (r.keys[0]) totals.set(normalize(r.keys[0]), r.metrics);
  return { rows, totals };
}

type Raw = { keys: string[]; metrics: Metrics };

async function pull(
  client: ReturnType<typeof searchconsole>,
  w: { siteUrl: string; startDate: string; endDate: string },
  dimensions: string[],
): Promise<Raw[]> {
  const rows: Raw[] = [];
  for (let page = 0; page < MAX_PAGES; page++) {
    let data;
    try {
      ({ data } = await client.searchanalytics.query({
        siteUrl: w.siteUrl,
        requestBody: {
          startDate: w.startDate,
          endDate: w.endDate,
          dimensions,
          dataState: "final",
          rowLimit: PAGE_SIZE,
          startRow: page * PAGE_SIZE,
        },
      }));
    } catch (err) {
      const e = err as { status?: number; code?: number | string; message?: string };
      const status = typeof e.status === "number" ? e.status : typeof e.code === "number" ? e.code : undefined;
      const hint = status === 403 ? " (is the service account added as a user on this Search Console property?)" : "";
      throw new GscError(`Search Console request failed${status ? ` with ${status}` : ""}: ${e.message ?? "unknown error"}${hint}`, status);
    }
    const batch = data.rows ?? [];
    for (const r of batch) {
      rows.push({
        keys: r.keys ?? [],
        metrics: { clicks: r.clicks ?? 0, impressions: r.impressions ?? 0, ctr: r.ctr ?? 0, position: r.position ?? 0 },
      });
    }
    if (batch.length < PAGE_SIZE) return rows;
  }
  console.warn(`Stopped at ${MAX_PAGES * PAGE_SIZE} rows for [${dimensions.join(", ")}]: the report covers only part of the data`);
  return rows;
}
