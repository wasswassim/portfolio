// Renders the opportunity report as JSON (for the drafting step) and Markdown (for people).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CATEGORIES, type Opportunity } from "./analyze";
import type { Config } from "./config";
import type { SeedRow } from "./seeds";

export type Report = {
  generatedAt: string;
  mode: "live" | "offline";
  siteUrl: string;
  window: { start: string; end: string } | null;
  totals: { rows: number; queries: number; qualifying: number };
  /** True when Search Console had fewer qualifying queries than THIN_ROWS and seeds were added */
  thin: boolean;
  config: Config;
  opportunities: Opportunity[];
  seeds: SeedRow[];
};

const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
// Queries are typed by strangers: no HTML, no line breaks, no table breakout in the Markdown
const cell = (s: string | number | null) =>
  String(s ?? "–")
    .replace(/[\r\n]+/g, " ")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|");
/** Path only: the host is the same on every row */
const short = (url: string) => {
  try {
    return decodeURIComponent(new URL(url).pathname);
  } catch {
    return url;
  }
};

export function renderMarkdown(r: Report): string {
  const out: string[] = [];
  out.push(`# SEO opportunities, ${r.generatedAt.slice(0, 10)}`, "");
  out.push(`- Site: ${r.siteUrl} (${r.mode})`);
  out.push(`- Window: ${r.window ? `${r.window.start} to ${r.window.end}` : "offline file"}`);
  out.push(`- Search Console rows: ${r.totals.rows}, distinct queries: ${r.totals.queries}, qualifying: ${r.totals.qualifying}`);
  out.push(
    `- Filter: ${r.config.MIN_IMPRESSIONS}+ impressions, position ${r.config.POS_MIN}-${r.config.POS_MAX}, CTR up to ${pct(r.config.MAX_CTR)}`,
  );
  if (r.thin) out.push(`- **Thin data**: fewer than ${r.config.THIN_ROWS} qualifying queries, so the seed keywords are listed below`);
  out.push("");
  if (r.opportunities.length === 0) out.push("No Search Console query met the filter in this window.", "");

  for (const cat of CATEGORIES) {
    const rows = r.opportunities.filter((o) => o.category === cat.id);
    if (rows.length === 0) continue;
    out.push(`## ${cat.title} (${rows.length})`, "", `_${cat.action}._`, "");
    out.push("| # | Query | Lang | Landing page | Impr. | Clicks | CTR | Pos. | Best post | Match | Score |");
    out.push("|---|---|---|---|---:|---:|---:|---:|---|---:|---:|");
    rows.forEach((o, i) => {
      const lang = o.langConfidence === "low" ? `${o.lang}?` : o.lang;
      const landing = short(o.page) + (o.pages > 1 ? ` (+${o.pages - 1})` : "");
      out.push(
        `| ${i + 1} | ${cell(o.query)} | ${lang} | ${cell(landing)} | ${o.impressions} | ${o.clicks} | ${pct(o.ctr)} | ${o.position} | ${cell(o.matchedArticle)} | ${o.matchScore.toFixed(2)} | ${o.score} |`,
      );
    });
    out.push("");
  }

  if (r.seeds.length > 0) {
    const gaps = r.seeds.filter((s) => s.status === "gap-new-post").length;
    out.push(`## Seed keywords (${r.seeds.length}, ${gaps} without a post)`, "");
    out.push("_Researched keywords not seen in Search Console yet. Gaps first, then by monthly volume._", "");
    out.push("| # | Query | Lang | Volume | Priority | Status | Best post | Match |");
    out.push("|---|---|---|---:|---|---|---|---:|");
    r.seeds.forEach((s, i) => {
      out.push(
        `| ${i + 1} | ${cell(s.query)} | ${s.lang} | ${cell(s.volume)} | ${cell(s.priority)} | ${s.status} | ${cell(s.matchedArticle)} | ${s.matchScore.toFixed(2)} |`,
      );
    });
    out.push("");
  }
  out.push("Lang `en?` = language guessed without a clear signal. Score = missing clicks at the target CTR, discounted by distance from page 1.");
  return out.join("\n") + "\n";
}

/** Writes opportunities-YYYY-MM-DD.json and .md; returns both paths. */
export function writeReport(r: Report, dir: string): { json: string; md: string } {
  mkdirSync(dir, { recursive: true });
  const base = join(dir, `opportunities-${r.generatedAt.slice(0, 10)}`);
  const json = `${base}.json`;
  const md = `${base}.md`;
  writeFileSync(json, JSON.stringify(r, null, 2) + "\n");
  writeFileSync(md, renderMarkdown(r));
  return { json, md };
}
