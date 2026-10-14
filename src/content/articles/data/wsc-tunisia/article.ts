import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Standalone post (not in a series): the owner's experience with WSC, the agency that handled his move
// to Rome, with a link to the matching free guide at each step. Agency facts checked on wsctunisia.com.
export const wscTunisia: Article = {
  id: "wsc-tunisia",
  category: "studies",
  publishedAt: "2026-10-14",
  updatedAt: "2026-10-14",
  lastVerified: "2026-10-14",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
