import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 6 of the "study in Rome for Tunisian students" series (see ../../series.ts):
// the first 30 days after arrival, with the facts as verified on 2026-10-09.
export const arrivingInRome: Article = {
  id: "arriving-in-rome",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
