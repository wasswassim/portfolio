// Google reviews: node scripts/fetch-google-reviews.mjs  (runs before every `npm run build`)
// Pulls the rating, the review count and up to 5 recent reviews of the owner's Google Business
// Profile from the Places API (New) and writes src/content/google-reviews.json, which the blog
// renders at build time (no Google script or cookie for readers).
//   - GOOGLE_PLACES_API_KEY: secret, set in GitHub (Settings > Secrets and variables > Actions)
//   - GOOGLE_PLACE_ID: the profile's Place ID (env var, or PLACE_ID below)
// Without a key, or if Google fails, the existing JSON is kept and the build carries on.
import { readFileSync, writeFileSync } from "node:fs";

const PLACE_ID = process.env.GOOGLE_PLACE_ID || "";
const KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const OUT = new URL("../src/content/google-reviews.json", import.meta.url);

const keep = (why) => {
  console.log(`google reviews: ${why}; keeping src/content/google-reviews.json as it is`);
  process.exit(0);
};

if (!KEY || !PLACE_ID) keep(!KEY ? "no GOOGLE_PLACES_API_KEY" : "no GOOGLE_PLACE_ID");

const fields = ["displayName", "rating", "userRatingCount", "googleMapsUri", "googleMapsLinks", "reviews"].join(",");
try {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}?languageCode=en`, {
    headers: { "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": fields },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) keep(`Places API answered HTTP ${res.status}`);
  const p = await res.json();
  const data = {
    fetchedAt: new Date().toISOString().slice(0, 10),
    name: p.displayName?.text ?? "",
    rating: typeof p.rating === "number" ? p.rating : null,
    count: p.userRatingCount ?? 0,
    mapsUri: p.googleMapsLinks?.reviewsUri ?? p.googleMapsUri ?? "",
    writeUri: p.googleMapsLinks?.writeAReviewUri ?? "",
    // The reviewer's own words (originalText), not Google's machine translation
    reviews: (p.reviews ?? []).map((r) => ({
      author: r.authorAttribution?.displayName ?? "",
      authorUri: r.authorAttribution?.uri ?? "",
      rating: r.rating ?? 0,
      text: (r.originalText ?? r.text)?.text ?? "",
      lang: (r.originalText ?? r.text)?.languageCode ?? "",
      date: (r.publishTime ?? "").slice(0, 10),
      uri: r.googleMapsUri ?? "",
    })).filter((r) => r.author && r.text),
  };
  if (data.rating === null || data.count === 0) keep("the profile has no rating yet");
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
  console.log(`google reviews: ${data.rating} from ${data.count} reviews, ${data.reviews.length} shown`);
} catch (err) {
  // Never fail the build because of Google: the previous JSON stays in place
  keep(`fetch failed (${err instanceof Error ? err.message : String(err)})`);
}
// Fail loudly only if the JSON on disk is not valid (it is committed as an empty default)
JSON.parse(readFileSync(OUT, "utf8"));
