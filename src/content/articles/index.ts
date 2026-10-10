import { LANGS, type Lang } from "@/lib/i18n/config";
import { articlePath } from "@/lib/i18n/routes";
import { headingIdsOf } from "./blocks";
import { workInItalyFromTunisia } from "./data/work-in-italy-from-tunisia/article";
import { workContractInItaly } from "./data/work-contract-in-italy/article";
import { studyInItaly } from "./data/study-in-italy/article";
import { applyUniversityRome } from "./data/apply-university-rome/article";
import { documentsForItaly } from "./data/documents-for-italy/article";
import { lazioDiscoScholarship } from "./data/lazio-disco-scholarship/article";
import { italyStudentVisa } from "./data/italy-student-visa/article";
import { arrivingInRome } from "./data/arriving-in-rome/article";
import { studentHousingRome } from "./data/student-housing-rome/article";
import { SERIES, type Series } from "./series";
import type { Article, ArticleTranslation } from "./types";

// One file per article under ./data; add it to this list to publish it.
export const ARTICLES: readonly Article[] = [
  workInItalyFromTunisia,
  workContractInItaly,
  studyInItaly,
  applyUniversityRome,
  documentsForItaly,
  lazioDiscoScholarship,
  italyStudentVisa,
  arrivingInRome,
  studentHousingRome,
];

// Fail the build on content mistakes: duplicate heading ids would break the table of
// contents and in-page links.
for (const article of ARTICLES) {
  for (const lang of LANGS) {
    const t = article.translations[lang];
    if (!t) continue;
    const ids = headingIdsOf([...t.body, ...(t.guide ?? [])]);
    const dupe = ids.find((id, i) => ids.indexOf(id) !== i);
    if (dupe) throw new Error(`Article "${article.id}" (${lang}): duplicate heading id "${dupe}"`);
    for (const b of [...t.body, ...(t.guide ?? [])]) {
      if (b.type === "table" && b.rows.some((r) => r.length !== b.head.length)) {
        throw new Error(`Article "${article.id}" (${lang}): a table row does not have ${b.head.length} cells ("${b.caption}")`);
      }
    }
  }
}

// A series may only list published articles, and an article may sit in one series only.
const seriesOfArticle = new Map<string, Series>();
for (const series of SERIES) {
  for (const id of series.articleIds) {
    if (!ARTICLES.some((a) => a.id === id)) throw new Error(`Series "${series.id}": unknown article "${id}"`);
    if (seriesOfArticle.has(id)) throw new Error(`Article "${id}" is in more than one series`);
    seriesOfArticle.set(id, series);
  }
}

export function articleById(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
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

/**
 * Resolves an in-text link to another article, written `article:<id>` or `article:<id>#<heading>`,
 * to its path in the given language. Null when the article has no translation in that language.
 */
export function resolveArticleLink(lang: Lang, href: string): string | null {
  const m = /^article:([a-z0-9-]+)(#[a-z0-9-]+)?$/.exec(href);
  const t = m ? articleById(m[1])?.translations[lang] : undefined;
  return t ? articlePath(lang, t.slug) + (m?.[2] ?? "") : null;
}

export type SeriesPart = { article: Article; translation: ArticleTranslation; part: number };

export type SeriesPosition = {
  series: Series;
  /** 1-based part number of the current article */
  part: number;
  total: number;
  parts: SeriesPart[];
  hub: SeriesPart;
  prev?: SeriesPart;
  next?: SeriesPart;
};

/** Where an article sits in its series, counting only the parts that exist in this language. */
export function seriesPosition(article: Article, lang: Lang): SeriesPosition | undefined {
  const series = seriesOfArticle.get(article.id);
  if (!series) return undefined;
  const parts = series.articleIds.flatMap((id): SeriesPart[] => {
    const a = articleById(id);
    const translation = a?.translations[lang];
    return a && translation ? [{ article: a, translation, part: 0 }] : [];
  });
  parts.forEach((p, i) => (p.part = i + 1));
  const index = parts.findIndex((p) => p.article.id === article.id);
  if (index < 0 || parts.length < 2) return undefined;
  return {
    series,
    part: index + 1,
    total: parts.length,
    parts,
    hub: parts[0],
    prev: parts[index - 1],
    next: parts[index + 1],
  };
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

/**
 * Newest first, but the parts of a series stay together in reading order (hub first),
 * placed where the series' newest part would be.
 */
export function articlesForLang(lang: Lang): { article: Article; translation: ArticleTranslation }[] {
  const groupDate = (a: Article) => {
    const series = seriesOfArticle.get(a.id);
    if (!series) return a.publishedAt;
    return series.articleIds.map((id) => articleById(id)!.publishedAt).sort().at(-1)!;
  };
  const partIndex = (a: Article) => seriesOfArticle.get(a.id)?.articleIds.indexOf(a.id) ?? 0;
  const groupId = (a: Article) => seriesOfArticle.get(a.id)?.id ?? a.id;
  return ARTICLES.flatMap((article) => {
    const translation = article.translations[lang];
    return translation ? [{ article, translation }] : [];
  }).sort(
    (a, b) =>
      groupDate(b.article).localeCompare(groupDate(a.article)) ||
      groupId(a.article).localeCompare(groupId(b.article)) ||
      partIndex(a.article) - partIndex(b.article),
  );
}

/** Languages that have at least one published article (empty language landings stay out of the sitemap and hreflang). */
export function langsWithArticles(): Lang[] {
  return LANGS.filter((lang) => ARTICLES.some((a) => a.translations[lang]));
}
