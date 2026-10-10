import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 1 (hub) of the "study in Rome for Tunisian students" series (see ../../series.ts).
// Facts checked against official sources on 2026-10-09 for the 2027/28 intake.
export const studyInItaly: Article = {
  id: "study-in-italy",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
