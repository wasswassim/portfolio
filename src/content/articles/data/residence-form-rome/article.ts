import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Companion to residenza-rome: how to fill in the Roma Capitale dichiarazione di residenza page by
// page, checked against the official form PDF (26-Dichiarazione_di_residenza_privacy.pdf) on 2026-10-21.
export const residenceFormRome: Article = {
  id: "residence-form-rome",
  category: "daily-life",
  publishedAt: "2026-10-21",
  updatedAt: "2026-10-21",
  lastVerified: null,
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
