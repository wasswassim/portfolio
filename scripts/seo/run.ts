// SEO opportunity report: npm run seo:report [-- --offline <rows.json>] [--out <dir>] [--seeds <file>]
// Live mode reads GSC_SERVICE_ACCOUNT_JSON and GSC_SITE_URL ("sc-domain:wassimgatri.com" or
// "https://wassimgatri.com/"). Offline mode reads saved rows instead and needs no credentials.
// Exit codes: 0 report written (even with no data), 1 unexpected, 2 configuration, 3 Search Console.
import { existsSync } from "node:fs";
import { parseArgs } from "node:util";
import { analyze, normalize, type GscRow, type QueryTotals } from "./analyze";
import { dateWindow, readOfflineRows, siteHostOf } from "./io";
import { ConfigError, loadConfig } from "./config";
import { accountDomain, fetchRows, GscError, parseCredentials } from "./gsc";
import { loadIndex } from "./registry";
import { writeReport, type Report } from "./report";
import { loadSeeds, matchSeeds } from "./seeds";

const DEFAULT_SITE = "https://wassimgatri.com/";

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: {
      offline: { type: "string" },
      out: { type: "string", default: "reports/seo" },
      seeds: { type: "string", default: "content/seo/seed-keywords.json" },
    },
  });
  const cfg = loadConfig();
  const siteUrl = process.env.GSC_SITE_URL?.trim() || (values.offline ? DEFAULT_SITE : "");
  if (!siteUrl) throw new ConfigError("GSC_SITE_URL is not set");
  const siteHost = siteHostOf(siteUrl);

  let rows: GscRow[];
  let totals: QueryTotals | undefined;
  let window: Report["window"] = null;
  if (values.offline) {
    rows = readOfflineRows(values.offline);
    console.log(`Offline: ${rows.length} rows from ${values.offline}`);
  } else {
    const creds = parseCredentials(process.env.GSC_SERVICE_ACCOUNT_JSON);
    window = dateWindow(new Date(), cfg.WINDOW_DAYS, cfg.LAG_DAYS);
    console.log(`Search Console: ${siteUrl}, ${window.start} to ${window.end}, service account @${accountDomain(creds)}`);
    ({ rows, totals } = await fetchRows(creds, siteUrl, window.start, window.end));
    console.log(`Fetched ${rows.length} query/page rows and ${totals.size} query totals`);
  }

  const { urls, entries } = loadIndex();
  const { opportunities, queries, qualifying } = analyze(rows, { urls, entries, siteHost, cfg }, totals);
  const thin = qualifying < cfg.THIN_ROWS;
  let seeds: Report["seeds"] = [];
  if (thin) {
    if (existsSync(values.seeds)) {
      const seen = new Set(rows.map((r) => normalize(r.query)));
      seeds = matchSeeds(loadSeeds(values.seeds), { entries, threshold: cfg.MATCH_THRESHOLD, seen });
    } else console.warn(`Thin data and no seed file at ${values.seeds}`);
  }

  const report: Report = {
    generatedAt: new Date().toISOString(),
    mode: values.offline ? "offline" : "live",
    siteUrl,
    window,
    totals: { rows: rows.length, queries, qualifying },
    thin,
    config: cfg,
    opportunities,
    seeds,
  };
  const files = writeReport(report, values.out);
  const counts = opportunities.reduce<Record<string, number>>((m, o) => ((m[o.category] = (m[o.category] ?? 0) + 1), m), {});
  console.log(`${qualifying} qualifying queries of ${queries}; kept ${opportunities.length}`, counts);
  if (thin) console.log(`Thin data: ${seeds.length} seed keywords added (${seeds.filter((s) => s.status === "gap-new-post").length} gaps)`);
  console.log(`Wrote ${files.md} and ${files.json}`);
}

main().catch((err: unknown) => {
  if (err instanceof ConfigError) {
    console.error(`Configuration error: ${err.message}`);
    process.exit(2);
  }
  if (err instanceof GscError) {
    console.error(err.message);
    process.exit(3);
  }
  // Message only: a stack or error object could carry request details
  console.error(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
