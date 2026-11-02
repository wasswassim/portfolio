// Pure functions behind the opportunity report: no network, no files. Tested in __tests__/.
import type { Config } from "./config";

export type Lang = "en" | "fr" | "ar";

export type Metrics = { clicks: number; impressions: number; ctr: number; position: number };

/** One Search Console row for dimensions [query, page]. */
export type GscRow = { query: string; page: string } & Metrics;

/** Query-level metrics (dimension [query]), keyed by normalised query. */
export type QueryTotals = Map<string, Metrics>;

/** One post translation, as the matcher sees it (built from the article registry in registry.ts). */
export type IndexEntry = {
  id: string;
  lang: Lang;
  path: string;
  /** Normalised keywords[], for exact matches */
  keywords: string[];
  /** Token sets of each keyword, the seoTitle and the title */
  termSets: string[][];
  slugTokens: string[];
};

/** Site path -> post translation. Former slugs map to the post they were renamed to. */
export type UrlIndex = Map<string, { id: string; lang: Lang; former: boolean }>;

export type Category =
  | "optimize-existing"
  | "cannibalization-or-link"
  | "gap-new-post"
  | "non-blog-landing"
  | "former-slug";

export const CATEGORIES: { id: Category; title: string; action: string }[] = [
  { id: "optimize-existing", title: "Striking distance on an existing post", action: "Improve the landing post for this query (title, H2, FAQ, intro)" },
  { id: "gap-new-post", title: "Gaps: no post targets these", action: "New post candidates (check intent and the keyword map first)" },
  { id: "cannibalization-or-link", title: "Another post fits better, or several posts compete", action: "Add internal links to the best post or merge the overlap" },
  { id: "non-blog-landing", title: "Ranks with a non-post page", action: "Link from that page to the matching post" },
  { id: "former-slug", title: "Lands on a renamed URL", action: "Check the redirect and ask Google to recrawl the new URL" },
];

export type Opportunity = {
  query: string;
  lang: Lang;
  /** Low when the language guess rests on no clear signal (e.g. Tunisian written in Latin letters) */
  langConfidence: "high" | "low";
  /** Landing page with the most impressions */
  page: string;
  pages: number;
  articleId: string | null;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  category: Category;
  matchedArticle: string | null;
  matchScore: number;
  score: number;
  source: "gsc";
};

// ── Text ──────────────────────────────────────────────────────────────────

const STOPWORDS = new Set(
  [
    // en
    "a", "an", "the", "in", "of", "for", "to", "and", "or", "on", "at", "by", "with", "from", "is", "how", "what", "do", "i", "my", "as",
    // fr
    "de", "la", "le", "les", "en", "pour", "et", "du", "des", "au", "aux", "une", "un", "l", "d", "a", "par", "sur", "avec", "comment", "quel", "quelle",
    // it
    "di", "da", "il", "per", "con",
    // ar (after normalisation)
    "في", "من", "الي", "علي", "عن", "و", "او", "مع", "كيف",
  ].map((w) => normalize(w)),
);

/** Words almost every post shares: they count, but far less than topic words. */
const GENERIC = new Set(
  [
    "italy", "italie", "italia", "italian", "italien", "italienne", "rome", "roma", "tunisia", "tunisie", "tunisian", "tunisien", "tunisienne", "tunisiens",
    "student", "etudiant", "etudiante", "studente", "guide", "2025", "2026", "2027", "2028", "2026/27", "2027/28",
    "ايطاليا", "روما", "تونس", "التونسيين", "للتونسيين", "للطلاب", "الطلاب", "الطلبه", "للطلبه", "دليل",
  ].map((w) => normalize(w)),
);
const GENERIC_WEIGHT = 0.3;

/** Lowercase, no Latin accents, no Arabic diacritics or tatweel, one alef, punctuation as spaces. */
export function normalize(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[ً-ٰٟـ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}/]+/gu, " ")
    .trim();
}

/** Normalised words minus stopwords, with a light plural fold for Latin words ("visas" = "visa"). */
export function tokens(text: string): string[] {
  const out: string[] = [];
  for (const raw of normalize(text).split(" ")) {
    if (!raw || STOPWORDS.has(raw)) continue;
    const w = /^[a-z]{4,}s$/.test(raw) ? raw.slice(0, -1) : raw;
    if (!out.includes(w)) out.push(w);
  }
  return out;
}

const FR_HINT = /[éèêëàâçùûôîï]/i;
const FR_WORDS = new Set(["de", "la", "le", "les", "en", "pour", "et", "du", "des", "au", "aux", "une", "un", "l", "d", "avec", "sans", "comment"]);
const EN_WORDS = new Set(["the", "in", "for", "to", "of", "how", "and", "with", "from", "what", "can", "is", "a", "an", "my"]);

/** Arabic script = ar; French accents or 2+ French function words = fr; else en. */
export function detectLang(query: string): { lang: Lang; confidence: "high" | "low" } {
  if (/[؀-ۿ]/.test(query)) return { lang: "ar", confidence: "high" };
  const words = query.toLowerCase().split(/[^a-zà-ÿ]+/).filter(Boolean);
  const fr = words.filter((w) => FR_WORDS.has(w)).length;
  const en = words.filter((w) => EN_WORDS.has(w)).length;
  if (FR_HINT.test(query) || fr >= 2 || (fr === 1 && en === 0 && words.length >= 3)) return { lang: "fr", confidence: "high" };
  return { lang: "en", confidence: en > 0 ? "high" : "low" };
}

// ── Matching ──────────────────────────────────────────────────────────────

const weight = (w: string) => (GENERIC.has(w) ? GENERIC_WEIGHT : 1);
const sum = (words: Iterable<string>) => {
  let s = 0;
  for (const w of words) s += weight(w);
  return s;
};

/**
 * How well a term set (a keyword, a title) covers a query, 0-1. Mostly coverage of the query
 * (queries are shorter than titles), a little Jaccard, and a heavy cut when only generic words
 * like "italy" or "tunisian" overlap.
 */
export function overlap(query: string[], terms: string[]): number {
  if (query.length === 0 || terms.length === 0) return 0;
  const t = new Set(terms);
  const inter = query.filter((w) => t.has(w));
  if (inter.length === 0) return 0;
  const coverage = sum(inter) / sum(query);
  const jaccard = sum(inter) / sum(new Set([...query, ...terms]));
  const score = 0.7 * coverage + 0.3 * jaccard;
  const topical = inter.some((w) => !GENERIC.has(w)) || query.every((w) => GENERIC.has(w));
  return topical ? score : score * 0.3;
}

/** Best score of a query against one post translation. */
export function matchScore(query: string, entry: IndexEntry): number {
  const norm = normalize(query);
  if (entry.keywords.includes(norm)) return 1;
  const q = tokens(query);
  let best = 0.8 * overlap(q, entry.slugTokens);
  for (const terms of entry.termSets) best = Math.max(best, overlap(q, terms));
  return round(best);
}

export type Match = { id: string; lang: Lang; score: number };

/**
 * Best score per post across its languages, highest first. On a tie the translation in `lang`
 * wins, so the reported language follows the query when the posts are equal.
 */
export function rankPosts(query: string, entries: IndexEntry[], lang?: Lang): Match[] {
  const best = new Map<string, Match>();
  for (const e of entries) {
    const score = matchScore(query, e);
    const prev = best.get(e.id);
    if (!prev || score > prev.score || (score === prev.score && e.lang === lang)) best.set(e.id, { id: e.id, lang: e.lang, score });
  }
  return [...best.values()].sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

/**
 * Best post for a query. All languages count (the language guess is unreliable for short
 * queries, and an English query often lands on a French page); `lang` only breaks ties.
 */
export function bestMatch(query: string, lang: Lang, entries: IndexEntry[]): Match | null {
  return rankPosts(query, entries, lang)[0] ?? null;
}

// ── URLs ──────────────────────────────────────────────────────────────────

/** Site path of a Search Console page URL ("/en/blog/x/"), decoded, with a trailing slash. Null for other hosts. */
export function pathOf(pageUrl: string, siteHost: string): string | null {
  let url: URL;
  try {
    url = new URL(pageUrl);
  } catch {
    return null;
  }
  if (url.hostname.replace(/^www\./, "") !== siteHost.replace(/^www\./, "")) return null;
  let path: string;
  try {
    path = decodeURIComponent(url.pathname);
  } catch {
    path = url.pathname;
  }
  return path.endsWith("/") ? path : path + "/";
}

// ── Aggregation, classification, score ────────────────────────────────────

export type QueryGroup = {
  query: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  /** Pages for this query, most impressions first */
  pages: { page: string; impressions: number; clicks: number; position: number }[];
};

/**
 * One group per normalised query. Metrics come from `totals` when given (live runs); otherwise
 * they are summed over pages with an impression-weighted position, which overcounts a query
 * when several of our pages show for it (offline files without totals).
 */
export function groupByQuery(rows: GscRow[], totals?: QueryTotals): QueryGroup[] {
  const groups = new Map<string, QueryGroup & { posSum: number; top: number }>();
  for (const r of rows) {
    const key = normalize(r.query);
    if (!key) continue;
    let g = groups.get(key);
    if (!g) {
      g = { query: r.query, impressions: 0, clicks: 0, ctr: 0, position: 0, pages: [], posSum: 0, top: 0 };
      groups.set(key, g);
    }
    g.impressions += r.impressions;
    g.clicks += r.clicks;
    g.posSum += r.position * r.impressions;
    if (r.impressions > g.top) {
      g.top = r.impressions;
      g.query = r.query;
    }
    g.pages.push({ page: r.page, impressions: r.impressions, clicks: r.clicks, position: r.position });
  }
  return [...groups.entries()].map(([key, g]) => {
    const pages = g.pages.sort((a, b) => b.impressions - a.impressions);
    const t = totals?.get(key);
    if (t) return { query: g.query, impressions: t.impressions, clicks: t.clicks, ctr: t.ctr, position: round(t.position, 1), pages };
    return {
      query: g.query,
      impressions: g.impressions,
      clicks: g.clicks,
      ctr: g.impressions ? g.clicks / g.impressions : 0,
      position: g.impressions ? round(g.posSum / g.impressions, 1) : 0,
      pages,
    };
  });
}

/** Impressions, position band and CTR from the config. */
export function qualifies(g: QueryGroup, cfg: Config): boolean {
  return g.impressions >= cfg.MIN_IMPRESSIONS && g.position >= cfg.POS_MIN && g.position <= cfg.POS_MAX && g.ctr <= cfg.MAX_CTR;
}

/**
 * Clicks the query is missing at TARGET_CTR, discounted the further it ranks from POS_MIN
 * (position 8 counts fully, 18 half, 28 a third). Gaps get +25%: a new post is the bigger win.
 */
export function score(g: Pick<QueryGroup, "impressions" | "ctr" | "position">, category: Category, cfg: Config): number {
  const missing = g.impressions * Math.max(0, cfg.TARGET_CTR - g.ctr);
  const ease = 1 / (1 + Math.max(0, g.position - cfg.POS_MIN) / 10);
  return round(missing * ease * (category === "gap-new-post" ? 1.25 : 1), 2);
}

export function classify(
  g: QueryGroup,
  ctx: { urls: UrlIndex; entries: IndexEntry[]; siteHost: string; cfg: Config },
): Opportunity {
  const { urls, entries, siteHost, cfg } = ctx;
  const { lang, confidence } = detectLang(g.query);
  const landingPath = pathOf(g.pages[0].page, siteHost);
  const landing = landingPath ? urls.get(landingPath) : undefined;
  const best = bestMatch(g.query, lang, entries);
  const matched = best && best.score >= cfg.MATCH_THRESHOLD ? best : null;

  // Distinct posts that each get at least 10% of the query's impressions
  const competing = new Set(
    g.pages
      .filter((p) => p.impressions >= g.impressions * 0.1)
      .map((p) => {
        const path = pathOf(p.page, siteHost);
        return path ? urls.get(path)?.id : undefined;
      })
      .filter((id): id is string => Boolean(id)),
  );

  let category: Category;
  let matchedArticle: string | null = matched?.id ?? null;
  if (landing?.former) {
    category = "former-slug";
    matchedArticle = landing.id;
  } else if (landing) {
    const landingScore = rankPosts(g.query, entries).find((m) => m.id === landing.id)?.score ?? 0;
    if (competing.size >= 2) category = "cannibalization-or-link";
    else if (matched && matched.id !== landing.id && matched.score > landingScore) category = "cannibalization-or-link";
    else if (landingScore >= cfg.MATCH_THRESHOLD) {
      category = "optimize-existing";
      matchedArticle = landing.id;
    } else category = "gap-new-post"; // the post ranks for it but is about something else
  } else {
    // Home, about, /stack/ etc. rank for brand and portfolio queries: never a post gap.
    // The blog index (or an unknown blog URL) with no matching post is one.
    const blogPage = landingPath !== null && /^\/(en|fr|ar)\/blog\//.test(landingPath);
    category = matched || !blogPage ? "non-blog-landing" : "gap-new-post";
  }

  return {
    query: g.query,
    lang,
    langConfidence: confidence,
    page: g.pages[0].page,
    pages: g.pages.length,
    articleId: landing?.id ?? null,
    impressions: g.impressions,
    clicks: g.clicks,
    ctr: round(g.ctr, 4),
    position: g.position,
    category,
    matchedArticle,
    matchScore: best?.score ?? 0,
    score: score(g, category, cfg),
    source: "gsc",
  };
}

/** Group, filter, classify and rank. Returns the kept rows and how many qualified before TOP_N. */
export function analyze(
  rows: GscRow[],
  ctx: { urls: UrlIndex; entries: IndexEntry[]; siteHost: string; cfg: Config },
  totals?: QueryTotals,
): { opportunities: Opportunity[]; queries: number; qualifying: number } {
  const groups = groupByQuery(rows, totals);
  const qualifying = groups.filter((g) => qualifies(g, ctx.cfg));
  const opportunities = qualifying
    .map((g) => classify(g, ctx))
    .sort((a, b) => b.score - a.score || b.impressions - a.impressions || a.query.localeCompare(b.query))
    .slice(0, ctx.cfg.TOP_N);
  return { opportunities, queries: groups.length, qualifying: qualifying.length };
}

function round(n: number, digits = 3): number {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}
