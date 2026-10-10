import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 2 of the "settling in Rome" series (see ../../series.ts): registering residence at the
// anagrafe and getting the carta d'identità, with the facts as verified on 2026-10-10.
export const residenzaRome: Article = {
  id: "residenza-rome",
  category: "daily-life",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
