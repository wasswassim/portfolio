import type { Metadata } from "next";
import { LANGS, DEFAULT_LANG, DIR, LANG_LABEL, LOCALE, type Lang } from "@/lib/i18n/config";
import { langStaticParams, toLang, type LangPageProps as Props } from "@/lib/i18n/params";
import { getDictionary } from "@/lib/i18n";
import { articlePath, blogPath, languageAlternates, preferredPath } from "@/lib/i18n/routes";
import { articlesForLang, langsWithArticles, resolveArticleLink, seriesPosition } from "@/content/articles";
import { stripMarkup } from "@/content/articles/blocks";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/site";
import { JsonLd, personLd, blogLd, breadcrumbLd, collectionPageLd, faqLd } from "@/lib/seo/jsonld";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import BidiText from "@/components/blog/BidiText";
import BlogCardList, { type BlogCardItem } from "@/components/blog/BlogCardList";
import BlogPersonas from "@/components/blog/BlogPersonas";
import BlogFaq from "@/components/blog/BlogFaq";
import type { ArticleTranslation } from "@/content/articles/types";
import type { SearchDoc } from "@/lib/blog-search";

export const dynamicParams = false;

// Markdown to plain text for the search index: links keep their anchor, emphasis marks go
const plain = (s: string) => s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "");

/** What the list search looks at for one post: keywords, summary, section headings and FAQ. */
function searchDoc(t: ArticleTranslation, extra: string[]): SearchDoc {
  const blocks = [...t.body, ...(t.guide ?? [])];
  return {
    title: t.title,
    description: [t.metaDescription, ...extra].join(" "),
    keywords: (t.keywords ?? []).join(" "),
    body: [t.summary, ...blocks.flatMap((b) => (b.type === "h2" || b.type === "h3" ? [b.text] : []))].map(plain).join(" "),
    faq: blocks.flatMap((b) => (b.type === "faq" ? b.items.map(({ q, a }) => ({ q: plain(q), a: plain(a) })) : [])),
  };
}

// Inline drops a link it cannot resolve, so a mistyped article id in the FAQ fails the build instead
function checkFaqLinks(lang: Lang, items: readonly { a: string }[]) {
  for (const { a } of items) {
    for (const [, href] of a.matchAll(/\]\((article:[^)\s]+)\)/g)) {
      if (!resolveArticleLink(lang, href)) throw new Error(`Blog index FAQ (${lang}): broken link "${href}"`);
    }
  }
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
  const faq = dict.landing.faq;
  checkFaqLinks(lang, faq.items);

  return (
    <>
      <a href="#main" className="blog-skip">{dict.nav.skip}</a>
      <BlogHeader lang={lang} dict={dict} switcherPaths={switcherPaths} />
      <main id="main" className="blog-landing">
        {/* Hero: satellite view of Italy (NASA MODIS, public domain) behind the title, via CSS */}
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <p className="blog-eyebrow"><BidiText lang={lang}>{dict.blogName}</BidiText></p>
            <h1 className="blog-h1"><BidiText lang={lang}>{dict.landing.heading}</BidiText></h1>
            <p className="blog-lead"><BidiText lang={lang}>{dict.landing.lead}</BidiText></p>
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
          // One card per post (newest first, series parts kept together in reading order), with a
          // small search field above the cards; every card is in the static HTML for crawlers.
          <BlogCardList
            lang={lang}
            items={items.map(({ article, translation }): BlogCardItem => {
              const series = seriesPosition(article, lang);
              const part = series ? dict.series.part(series.part, series.total) : undefined;
              const category = dict.categories[article.category];
              return {
                id: article.id,
                href: articlePath(lang, translation.slug),
                title: translation.title,
                description: translation.metaDescription,
                category,
                date: article.publishedAt,
                dateText: dateFmt.format(new Date(article.publishedAt)),
                part,
                search: searchDoc(translation, [category, part ?? ""]),
              };
            })}
            labels={{ ...dict.landing.search, read: dict.landing.read, allGuides: dict.landing.allGuides }}
            between={<BlogPersonas lang={lang} dict={dict} />}
          />
        )}
        {items.length > 0 && <BlogFaq lang={lang} title={faq.title} items={faq.items} />}
        </div>
      </main>
      <BlogFooter lang={lang} dict={dict} />
      <JsonLd
        data={[
          personLd(),
          blogLd(lang, blogPath(lang), dict.blogName, dict.landing.metaDescription),
          breadcrumbLd([
            { name: SITE_NAME, path: "/" },
            { name: dict.blogName, path: blogPath(lang) },
          ]),
          ...(items.length > 0
            ? [
                collectionPageLd({
                  lang,
                  path: blogPath(lang),
                  name: dict.landing.heading,
                  description: dict.landing.metaDescription,
                  // Same order as the cards
                  items: items.map(({ translation }) => ({ name: translation.title, path: articlePath(lang, translation.slug) })),
                }),
                faqLd(faq.items.map(({ q, a }) => ({ q, a: stripMarkup(a) }))),
              ]
            : []),
        ].filter((d) => d !== null)}
      />
    </>
  );
}
