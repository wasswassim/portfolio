import type { Article } from "../../types";
import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

// Part 3 of the "paying Italian fees from Tunisia" series (see ../../series.ts):
// paying a pagoPA notice with PayPal or an international card, facts as verified on 2026-10-10.
export const payPagopaFromAbroad: Article = {
  id: "pay-pagopa-from-abroad",
  category: "money",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  lastVerified: "2026-10-10",
  image: { src: "/blog/og-colosseum.jpg", width: 1200, height: 630 },
  translations: { en, fr, ar },
};
