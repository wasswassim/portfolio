import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 2 of the "paying in euros from Tunisia" series (see ../../series.ts):
// the international technology card (CTI), with the facts as verified on 2026-10-10.
export const technologyCardTunisia: Article = {
  id: "technology-card-tunisia",
  category: "money",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-12",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
