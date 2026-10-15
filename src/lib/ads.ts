import type { Block } from "@/content/articles/types";

// Google AdSense. The publisher id is public by design (it is in ads.txt and in every page with ads).
export const ADSENSE_CLIENT = "ca-pub-1706908723349838";

/**
 * Ad unit ids from AdSense > Ads > By ad unit. While a slot is empty, that placement renders nothing.
 * - side: the display unit as a vertical ad in the side column, under the newsletter card (desktop only)
 * - inArticle: the in-article unit, used at the top and in the middle of a post and at its end
 */
// No ads on the blog list (owner decision 2026-10-15: the cards stay clean). The in-feed unit
// 4344866190 is unused. Ads carry no "Advertisements" label (optional under AdSense policy).
export const AD_SLOTS = { side: "5068499934", inArticle: "7794735622" };

/** Posts that never show ads (owner decision 2026-10-14: crypto top-ups for residents of Tunisia). */
const NO_ADS_ARTICLES = new Set(["redotpay-tunisia"]);
/** Sections that must not get an ad before, inside or right after them, per article id. */
const NO_ADS_SECTIONS: Record<string, string[]> = {
  "international-card-tunisia": ["paypal-pagopa"],
};

export const articleHasAds = (articleId: string) => !NO_ADS_ARTICLES.has(articleId);

/** Blocks an ad must never sit next to (accidental clicks, or confusion with the site's own offers). */
const KEEP_AWAY: ReadonlySet<Block["type"]> = new Set(["referral", "fees", "steps", "table", "callout"]);

/** Posts under this many words are short: no middle ad, only the top and end ones */
export const SHORT_POST_WORDS = 1500;

/**
 * Indexes of the body blocks before which an in-article ad goes, always before a section heading (h2):
 * - top: before the second section, so the reader has the short answer and the first section first
 *   (Google suggests about two paragraphs into the article);
 * - middle (posts of SHORT_POST_WORDS or more): before the section closest to the middle of the post,
 *   at least two sections after the top ad.
 * A heading is skipped when the block before or after it is a referral card, fee box, step list, table
 * or notice, or when it opens or follows an excluded section; the next eligible heading is used instead.
 * The third in-article ad, at the end of the post, is placed by the page after the article body.
 */
export function inArticleAdPositions(articleId: string, body: Block[], words: number): number[] {
  if (!AD_SLOTS.inArticle || !articleHasAds(articleId)) return [];
  const excluded = new Set(NO_ADS_SECTIONS[articleId] ?? []);
  const h2 = body.flatMap((b, i) => (b.type === "h2" ? [i] : []));
  const eligible = (n: number) => {
    const i = h2[n];
    const id = (body[i] as { id: string }).id;
    const previousId = (body[h2[n - 1]] as { id: string }).id;
    if (excluded.has(id) || excluded.has(previousId)) return false;
    const before = body[i - 1];
    return !!before && !KEEP_AWAY.has(before.type) && !KEEP_AWAY.has(body[i + 1]?.type ?? "p");
  };
  const picks: number[] = [];
  // Top: the second section heading, or the next eligible one within the first half
  let top = -1;
  for (let n = 1; n < Math.ceil(h2.length / 2); n++) if (eligible(n)) { top = n; break; }
  if (top > 0) picks.push(h2[top]);
  // Middle: the eligible heading closest to the middle of the body
  if (words >= SHORT_POST_WORDS) {
    const middle = body.length / 2;
    const options = h2
      .map((i, n) => ({ i, n }))
      .filter(({ n }) => n > 0 && (top < 0 || n - top >= 2) && eligible(n))
      .sort((a, b) => Math.abs(a.i - middle) - Math.abs(b.i - middle));
    if (options[0]) picks.push(options[0].i);
  }
  return picks;
}
