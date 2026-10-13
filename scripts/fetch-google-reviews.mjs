// Google reviews: node scripts/fetch-google-reviews.mjs  (runs before every `npm run build`)
// Pulls the rating, the review count and up to 5 recent reviews of the owner's Google Business
// Profile from the Places API (New) and writes src/content/google-reviews.json, which the blog
// renders at build time (no Google script or cookie for readers).
//   - GOOGLE_PLACES_API_KEY: secret, set in GitHub (Settings > Secrets and variables > Actions)
//   - GOOGLE_PLACE_ID: the profile's Place ID (optional). Without it, the profile is found by a text
//     search for its name, keeping only the result whose Maps link carries the profile's CID (from
//     the owner's Google Maps link), so another business can never be picked by mistake.
// Without a key, or if Google fails, the existing JSON is kept and the build carries on.
import { readFileSync, writeFileSync } from "node:fs";

let PLACE_ID = process.env.GOOGLE_PLACE_ID || "";
// "Wassim Gatri" on Google Maps: feature id 0x4f737c2aa4d64c2b:0xbc2ecb2db6a66eac -> CID below
const PROFILE_NAME = "Wassim Gatri";
const PROFILE_CID = "13559998925257469612";
const KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const OUT = new URL("../src/content/google-reviews.json", import.meta.url);

const keep = (why) => {
  console.log(`google reviews: ${why}; keeping src/content/google-reviews.json as it is`);
  process.exit(0);
};

if (!KEY) keep("no GOOGLE_PLACES_API_KEY");

if (!PLACE_ID) {
  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": "places.id,places.googleMapsUri" },
      body: JSON.stringify({ textQuery: PROFILE_NAME, pageSize: 20 }),
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) keep(`text search answered HTTP ${res.status}`);
    const { places = [] } = await res.json();
    PLACE_ID = places.find((pl) => (pl.googleMapsUri ?? "").includes("cid=" + PROFILE_CID))?.id ?? "";
  } catch (err) {
    keep(`text search failed (${err instanceof Error ? err.message : String(err)})`);
  }
  if (!PLACE_ID) keep(`no search result matches CID ${PROFILE_CID}; set GOOGLE_PLACE_ID instead`);
  console.log(`google reviews: found the profile, Place ID ${PLACE_ID}`);
}

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
