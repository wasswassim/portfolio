import type { Article } from "../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// TEMPLATE (copied by `npm run new-article`). Replace the dates; set lastVerified to null until the
// facts are checked against an official source, then to that date.
export const articleTemplate: Article = {
  id: "template-article",
  category: "daily-life", // documents | work | studies | language | daily-life
  publishedAt: "2026-01-01",
  updatedAt: "2026-01-01",
  lastVerified: null,
  // Optional 1200x630 share image in /public/blog/ (falls back to the blog default):
  // image: { src: "/blog/og-your-article.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
