import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 1 of the "settling in Rome" series (see ../../series.ts): opening a bank account
// after arrival, with the facts as verified on 2026-10-10 (research 09-banking).
export const bankAccountItalyStudent: Article = {
  id: "bank-account-italy-student",
  category: "daily-life",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
