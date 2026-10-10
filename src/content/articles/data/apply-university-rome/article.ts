import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 2 of the "study in Rome for Tunisian students" series (see ../../series.ts): choosing a university
// in Rome and applying, then the Universitaly pre-enrolment. Facts verified on 2026-10-09 for the 2027/28 cycle.
export const applyUniversityRome: Article = {
  id: "apply-university-rome",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
