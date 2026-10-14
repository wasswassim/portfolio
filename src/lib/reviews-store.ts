import { useSyncExternalStore } from "react";
import snapshot from "@/content/reviews-snapshot.json";

// Reader reviews live in a Supabase table (project "wassimgatri-blog-reviews", EU). The publishable key
// is public by design: the table only lets visitors read published reviews (name, rating, text, language,
// date) and add new ones; the email and IP hash are never readable, and only the owner can delete rows
// (Supabase dashboard > Table Editor > reviews). Pages are built with the reviews of build time
// (scripts/fetch-reviews.mjs), then refreshed live in the browser.
const API = "https://anonmsfuauzzhupbiaqf.supabase.co/rest/v1/reviews";
const KEY = "sb_publishable_2hrrepf0CfKNr3h-kI5taQ_-sS46IJQ";
const HEADERS = { apikey: KEY, "Content-Type": "application/json" };

export type PublicReview = { id: string; created_at: string; author: string; rating: number; body: string; lang: string };
export type NewReview = { author: string; rating: number; body: string; lang: string; page: string; email: string | null };

type State = { status: "snapshot" | "ready" | "error"; reviews: PublicReview[] };

const valid = (r: PublicReview) => Number.isInteger(r.rating) && r.rating >= 1 && r.rating <= 5 && !!r.author && !!r.body;

/** Build-time reviews: the first render on the server and in the browser, so nothing shifts on load. */
const INITIAL: State = { status: "snapshot", reviews: (snapshot as PublicReview[]).filter(valid) };

let state: State = INITIAL;
/** Reviews sent from this page, kept on top until the live list includes them */
let pending: PublicReview[] = [];
let loading = false;
const listeners = new Set<() => void>();

function emit(next: State) {
  state = next;
  listeners.forEach((l) => l());
}

function merge(live: PublicReview[]): PublicReview[] {
  const seen = new Set(live.map((r) => r.author + "\u0000" + r.body));
  pending = pending.filter((p) => !seen.has(p.author + "\u0000" + p.body));
  return [...pending, ...live];
}

/** One request per page load, shared by the badge, the carousel and the reviews section; retried on the next mount after a failure. */
function load() {
  if (loading || state.status === "ready") return;
  loading = true;
  fetch(`${API}?select=id,created_at,author,rating,body,lang&order=created_at.desc&limit=200`, { headers: HEADERS })
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error("HTTP " + res.status))))
    .then((rows: PublicReview[]) => emit({ status: "ready", reviews: merge(rows.filter(valid)) }))
    .catch((err) => {
      console.error("[reviews] could not load:", err);
      // Keep showing the build-time reviews
      emit({ status: "error", reviews: state.reviews });
    })
    .finally(() => {
      loading = false;
    });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  load();
  return () => listeners.delete(listener);
}

/** Published reviews, newest first: the build-time ones, then the live list. */
export function useReviews(): State {
  return useSyncExternalStore(subscribe, () => state, () => INITIAL);
}

/** Average rounded to one decimal, or null without reviews. */
export function averageOf(reviews: PublicReview[]): number | null {
  if (!reviews.length) return null;
  return Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10;
}

/**
 * Saves a review; it is published at once. Throws "rate" when the visitor sent too many reviews in the
 * last hour, or another error. The new review is shown immediately without reloading the list.
 */
export async function addReview(review: NewReview): Promise<void> {
  const res = await fetch(API, { method: "POST", headers: { ...HEADERS, Prefer: "return=minimal" }, body: JSON.stringify(review) });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text.includes("too many reviews") ? "rate" : "HTTP " + res.status);
  }
  const local: PublicReview = {
    id: "local-" + Date.now(),
    created_at: new Date().toISOString(),
    author: review.author.trim(),
    rating: review.rating,
    body: review.body.trim(),
    lang: review.lang,
  };
  pending = [local, ...pending];
  emit({ status: state.status, reviews: [local, ...state.reviews] });
}
