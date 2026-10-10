import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 3 of the "study in Rome for Tunisian students" series (see ../../series.ts): legalisation,
// apostille, translation, DOV or CIMEA, and civil-status papers. Facts verified 2026-10-09.
export const documentsForItaly: Article = {
  id: "documents-for-italy",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
