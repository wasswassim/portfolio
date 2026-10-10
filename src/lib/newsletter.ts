import type { Lang } from "@/lib/i18n/config";

/**
 * Brevo "Simple HTML" form endpoints, one form (and list) per language so the double opt-in
 * email arrives in the reader's language. Public URLs only: no API key ever goes here.
 * While a value is empty the newsletter card is not rendered for that language.
 */
export const NEWSLETTER_ACTION: Record<Lang, string> = {
  en: "",
  fr: "",
  ar: "",
};
