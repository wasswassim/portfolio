import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 1 (hub) of the "paying in euros from Tunisia" series (see ../../series.ts):
// how to pay Italian university fees from Tunisia, with the facts as verified on 2026-10-10.
export const internationalCardTunisia: Article = {
  id: "international-card-tunisia",
  category: "money",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
