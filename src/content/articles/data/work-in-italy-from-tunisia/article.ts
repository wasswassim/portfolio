import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Dates and lastVerified follow the author's document ("last updated / last verified:
// October 2026"); adjust if they differ.
export const workInItalyFromTunisia: Article = {
  id: "work-in-italy-from-tunisia",
  category: "work",
  publishedAt: "2026-10-07",
  updatedAt: "2026-10-07",
  lastVerified: "2026-10-07",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
