import raw from "./google-reviews.json";

// Written at build time by scripts/fetch-google-reviews.mjs from the owner's Google Business Profile.
// The committed JSON is empty, so the review blocks stay hidden until real data has been fetched.
export type GoogleReview = { author: string; authorUri: string; rating: number; text: string; lang: string; date: string; uri: string };
export type GoogleReviews = {
  fetchedAt: string;
  name: string;
  rating: number | null;
  count: number;
  mapsUri: string;
  writeUri: string;
  reviews: GoogleReview[];
};

export const GOOGLE_REVIEWS = raw as GoogleReviews;
export const hasGoogleReviews = GOOGLE_REVIEWS.rating !== null && GOOGLE_REVIEWS.count > 0 && GOOGLE_REVIEWS.mapsUri !== "";
