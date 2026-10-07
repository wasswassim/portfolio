import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANGS, DEFAULT_LANG, LOCALE, isLang, type Lang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { articlePath, blogPath, languageAlternates, preferredPath } from "@/lib/i18n/routes";
import { allArticleParams, articleBySlug } from "@/content/articles";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, personLd, blogPostingLd, breadcrumbLd, faqLd, videoLd } from "@/lib/seo/jsonld";
import { faqPairsOf, headingsOf, readingMinutes, videosOf, wordCountOf } from "@/content/articles/blocks";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import BidiText from "@/components/blog/BidiText";
import GuideCard from "@/components/blog/GuideCard";
import ArticleBody from "@/components/blog/ArticleBody";

export const dynamicParams = false;

// Slugs are per-language, so params are validated (lang, slug) pairs from the registry.
export function generateStaticParams() {
  return allArticleParams();
}

type Props = { params: Promise<{ lang: string; slug: string }> };

async function load({ params }: Props) {
  const { lang: raw, slug } = await params;
  if (!isLang(raw)) notFound();
  const found = articleBySlug(raw, decodeURIComponent(slug));
  if (!found) notFound();
  return { lang: raw as Lang, ...found };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { lang, article, translation } = await load(props);
  const pathFor = (l: Lang) => {
    const t = article.translations[l];
    return t ? articlePath(l, t.slug) : null;
  };
  // x-default: the first language the article exists in (English first), else the English blog home
  const xDefault = preferredPath(pathFor, blogPath(DEFAULT_LANG));
  return buildMetadata({
    lang,
    path: articlePath(lang, translation.slug),
    title: translation.seoTitle,
    description: translation.metaDescription,
    languages: languageAlternates(pathFor, xDefault),
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    section: getDictionary(lang).categories[article.category],
    image: article.image && { ...article.image, alt: translation.imageAlt ?? translation.title },
  });
}

export default async function ArticlePage(props: Props) {
  const { lang, article, translation } = await load(props);
  const dict = getDictionary(lang);
  const path = articlePath(lang, translation.slug);
  // Equivalent page in each language, falling back to that language's blog home
  const switcherPaths = Object.fromEntries(
    LANGS.map((l) => {
      const t = article.translations[l];
      return [l, t ? articlePath(l, t.slug) : blogPath(l)];
    }),
  ) as Record<Lang, string>;
  const dateFmt = new Intl.DateTimeFormat(LOCALE[lang], { dateStyle: "long", timeZone: "UTC" });
  const fmt = (iso: string) => dateFmt.format(new Date(iso));
  const guide = translation.guide ?? [];
  const minutes = readingMinutes(lang, "", translation.body);
  const headings = headingsOf(translation.body).filter((h) => h.level === 2);
  const faq = faqLd(faqPairsOf([...translation.body, ...guide]));
  const videos = videosOf([...translation.body, ...guide])
    .map((v) => videoLd(v))
    .filter((v): v is NonNullable<typeof v> => v !== null);

  return (
    <>
      <a href="#main" className="blog-skip">{dict.nav.skip}</a>
      <BlogHeader lang={lang} dict={dict} switcherPaths={switcherPaths} />
      <main id="main" className="blog-main blog-main--article">
        <div className="blog-article-layout">
          <article className="blog-article">
            <a href={blogPath(lang)} className="blog-back">
              <span className="blog-arrow" aria-hidden="true">→</span>
              {dict.article.back}
            </a>
            <p className="blog-eyebrow" style={{ marginBlockStart: "1.5rem" }}>{dict.categories[article.category]}</p>
            <h1 className="blog-h1" style={{ viewTransitionName: `post-${article.id}` }}>
              <BidiText lang={lang}>{translation.title}</BidiText>
            </h1>
            <p className="blog-meta">
              <span>{dict.article.by} <a href={SITE_URL} rel="author">{SITE_NAME}</a></span>
              <span>{dict.article.published} <time dateTime={article.publishedAt}>{fmt(article.publishedAt)}</time></span>
              <span>{dict.article.updated} <time dateTime={article.updatedAt}>{fmt(article.updatedAt)}</time></span>
              <span>{dict.article.readTime(minutes)}</span>
              {article.lastVerified && (
                <span>{dict.article.verified} <time dateTime={article.lastVerified}>{fmt(article.lastVerified)}</time></span>
              )}
              <a href="#guide" className="blog-guide-jump">{dict.article.guide} <span aria-hidden="true">↓</span></a>
            </p>
            <ArticleBody body={translation.body} lang={lang} dict={dict} />
            {!article.lastVerified && <p className="blog-unverified">{dict.article.notVerified}</p>}
          </article>
          <GuideCard summary={translation.summary} headings={headings} guide={guide} lang={lang} dict={dict} />
        </div>
      </main>
      <BlogFooter dict={dict} />
      <JsonLd
        data={[
          personLd(),
          blogPostingLd({
            lang,
            path,
            headline: translation.title,
            description: translation.metaDescription,
            abstract: translation.summary,
            image: article.image,
            keywords: translation.keywords,
            section: dict.categories[article.category],
            wordCount: wordCountOf(translation.summary, [...translation.body, ...guide]),
            minutes,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
          }),
          breadcrumbLd([
            { name: SITE_NAME, path: "/" },
            { name: dict.blogName, path: blogPath(lang) },
            { name: translation.title, path },
          ]),
          ...(faq ? [faq] : []),
          ...videos,
        ]}
      />
    </>
  );
}
