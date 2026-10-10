import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 5 of the "study in Rome" series (see ../../series.ts): student visa and blocked account.
export const italyStudentVisa: Article = {
  id: "italy-student-visa",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
