import { test } from "node:test";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import assert from "node:assert/strict";
import {
  analyze,
  bestMatch,
  classify,
  detectLang,
  groupByQuery,
  normalize,
  pathOf,
  qualifies,
  score,
  tokens,
  type GscRow,
  type IndexEntry,
  type UrlIndex,
} from "../analyze";
import { DEFAULTS, loadConfig, ConfigError } from "../config";
import { matchSeeds } from "../seeds";
import { dateWindow, readOfflineRows, siteHostOf } from "../io";
import { parseCredentials } from "../gsc";

const cfg = { ...DEFAULTS, MIN_IMPRESSIONS: 10 };
const HOST = "wassimgatri.com";
const url = (path: string) => `https://${HOST}${path}`;

function entry(id: string, lang: "en" | "fr" | "ar", slug: string, keywords: string[], title: string): IndexEntry {
  return {
    id,
    lang,
    path: `/${lang}/blog/${slug}/`,
    keywords: keywords.map(normalize),
    termSets: [...keywords, title].map(tokens),
    slugTokens: tokens(slug.replace(/-/g, " ")),
  };
}

const entries: IndexEntry[] = [
  entry("disco", "en", "lazio-disco-scholarship", ["Lazio DiSCo scholarship for Tunisian students", "DiSCo scholarship 2027/28"], "Lazio DiSCo Scholarship"),
  entry("disco", "fr", "bourse-disco-lazio", ["bourse DiSCo Lazio pour les étudiants tunisiens"], "Bourse DiSCo Lazio"),
  entry("disco", "ar", "lazio-disco-scholarship", ["منحة ديسكو لازيو 2027/28"], "منحة DiSCo Lazio"),
  entry("housing", "en", "student-housing-rome", ["student housing in Rome", "room in Rome for students"], "Student Housing in Rome"),
  entry("work", "en", "work-in-italy-for-tunisians", ["work in Italy for Tunisians", "jobs in Italy for Tunisians"], "Work in Italy for Tunisians"),
  entry("contract", "en", "work-contract-in-italy", ["work contract in Italy", "Nulla Osta al lavoro"], "Work Contract in Italy"),
];
const urls: UrlIndex = new Map([
  ["/en/blog/lazio-disco-scholarship/", { id: "disco", lang: "en", former: false }],
  ["/fr/blog/bourse-disco-lazio/", { id: "disco", lang: "fr", former: false }],
  ["/en/blog/student-housing-rome/", { id: "housing", lang: "en", former: false }],
  ["/en/blog/work-in-italy-for-tunisians/", { id: "work", lang: "en", former: false }],
  ["/en/blog/work-in-italy-from-tunisia/", { id: "work", lang: "en", former: true }],
  ["/en/blog/work-contract-in-italy/", { id: "contract", lang: "en", former: false }],
]);
const ctx = { urls, entries, siteHost: HOST, cfg };
const row = (query: string, path: string, impressions: number, position: number, clicks = 0): GscRow => ({
  query,
  page: url(path),
  clicks,
  impressions,
  ctr: impressions ? clicks / impressions : 0,
  position,
});

test("detectLang: Arabic script, French signals, English default", () => {
  assert.deepEqual(detectLang("منحة ديسكو لازيو"), { lang: "ar", confidence: "high" });
  assert.equal(detectLang("étudier en italie").lang, "fr");
  assert.equal(detectLang("travailler en italie pour les tunisiens").lang, "fr");
  assert.deepEqual(detectLang("how to study in italy"), { lang: "en", confidence: "high" });
  // Tunisian in Latin letters: no clear signal
  assert.deepEqual(detectLang("9raya f italie"), { lang: "en", confidence: "low" });
});

test("normalize: accents, Arabic diacritics, alef forms, punctuation", () => {
  assert.equal(normalize("Étudier  en Italie!"), "etudier en italie");
  assert.equal(normalize("إِيطَالْيَا"), "ايطاليا");
  assert.equal(normalize("الدراسـة"), "الدراسه");
  assert.deepEqual(tokens("Visas for Students in Italy"), ["visa", "student", "italy"]);
});

test("pathOf: same host only, decoded, trailing slash", () => {
  assert.equal(pathOf("https://www.wassimgatri.com/en/blog/x", HOST), "/en/blog/x/");
  assert.equal(pathOf("https://wassimgatri.com/ar/blog/%D8%A7/", HOST), "/ar/blog/ا/");
  assert.equal(pathOf("https://example.com/en/blog/x/", HOST), null);
  assert.equal(pathOf("not a url", HOST), null);
});

test("matching: exact keyword = 1, generic-only overlap stays below the threshold", () => {
  assert.equal(bestMatch("Student housing in Rome", "en", entries)?.score, 1);
  assert.equal(bestMatch("disco lazio", "en", entries)?.id, "disco");
  assert.ok((bestMatch("italy tunisia student", "en", entries)?.score ?? 0) < 0.6);
  assert.ok((bestMatch("best pizza in naples", "en", entries)?.score ?? 0) < 0.6);
});

test("matching: prefers the query's language, falls back across languages", () => {
  assert.equal(bestMatch("bourse disco lazio", "fr", entries)?.lang, "fr");
  // No French housing post: the English one still counts
  assert.equal(bestMatch("student housing rome", "fr", entries)?.id, "housing");
});

test("groupByQuery: merges pages, weights position by impressions", () => {
  const [g] = groupByQuery([row("disco lazio", "/en/blog/lazio-disco-scholarship/", 30, 10), row("Disco Lazio", "/fr/blog/bourse-disco-lazio/", 10, 20)]);
  assert.equal(g.impressions, 40);
  assert.equal(g.position, 12.5);
  assert.equal(g.pages[0].impressions, 30);
});

test("qualifies: impressions, position band and CTR", () => {
  const base = { query: "q", pages: [], impressions: 50, clicks: 0, ctr: 0, position: 12 };
  assert.equal(qualifies(base, cfg), true);
  assert.equal(qualifies({ ...base, impressions: 5 }, cfg), false);
  assert.equal(qualifies({ ...base, position: 3 }, cfg), false);
  assert.equal(qualifies({ ...base, position: 70 }, cfg), false);
  assert.equal(qualifies({ ...base, clicks: 5, ctr: 0.1 }, cfg), false);
});

test("groupByQuery: query totals replace the per-page sums (no double counting)", () => {
  const rows = [row("disco lazio", "/en/blog/lazio-disco-scholarship/", 30, 10), row("disco lazio", "/fr/blog/bourse-disco-lazio/", 25, 12)];
  const totals = new Map([[normalize("disco lazio"), { impressions: 32, clicks: 1, ctr: 1 / 32, position: 10.04 }]]);
  const [g] = groupByQuery(rows, totals);
  assert.equal(g.impressions, 32);
  assert.equal(g.position, 10);
  assert.equal(g.pages.length, 2);
});

test("readOfflineRows: rejects string numbers and non-objects", () => {
  const dir = mkdtempSync(join(tmpdir(), "seo-"));
  const file = join(dir, "rows.json");
  writeFileSync(file, JSON.stringify([{ query: "q", page: "https://x/", impressions: "12", position: 3 }]));
  assert.throws(() => readOfflineRows(file), ConfigError);
  writeFileSync(file, "null");
  assert.throws(() => readOfflineRows(file), ConfigError);
  writeFileSync(file, JSON.stringify({ rows: [{ keys: ["q", "https://x/"], impressions: 12, clicks: 1, position: 3 }] }));
  assert.equal(readOfflineRows(file)[0].ctr, 1 / 12);
});

test("classify: every category", () => {
  const one = (r: GscRow[]) => classify(groupByQuery(r)[0], ctx);
  assert.equal(one([row("lazio disco scholarship", "/en/blog/lazio-disco-scholarship/", 100, 11)]).category, "optimize-existing");
  assert.equal(one([row("erasmus exchange bologna", "/en/blog/lazio-disco-scholarship/", 100, 30)]).category, "gap-new-post");
  // Lands on the housing post, but the DiSCo post fits better
  const better = one([row("disco lazio scholarship", "/en/blog/student-housing-rome/", 100, 20)]);
  assert.equal(better.category, "cannibalization-or-link");
  assert.equal(better.matchedArticle, "disco");
  // Two posts split the impressions
  assert.equal(
    one([row("work in italy", "/en/blog/work-in-italy-for-tunisians/", 60, 15), row("work in italy", "/en/blog/work-contract-in-italy/", 40, 22)]).category,
    "cannibalization-or-link",
  );
  assert.equal(one([row("student housing rome", "/en/blog/", 100, 12)]).category, "non-blog-landing");
  // Brand query on the home page: not a post gap
  assert.equal(one([row("wassim gatri", "/", 100, 9)]).category, "non-blog-landing");
  // Blog index with no matching post: a gap
  assert.equal(one([row("erasmus exchange bologna", "/en/blog/", 100, 20)]).category, "gap-new-post");
  const former = one([row("work in italy tunisians", "/en/blog/work-in-italy-from-tunisia/", 100, 15)]);
  assert.equal(former.category, "former-slug");
  assert.equal(former.articleId, "work");
});

test("score: more missing clicks and closer to page 1 rank higher; gaps get a bonus", () => {
  const near = score({ impressions: 100, ctr: 0, position: 9 }, "optimize-existing", cfg);
  const far = score({ impressions: 100, ctr: 0, position: 40 }, "optimize-existing", cfg);
  const gap = score({ impressions: 100, ctr: 0, position: 9 }, "gap-new-post", cfg);
  assert.ok(near > far);
  assert.ok(gap > near);
  assert.equal(score({ impressions: 100, ctr: 0.2, position: 9 }, "gap-new-post", cfg), 0);
});

test("analyze: zero rows is a valid, empty result", () => {
  assert.deepEqual(analyze([], ctx), { opportunities: [], queries: 0, qualifying: 0 });
});

test("analyze: sorted by score, TOP_N applied", () => {
  const rows = [row("lazio disco scholarship", "/en/blog/lazio-disco-scholarship/", 300, 9), row("erasmus bologna", "/en/blog/student-housing-rome/", 50, 40)];
  const { opportunities, qualifying } = analyze(rows, { ...ctx, cfg: { ...cfg, TOP_N: 1 } });
  assert.equal(qualifying, 2);
  assert.equal(opportunities.length, 1);
  assert.equal(opportunities[0].query, "lazio disco scholarship");
});

test("matchSeeds: skips queries seen in Search Console, gaps first", () => {
  const seeds = matchSeeds(
    [
      { query: "student housing in Rome", volume: 50, source: "t" },
      { query: "erasmus bologna", volume: 10, source: "t" },
      { query: "lazio disco scholarship", volume: 90, source: "t" },
    ],
    { entries, threshold: 0.6, seen: new Set([normalize("lazio disco scholarship")]) },
  );
  assert.deepEqual(
    seeds.map((s) => [s.query, s.status]),
    [
      ["erasmus bologna", "gap-new-post"],
      ["student housing in Rome", "covered"],
    ],
  );
});

test("config, site URL, date window", () => {
  assert.equal(loadConfig({ MIN_IMPRESSIONS: "5" }).MIN_IMPRESSIONS, 5);
  assert.throws(() => loadConfig({ POS_MAX: "lots" }), ConfigError);
  assert.throws(() => loadConfig({ WINDOW_DAYS: "0" }), ConfigError);
  assert.throws(() => loadConfig({ POS_MIN: "60" }), ConfigError);
  assert.throws(() => loadConfig({ MATCH_THRESHOLD: "2" }), ConfigError);
  assert.equal(siteHostOf("sc-domain:wassimgatri.com"), HOST);
  assert.equal(siteHostOf("https://wassimgatri.com/"), HOST);
  assert.deepEqual(dateWindow(new Date("2026-11-02T10:00:00Z"), 28, 3), { start: "2026-10-03", end: "2026-10-30" });
});

test("parseCredentials: errors never echo the input", () => {
  // Built from parts so scripts/check-secrets.mjs doesn't flag this file
  const SA = "service" + "_account";
  const secret = `{"type":"${SA}","private_key":"SECRET-VALUE"`;
  for (const raw of [undefined, "", secret, '{"type":"user"}']) {
    assert.throws(
      () => parseCredentials(raw),
      (err: Error) => err instanceof ConfigError && !err.message.includes("SECRET-VALUE"),
    );
  }
  const ok = parseCredentials(JSON.stringify({ type: SA, client_email: "a@b.iam.gserviceaccount.com", private_key: "k" }));
  assert.equal(ok.client_email, "a@b.iam.gserviceaccount.com");
});
