// Turns the article registry (src/content/articles) into the matcher's indexes. Imported straight
// from TypeScript through tsx, so slugs, former slugs and keywords are exactly what the site builds.
import { ARTICLES } from "@/content/articles";
import type { Article } from "@/content/articles/types";
import { articlePath } from "@/lib/i18n/routes";
import { LANGS } from "@/lib/i18n/config";
import { normalize, tokens, type IndexEntry, type UrlIndex } from "./analyze";

export function buildIndex(articles: readonly Article[]): { urls: UrlIndex; entries: IndexEntry[] } {
  const urls: UrlIndex = new Map();
  const entries: IndexEntry[] = [];
  for (const article of articles) {
    for (const lang of LANGS) {
      const t = article.translations[lang];
      if (!t) continue;
      const path = articlePath(lang, t.slug);
      urls.set(path, { id: article.id, lang, former: false });
      for (const old of t.formerSlugs ?? []) urls.set(articlePath(lang, old), { id: article.id, lang, former: true });
      const keywords = t.keywords ?? [];
      entries.push({
        id: article.id,
        lang,
        path,
        keywords: keywords.map(normalize),
        termSets: [...keywords, t.seoTitle, t.title].map(tokens),
        slugTokens: tokens(t.slug.replace(/-/g, " ")),
      });
    }
  }
  return { urls, entries };
}

export const loadIndex = () => buildIndex(ARTICLES);
