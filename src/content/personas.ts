import { LANGS } from "@/lib/i18n/config";
import { ARTICLES } from "./articles";

/**
 * "Who is this for?" cards on the blog index, in display order. The copy (question and text) is in
 * the dictionaries under landing.personas, keyed by id. Links are article ids, resolved per language
 * to the article's short title and slug.
 */
export const PERSONAS = [
  { id: "master", articleIds: ["apply-university-rome", "lazio-disco-scholarship", "isee-parificato-documents", "first-year-budget"] },
  { id: "bachelor", articleIds: ["apply-university-rome", "documents-for-italy", "italy-student-visa"] },
  { id: "phd", articleIds: ["study-in-italy", "italy-student-visa", "arriving-in-rome"] },
  { id: "worker", articleIds: ["work-in-italy-from-tunisia", "work-contract-in-italy"] },
  { id: "fees", articleIds: ["international-card-tunisia", "technology-card-tunisia", "pay-pagopa-from-abroad", "redotpay-tunisia"] },
  { id: "arrived", articleIds: ["arriving-in-rome", "bank-account-italy-student", "residenza-rome", "student-jobs-rome", "student-housing-rome"] },
] as const satisfies readonly { id: string; articleIds: readonly string[] }[];

export type PersonaId = (typeof PERSONAS)[number]["id"];

// Fail the build when a card links to an article that is missing in any language
for (const persona of PERSONAS) {
  if (persona.articleIds.length < 2 || persona.articleIds.length > 5) {
    throw new Error(`Persona "${persona.id}": needs 2 to 5 links`);
  }
  for (const id of persona.articleIds) {
    const article = ARTICLES.find((a) => a.id === id);
    if (!article) throw new Error(`Persona "${persona.id}": unknown article "${id}"`);
    const missing = LANGS.filter((l) => !article.translations[l]);
    if (missing.length) throw new Error(`Persona "${persona.id}": article "${id}" has no ${missing.join(", ")} translation`);
  }
}
