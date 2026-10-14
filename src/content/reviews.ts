// Reader reviews shown on every blog post: a rating badge above the guide card, a carousel under the
// post header and a reviews section at the bottom. While the list is empty, all three stay hidden.
//
// Add only real reviews, sent by the person (contact form, email, WhatsApp), with their permission to
// publish them and the name they agreed to. Keep their own words and language; fix nothing but typos.
// No AggregateRating structured data: Google does not show stars for reviews a site hosts about itself.

import type { Lang } from "@/lib/i18n/config";

export type Review = {
  /** Name as the reviewer agreed to show it, e.g. "Amine B." */
  author: string;
  /** Whole stars, 1 to 5 */
  rating: 1 | 2 | 3 | 4 | 5;
  /** The reviewer's own words */
  text: string;
  /** Language of the text: "en", "fr" or "ar" (sets lang and reading direction) */
  lang: Lang;
  /** Date the review was sent, YYYY-MM-DD */
  date: string;
  /** Optional context under the name, in the review's language, e.g. "Student at Sapienza" */
  context?: string;
};

export const REVIEWS: Review[] = [];

// Fail the build on a typo, naming the entry (a bad date would otherwise crash page generation far from here)
for (const r of REVIEWS) {
  const bad = !r.author.trim() || !r.text.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(r.date) || Number.isNaN(Date.parse(r.date)) || ![1, 2, 3, 4, 5].includes(r.rating);
  if (bad) throw new Error(`src/content/reviews.ts: check the review by "${r.author}" (author, text, rating 1-5, date YYYY-MM-DD)`);
}

/** Newest first */
export const reviews = [...REVIEWS].sort((a, b) => b.date.localeCompare(a.date));
export const reviewCount = reviews.length;
/** Average rating, rounded to one decimal; null without reviews */
export const reviewAverage = reviewCount ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviewCount) * 10) / 10 : null;
