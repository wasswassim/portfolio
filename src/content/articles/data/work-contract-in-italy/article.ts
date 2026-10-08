import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 2 of the "work in Italy from Tunisia" series (see ../../series.ts). The text moved here from
// part 1 on 2026-10-08, with the facts as verified that day.
export const workContractInItaly: Article = {
  id: "work-contract-in-italy",
  category: "work",
  publishedAt: "2026-10-08",
  updatedAt: "2026-10-08",
  lastVerified: "2026-10-08",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
