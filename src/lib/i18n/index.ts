import type { Lang } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
import { ar } from "./dictionaries/ar";

const DICTIONARIES: Record<Lang, Dictionary> = { en, fr, ar };

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang];
}

export type { Dictionary };
