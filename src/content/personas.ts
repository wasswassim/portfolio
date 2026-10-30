import { LANGS } from "@/lib/i18n/config";
import { ARTICLES, articlePhoto } from "./articles";

/**
 * "Who is this for?" rows on the blog index, in display order. The copy (question and text) is in
 * the dictionaries under landing.personas, keyed by id. Links are article ids, resolved per language
 * to the article's short title and slug. The photo is one already used in an article, so its alt
 * text and credit come from that article in each language.
 */
export const PERSONAS = [
  {
    id: "master",
    photo: { articleId: "student-jobs-rome", src: "/blog/sapienza-department-entrance.webp" },
    articleIds: ["apply-university-rome", "lazio-disco-scholarship", "isee-parificato-documents", "first-year-budget"],
  },
  {
    id: "bachelor",
    photo: { articleId: "apply-university-rome", src: "/blog/gallery/uni-roma-tre.webp" },
    articleIds: ["apply-university-rome", "documents-for-italy", "italy-student-visa"],
  },
  {
    id: "phd",
    photo: { articleId: "study-in-italy", src: "/blog/university-library-italy.webp" },
    articleIds: ["study-in-italy", "italy-student-visa", "arriving-in-rome"],
  },
  {
    id: "worker",
    photo: { articleId: "work-in-italy-from-tunisia", src: "/blog/welding-training.webp" },
    articleIds: ["work-in-italy-from-tunisia", "work-contract-in-italy"],
  },
  {
    id: "fees",
    photo: { articleId: "international-card-tunisia", src: "/blog/central-bank-tunisia.webp" },
    articleIds: ["international-card-tunisia", "technology-card-tunisia", "pay-pagopa-from-abroad", "redotpay-tunisia"],
  },
  {
    id: "arrived",
    photo: { articleId: "arriving-in-rome", src: "/blog/tram-rome.webp" },
    articleIds: ["arriving-in-rome", "bank-account-italy-student", "residenza-rome", "student-jobs-rome", "student-housing-rome"],
  },
] as const satisfies readonly { id: string; photo: { articleId: string; src: string }; articleIds: readonly string[] }[];

export type PersonaId = (typeof PERSONAS)[number]["id"];

// Fail the build when a row links to an article, or uses a photo, that is missing in any language
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
  for (const lang of LANGS) articlePhoto(lang, persona.photo.articleId, persona.photo.src);
}
