import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 7 of the "study in Rome for Tunisian students" series (see ../../series.ts): housing.
// Facts verified on 2026-10-09 against the DiSCo, university, Agenzia delle Entrate and Polizia pages in the sources block.
export const studentHousingRome: Article = {
  id: "student-housing-rome",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
