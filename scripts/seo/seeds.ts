// Seed keywords (content/seo/seed-keywords.json): researched queries that keep the report useful
// while Search Console data is thin. Each is checked against the posts like a real query.
import { readFileSync } from "node:fs";
import { bestMatch, detectLang, normalize, type IndexEntry, type Lang } from "./analyze";
import { ConfigError } from "./config";

export type Seed = { query: string; lang?: Lang; volume?: number; priority?: string; source: string };

export type SeedRow = {
  query: string;
  lang: Lang;
  volume: number | null;
  priority: string | null;
  source: "seed";
  seedSource: string;
  status: "covered" | "gap-new-post";
  matchedArticle: string | null;
  matchScore: number;
};

export function loadSeeds(file: string): Seed[] {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    throw new ConfigError(`Cannot read seed keywords from ${file}: ${(err as Error).message}`);
  }
  if (!Array.isArray(parsed)) throw new ConfigError(`${file} must hold a JSON array`);
  return parsed.filter(
    (s): s is Seed => typeof s === "object" && s !== null && typeof (s as Seed).query === "string" && (s as Seed).query.trim() !== "",
  );
}

/** Seeds not already seen in Search Console, gaps first, then by volume. */
export function matchSeeds(
  seeds: Seed[],
  ctx: { entries: IndexEntry[]; threshold: number; seen: Set<string> },
): SeedRow[] {
  const rows: SeedRow[] = [];
  const done = new Set(ctx.seen);
  for (const s of seeds) {
    const key = normalize(s.query);
    if (!key || done.has(key)) continue;
    done.add(key);
    const lang = s.lang ?? detectLang(s.query).lang;
    const best = bestMatch(s.query, lang, ctx.entries);
    const covered = best !== null && best.score >= ctx.threshold;
    rows.push({
      query: s.query,
      lang,
      volume: typeof s.volume === "number" ? s.volume : null,
      priority: s.priority ?? null,
      source: "seed",
      seedSource: s.source,
      status: covered ? "covered" : "gap-new-post",
      matchedArticle: best?.id ?? null,
      matchScore: best?.score ?? 0,
    });
  }
  const gapFirst = (r: SeedRow) => (r.status === "gap-new-post" ? 0 : 1);
  return rows.sort((a, b) => gapFirst(a) - gapFirst(b) || (b.volume ?? 0) - (a.volume ?? 0) || a.query.localeCompare(b.query));
}
