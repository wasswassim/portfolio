import type { Metadata } from "next";
import { LANGS, DEFAULT_LANG, DIR, LANG_LABEL, LOCALE, type Lang } from "@/lib/i18n/config";
import { langStaticParams, toLang, type LangPageProps as Props } from "@/lib/i18n/params";
import { getDictionary } from "@/lib/i18n";
import { articlePath, blogPath, languageAlternates, preferredPath } from "@/lib/i18n/routes";
import { articlesForLang, langsWithArticles, seriesPosition, type SeriesPosition } from "@/content/articles";
import type { Article, ArticleTranslation } from "@/content/articles/types";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/site";
import { JsonLd, personLd, blogLd, breadcrumbLd } from "@/lib/seo/jsonld";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import BidiText from "@/components/blog/BidiText";

export const dynamicParams = false;

type ListItem = { article: Article; translation: ArticleTranslation; series: SeriesPosition | undefined };

/** Consecutive posts of the same series become one group; other posts are grouped together. */
function groupBySeries(items: ListItem[]): { key: string; series: SeriesPosition | undefined; items: ListItem[] }[] {
  const groups: { key: string; series: SeriesPosition | undefined; items: ListItem[] }[] = [];
  for (const item of items) {
    const key = item.series?.series.id ?? "other";
    const last = groups.at(-1);
    if (last && last.key === key) last.items.push(item);
    else groups.push({ key, series: item.series, items: [item] });
  }
  return groups;
}

export function generateStaticParams() {
  return langStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  // Only languages with articles are alternates; an empty language landing is kept out of the index
  const live = langsWithArticles();
  const pathFor = (l: Lang) => (live.includes(l) ? blogPath(l) : null);
  const meta = buildMetadata({
    lang,
    path: blogPath(lang),
    title: dict.landing.seoTitle,
    description: dict.landing.metaDescription,
    languages: languageAlternates(pathFor, preferredPath(pathFor, blogPath(DEFAULT_LANG))),
  });
  return live.includes(lang) ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default async function BlogLandingPage({ params }: Props) {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  const items = articlesForLang(lang);
  // With nothing in this language yet, point readers at the other editions instead of a dead end
  const others = items.length === 0
    ? LANGS.filter((l) => l !== lang).flatMap((l) => articlesForLang(l).map((x) => ({ ...x, lang: l })))
    : [];
  const switcherPaths = Object.fromEntries(LANGS.map((l) => [l, blogPath(l)])) as Record<Lang, string>;
  const dateFmt = new Intl.DateTimeFormat(LOCALE[lang], { dateStyle: "long", timeZone: "UTC" });

  return (
    <>
      <a href="#main" className="blog-skip">{dict.nav.skip}</a>
      <BlogHeader lang={lang} dict={dict} switcherPaths={switcherPaths} />
      <main id="main" className="blog-landing">
        {/* Hero: satellite view of Italy (NASA MODIS, public domain) behind the title, via CSS */}
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <p className="blog-eyebrow">{dict.nav.blog}</p>
            <h1 className="blog-h1"><BidiText lang={lang}>{dict.landing.heading}</BidiText></h1>
            <p className="blog-lead"><BidiText lang={lang}>{dict.blogTagline}</BidiText></p>
          </div>
          <a
            className="blog-hero-credit"
            href="https://commons.wikimedia.org/wiki/File:Late_Summer_in_Italy_(MODIS_2025-09-21).jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.landing.imageCredit}
          </a>
        </section>

        <div className="blog-main">
        {items.length === 0 ? (
          <>
            <p className="blog-lead" style={{ marginBlockStart: "2.5rem" }}>{dict.landing.empty}</p>
            {others.length > 0 && (
              <>
                <p className="blog-eyebrow" style={{ marginBlockStart: "2rem" }}>{dict.landing.other}</p>
                <ul className="blog-list" style={{ marginBlockStart: "0.8rem" }}>
                  {others.map(({ article, translation, lang: l }) => (
                    <li key={`${article.id}-${l}`} className="blog-card">
                      <a href={articlePath(l, translation.slug)} lang={l} hrefLang={l} dir={DIR[l]}>
                        <span className="blog-meta">
                          <span className="blog-cat">{LANG_LABEL[l]}</span>
                        </span>
                        <h2>{translation.title}</h2>
                        <p>{translation.metaDescription}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        ) : (
          // Posts of a series are listed together (articlesForLang keeps them adjacent, hub first)
          // under the series name; posts outside a series form their own group without a heading.
          groupBySeries(items.map((x) => ({ ...x, series: seriesPosition(x.article, lang) }))).map((group) => (
          <section key={group.key} className="blog-group" aria-labelledby={group.series ? "group-" + group.key : undefined}>
            {group.series && (
              <div className="blog-group-head">
                <h2 id={"group-" + group.key} className="blog-group-title">
                  <BidiText lang={lang}>{(group.series.series.topic ?? group.series.series.title)[lang]}</BidiText>
                </h2>
                <p className="blog-group-count">{dict.series.parts(group.series.total)}</p>
              </div>
            )}
          <ul className={group.series ? "blog-list blog-cards" : "blog-list"}>
            {group.items.map(({ article, translation, series }) => {
              const Title = group.series ? "h3" : "h2";
              return (
              <li key={article.id} className="blog-card">
                <a href={articlePath(lang, translation.slug)}>
                  <span className="blog-meta">
                    <span className="blog-cat">{dict.categories[article.category]}</span>
                    <time dateTime={article.publishedAt}>{dateFmt.format(new Date(article.publishedAt))}</time>
                    {series && <span className="blog-part">{dict.series.part(series.part, series.total)}</span>}
                  </span>
                  <Title>
                    <BidiText lang={lang}>{translation.title}</BidiText>
                  </Title>
                  <p><BidiText lang={lang}>{translation.metaDescription}</BidiText></p>
                  <span className="blog-meta">
                    {dict.landing.read} <span className="blog-arrow" aria-hidden="true">→</span>
                  </span>
                </a>
              </li>
              );
            })}
          </ul>
          </section>
          ))
        )}
        </div>
      </main>
      <BlogFooter dict={dict} />
      <JsonLd
        data={[
          personLd(),
          blogLd(lang, blogPath(lang), dict.blogName, dict.landing.metaDescription),
          breadcrumbLd([
            { name: SITE_NAME, path: "/" },
            { name: dict.blogName, path: blogPath(lang) },
          ]),
        ]}
      />
    </>
  );
}
