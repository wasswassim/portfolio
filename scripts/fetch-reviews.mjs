// Reader reviews snapshot: node scripts/fetch-reviews.mjs  (runs before every `npm run build`)
// Reviews are published live from Supabase (src/lib/reviews-store.ts). This copies the current ones into
// src/content/reviews-snapshot.json so every page is built with them: no layout shift when the live list
// arrives, and the reviews are in the HTML. If Supabase cannot be reached, the existing file is kept.
import { readFileSync, writeFileSync } from "node:fs";

const API = "https://anonmsfuauzzhupbiaqf.supabase.co/rest/v1/reviews";
const KEY = "sb_publishable_2hrrepf0CfKNr3h-kI5taQ_-sS46IJQ";
const OUT = new URL("../src/content/reviews-snapshot.json", import.meta.url);

try {
  const res = await fetch(`${API}?select=id,created_at,author,rating,body,lang&order=created_at.desc&limit=200`, {
    headers: { apikey: KEY },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const rows = await res.json();
  writeFileSync(OUT, JSON.stringify(rows, null, 2) + "\n");
  console.log(`reviews: ${rows.length} in the snapshot`);
} catch (err) {
  console.log(`reviews: could not refresh the snapshot (${err instanceof Error ? err.message : String(err)}); keeping the current one`);
}
// Fail loudly only if the file on disk is not valid JSON (it is committed as [])
JSON.parse(readFileSync(OUT, "utf8"));
