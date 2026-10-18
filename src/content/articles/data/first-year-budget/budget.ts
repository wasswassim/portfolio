import type { Lang } from "@/lib/i18n/config";
import { eurToTnd, feeById, sumFees, type FeeId } from "@/content/fees";

// Every number on the first-year budget page is computed here from src/content/fees.ts, so the page
// follows when a fee changes. Scenario: one Bachelor's or Master's student at Sapienza (lowest band,
// the flat fee for Tunisia), 12 months in Rome, first year. Food and personal spending are left out
// on purpose: there is no official figure for them (the blocked amount is the Embassy's benchmark).

const f = feeById;

export const BEFORE_LEAVING: FeeId[] = ["sapienza-application", "visa-study-d"];
export const ON_ARRIVAL: FeeId[] = ["permit-stamp", "permit-postal", "permit-card", "permit-contribution-1y", "postepay-issue"];
export const UNIVERSITY: FeeId[] = ["sapienza-band-a", "lazio-regional-tax", "uni-stamp"];
export const YEARLY_LIVING: FeeId[] = ["ssn-voluntary", "atac-annual", "postepay-year"];
const FIXED: FeeId[] = [...BEFORE_LEAVING, ...ON_ARRIVAL, ...UNIVERSITY, ...YEARLY_LIVING];

const MONTHS = 12;
const round2 = (n: number) => Math.round(n * 100) / 100;

export const B = {
  beforeLeaving: sumFees(BEFORE_LEAVING),
  onArrival: sumFees(ON_ARRIVAL),
  university: sumFees(UNIVERSITY),
  yearlyLiving: sumFees(YEARLY_LIVING),
  fixed: sumFees(FIXED),
  visaCentreTnd: f("visa-centre-fee").amount,
  privateRoom: { min: f("rome-private-room").amount * MONTHS, max: f("rome-private-room").amountMax! * MONTHS },
  privateRoomMonth: { min: f("rome-private-room").amount, max: f("rome-private-room").amountMax! },
  discoRoomMonth: { min: f("disco-residence").amount, max: f("disco-residence").amountMax! },
  blocked: f("visa-blocked-amount").amount,
  // The Embassy states EUR 783.06 x 13 months; update with blocked-amount each year
  blockedMonth: 783.06,
  ssn: f("ssn-voluntary").amount,
  discoBase: f("disco-base").amount,
  discoMax: f("disco-max").amount,
  lumsa: f("lumsa-tuition").amount,
  installationTnd: f("study-installation").amount,
  livingTnd: f("study-living").amount,
};

export const TOTAL_PRIVATE = { min: round2(B.fixed + B.privateRoom.min), max: round2(B.fixed + B.privateRoom.max) };

// Arabic uses Latin digits with comma grouping and a dot for decimals, like the fee boxes (FeeBox.tsx):
// a dot between thousands would read as millimes in Tunisia (6.000 TND = 6 dinars).
const LOCALES: Record<Lang, string> = { en: "en-GB", fr: "fr-FR", ar: "en-US" };

/** Amount as written in each language: "EUR 1,626.46", "1 626,46 EUR", "1,626.46 يورو" */
export function eur(lang: Lang, n: number): string {
  const v = new Intl.NumberFormat(LOCALES[lang], { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 }).format(n);
  return lang === "en" ? `EUR ${v}` : lang === "fr" ? `${v} EUR` : `${v} يورو`;
}

/** Dinars: whole as "5,476 TND", "5 476 TND", "5,476 د.ت"; with millimes as "68.300 TND", "68,300 TND", "68.300 د.ت" (as in the other posts) */
export function tnd(lang: Lang, n: number): string {
  const v = Number.isInteger(n)
    ? new Intl.NumberFormat(LOCALES[lang]).format(n)
    : new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-US", { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(n);
  return lang === "ar" ? `${v} د.ت` : `${v} TND`;
}

/** Dinar equivalent of a EUR amount at the stored BCT rate */
export const tndOf = (lang: Lang, eurAmount: number) => tnd(lang, eurToTnd(eurAmount));

/** EUR amount with its dinar equivalent at the stored BCT rate */
export const eurTnd = (lang: Lang, n: number) => `${eur(lang, n)} (${lang === "fr" ? "environ" : lang === "ar" ? "حوالي" : "about"} ${tnd(lang, eurToTnd(n))})`;

export const range = (lang: Lang, a: number, b: number) => `${eur(lang, a)} – ${eur(lang, b)}`;
