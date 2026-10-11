import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 4 of the payment series (see ../../series.ts): RedotPay, P2P top-up, the legal position
// for residents of Tunisia and wallet safety, with the facts as verified on 2026-10-10.
export const redotpayTunisia: Article = {
  id: "redotpay-tunisia",
  category: "money",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
