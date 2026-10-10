import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 4 of the "study in Rome" series (see ../../series.ts). Facts from the DiSCo Lazio 2026/27 call
// (bando, Allegato L, international FAQ), verified 2026-10-09; 2027/28 dates are projected.
export const lazioDiscoScholarship: Article = {
  id: "lazio-disco-scholarship",
  category: "studies",
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  lastVerified: "2026-10-09",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
