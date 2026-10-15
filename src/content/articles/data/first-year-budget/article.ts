import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Standalone data page: the first-year budget for a Tunisian student in Rome, computed from
// src/content/fees.ts (see ./budget.ts). Re-verify every year with the new fees and blocked amount.
export const firstYearBudget: Article = {
  id: "first-year-budget",
  category: "money",
  publishedAt: "2026-10-15",
  updatedAt: "2026-10-15",
  lastVerified: "2026-10-15",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
