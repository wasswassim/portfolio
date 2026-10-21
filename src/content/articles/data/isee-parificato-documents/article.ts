import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Companion to lazio-disco-scholarship: each Tunisian family document the CAF needs for the ISEE
// parificato (ISEEUP), what it proves and where to get it. Photos are crops of the owner's own
// translated documents, showing the title only (public/blog/caf-documents/).
export const iseeParificatoDocuments: Article = {
  id: "isee-parificato-documents",
  category: "studies",
  publishedAt: "2026-10-21",
  updatedAt: "2026-10-21",
  lastVerified: null,
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
