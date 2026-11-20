// Local Google results (top 10, "People also ask", related searches) for a query, per market,
// through the Serper.dev API: npm run seo:serp -- "query" [--markets tn:fr,it:it] [--out <dir>]
// Default markets: Tunisia and Italy, in the query's language. The API key comes from
// SERPER_API_KEY or the file ~/.secrets/serper.key (or SERPER_KEY_FILE); it is never printed.
// Exit codes: 0 written, 1 unexpected, 2 configuration, 3 API error.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { detectLang, normalize, type Lang } from "./analyze";
import { ConfigError } from "./config";

const ENDPOINT = "https://google.serper.dev/search";
const OWN_HOST = "wassimgatri.com";
/** One run never spends more than this many searches (2 markets x a few queries) */
const MAX_CALLS = 12;

export type Market = { gl: string; hl: string };
export type SerpResult = { position: number; title: string; url: string; domain: string; snippet: string; date: string | null };
export type Serp = {
  query: string;
  market: Market;
  fetchedAt: string;
  organic: SerpResult[];
  peopleAlsoAsk: string[];
  related: string[];
  /** Our best position in the top results, or null when absent */
  ownPosition: number | null;
};

/** Reads the key from the env var, else the key file. Errors name the problem, never the value. */
export function loadKey(env: Record<string, string | undefined> = process.env): string {
  let key = env.SERPER_API_KEY?.trim();
  if (!key) {
    const file = env.SERPER_KEY_FILE || join(homedir(), ".secrets", "serper.key");
    if (!existsSync(file)) throw new ConfigError("No Serper key: set SERPER_API_KEY or put the key in ~/.secrets/serper.key");
    key = readFileSync(file, "utf8").trim();
  }
  if (!/^[A-Za-z0-9]{20,100}$/.test(key)) throw new ConfigError("The Serper key has an unexpected format");
  return key;
}

/** "tn:fr,it:it" -> markets. Without a value: Tunisia and Italy in the query's language. */
export function parseMarkets(value: string | undefined, lang: Lang): Market[] {
  if (!value) return [{ gl: "tn", hl: lang }, { gl: "it", hl: lang }];
  return value.split(",").map((part) => {
    const [gl, hl] = part.trim().toLowerCase().split(":");
    if (!/^[a-z]{2}$/.test(gl ?? "") || !/^[a-z]{2}$/.test(hl ?? "")) throw new ConfigError(`Bad market "${part}", expected e.g. tn:fr`);
    return { gl, hl };
  });
}

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};
const str = (v: unknown) => (typeof v === "string" ? v : "");

/** Shapes a Serper response. Unknown fields are ignored and missing ones default to empty. */
export function parseSerp(query: string, market: Market, raw: unknown, fetchedAt: string): Serp {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const list = (k: string) => (Array.isArray(r[k]) ? (r[k] as Record<string, unknown>[]) : []);
  const organic = list("organic")
    .map((o, i) => ({
      position: typeof o.position === "number" ? o.position : i + 1,
      title: str(o.title),
      url: str(o.link),
      domain: hostOf(str(o.link)),
      snippet: str(o.snippet),
      date: str(o.date) || null,
    }))
    .filter((o) => o.url);
  const own = organic.find((o) => o.domain === OWN_HOST || o.domain.endsWith(`.${OWN_HOST}`));
  return {
    query,
    market,
    fetchedAt,
    organic,
    peopleAlsoAsk: list("peopleAlsoAsk").map((p) => str(p.question)).filter(Boolean),
    related: list("relatedSearches").map((p) => str(p.query)).filter(Boolean),
    ownPosition: own ? own.position : null,
  };
}

/** API failure (exit code 3). Carries the status only, never the request headers. */
export class SerpError extends Error {}

export async function fetchSerp(key: string, query: string, market: Market, num = 10): Promise<Serp> {
  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "X-API-KEY": key, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, gl: market.gl, hl: market.hl, num }),
      signal: AbortSignal.timeout(20_000),
    });
  } catch (err) {
    throw new SerpError(`Serper request failed: ${(err as Error).message}`);
  }
  if (!res.ok) {
    const hint = res.status === 401 || res.status === 403 ? " (check the key)" : res.status === 429 ? " (out of credits or rate limited)" : "";
    throw new SerpError(`Serper returned ${res.status}${hint}`);
  }
  return parseSerp(query, market, await res.json(), new Date().toISOString());
}

const cell = (s: string) => s.replace(/[\r\n]+/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\|/g, "\\|");

export function renderSerp(s: Serp): string {
  const out = [
    `## "${cell(s.query)}" in ${s.market.gl.toUpperCase()} (${s.market.hl})`,
    "",
    `wassimgatri.com: ${s.ownPosition ? `position ${s.ownPosition}` : "not in the top results"}`,
    "",
    "| # | Domain | Title | Date |",
    "|---:|---|---|---|",
    ...s.organic.map((o) => `| ${o.position} | ${cell(o.domain)} | [${cell(o.title)}](${o.url}) | ${cell(o.date ?? "")} |`),
    "",
  ];
  if (s.peopleAlsoAsk.length) out.push("People also ask:", ...s.peopleAlsoAsk.map((q) => `- ${cell(q)}`), "");
  if (s.related.length) out.push(`Related searches: ${s.related.map(cell).join(" · ")}`, "");
  return out.join("\n");
}

async function main(): Promise<void> {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { markets: { type: "string" }, out: { type: "string", default: "reports/seo/serp" } },
  });
  const queries = positionals.map((q) => q.trim()).filter(Boolean);
  if (queries.length === 0) throw new ConfigError('Give at least one query: npm run seo:serp -- "query"');
  const plan = queries.flatMap((q) => parseMarkets(values.markets, detectLang(q).lang).map((m) => ({ q, m })));
  if (plan.length > MAX_CALLS) throw new ConfigError(`${plan.length} searches requested, the limit per run is ${MAX_CALLS}`);
  const key = loadKey();

  const results: Serp[] = [];
  for (const { q, m } of plan) results.push(await fetchSerp(key, q, m));

  mkdirSync(values.out, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const slug = normalize(queries[0]).replace(/\s+/g, "-").replace(/[^\p{L}\p{N}-]/gu, "").slice(0, 40) || "query";
  const base = join(values.out, `serp-${stamp}-${slug}`);
  const md = results.map(renderSerp).join("\n");
  writeFileSync(`${base}.json`, JSON.stringify(results, null, 2) + "\n");
  writeFileSync(`${base}.md`, md);
  console.log(md);
  console.log(`${results.length} searches. Wrote ${base}.md and ${base}.json`);
}

// Run only as a script, so tests can import the helpers
if (process.argv[1] && /serp\.ts$/.test(process.argv[1])) {
  main().catch((err: unknown) => {
    if (err instanceof ConfigError) {
      console.error(`Configuration error: ${err.message}`);
      process.exit(2);
    }
    if (err instanceof SerpError) {
      console.error(err.message);
      process.exit(3);
    }
    console.error(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  });
}
