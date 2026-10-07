export const LANGS = ["en", "fr", "ar"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";

export const DIR: Record<Lang, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
  ar: "rtl",
};

// Locale tags used for hreflang / og:locale / Intl formatting
export const LOCALE: Record<Lang, string> = {
  en: "en-US",
  fr: "fr-FR",
  ar: "ar",
};

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_AR",
};

export const LANG_LABEL: Record<Lang, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}
