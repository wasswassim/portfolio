import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 3 of the "settling in Rome" series (see ../../series.ts):
// legal hour limits on a study permit and where Tunisian students find part-time work in Rome, verified on 2026-10-10.
export const studentJobsRome: Article = {
  id: "student-jobs-rome",
  category: "daily-life",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
