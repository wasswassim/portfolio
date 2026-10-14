import type { Block } from "@/content/articles/types";

// Google AdSense. The publisher id is public by design (it is in ads.txt and in every page with ads).
export const ADSENSE_CLIENT = "ca-pub-1706908723349838";

/**
 * Ad unit ids from AdSense > Ads > By ad unit. While a slot is empty, that placement renders nothing.
 * - side: one vertical display unit in the side column, under the newsletter card (desktop only)
 * - inArticle: the in-article unit, placed up to 3 times between sections
 */
export const AD_SLOTS = { side: "5068499934", inArticle: "" };

/** Posts that never show ads (owner decision 2026-10-14: crypto top-ups for residents of Tunisia). */
const NO_ADS_ARTICLES = new Set(["redotpay-tunisia"]);
/** Sections that must not get an ad before, inside or right after them, per article id. */
const NO_ADS_SECTIONS: Record<string, string[]> = {
  "international-card-tunisia": ["paypal-pagopa"],
};

export const articleHasAds = (articleId: string) => !NO_ADS_ARTICLES.has(articleId);

/** Blocks an ad must never sit next to (accidental clicks, or confusion with the site's own offers). */
const KEEP_AWAY: ReadonlySet<Block["type"]> = new Set(["referral", "fees", "steps", "table", "callout"]);

/**
 * Indexes of the body blocks before which an in-article ad goes: up to 3, only before a section heading
 * (h2), never next to a referral card, fee box, step list, table or notice, never around an excluded
 * section, and at least two sections apart.
 */
export function inArticleAdPositions(articleId: string, body: Block[]): number[] {
  if (!AD_SLOTS.inArticle || !articleHasAds(articleId)) return [];
  const excluded = new Set(NO_ADS_SECTIONS[articleId] ?? []);
  const h2 = body.flatMap((b, i) => (b.type === "h2" ? [i] : []));
  const candidates = h2.filter((i, n) => {
    if (n === 0) return false; // not before the first section: the reader should get content first
    const id = (body[i] as { id: string }).id;
    const previousId = (body[h2[n - 1]] as { id: string }).id;
    if (excluded.has(id) || excluded.has(previousId)) return false;
    const before = body[i - 1];
    return !!before && !KEEP_AWAY.has(before.type) && !KEEP_AWAY.has(body[i + 1]?.type ?? "p");
  });
  const picks: number[] = [];
  for (const share of [0.2, 0.5, 0.8]) {
    const pick = candidates[Math.min(candidates.length - 1, Math.floor(candidates.length * share))];
    const last = picks[picks.length - 1];
    if (pick === undefined || pick === last) continue;
    // At least two sections between two ads
    if (last !== undefined && h2.indexOf(pick) - h2.indexOf(last) < 2) continue;
    picks.push(pick);
  }
  return picks;
}
