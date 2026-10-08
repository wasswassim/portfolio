import { LANGS, type Lang } from "@/lib/i18n/config";
import { headingIdsOf } from "./blocks";
import { workInItalyFromTunisia } from "./data/work-in-italy-from-tunisia/article";
import type { Article, ArticleTranslation } from "./types";

// One file per article under ./data; add it to this list to publish it.
export const ARTICLES: readonly Article[] = [workInItalyFromTunisia];

// Fail the build on content mistakes: duplicate heading ids would break the table of
// contents and in-page links.
for (const article of ARTICLES) {
  for (const lang of LANGS) {
    const t = article.translations[lang];
    if (!t) continue;
    const ids = headingIdsOf([...t.body, ...(t.guide ?? [])]);
    const dupe = ids.find((id, i) => ids.indexOf(id) !== i);
    if (dupe) throw new Error(`Article "${article.id}" (${lang}): duplicate heading id "${dupe}"`);
  }
}

export function articleBySlug(
  lang: Lang,
  slug: string,
): { article: Article; translation: ArticleTranslation } | undefined {
  for (const article of ARTICLES) {
    const translation = article.translations[lang];
    if (translation && translation.slug === slug) return { article, translation };
  }
  return undefined;
}

/** (lang, slug) pairs for generateStaticParams; only languages that exist for the article. */
export function allArticleParams(): { lang: Lang; slug: string }[] {
  const out: { lang: Lang; slug: string }[] = [];
  for (const article of ARTICLES) {
    for (const lang of LANGS) {
      const t = article.translations[lang];
      if (t) out.push({ lang, slug: t.slug });
    }
  }
  return out;
}

export function articlesForLang(lang: Lang): { article: Article; translation: ArticleTranslation }[] {
  return ARTICLES.flatMap((article) => {
    const translation = article.translations[lang];
    return translation ? [{ article, translation }] : [];
  }).sort((a, b) => b.article.publishedAt.localeCompare(a.article.publishedAt));
}

/** Languages that have at least one published article (empty language landings stay out of the sitemap and hreflang). */
export function langsWithArticles(): Lang[] {
  return LANGS.filter((lang) => ARTICLES.some((a) => a.translations[lang]));
}
