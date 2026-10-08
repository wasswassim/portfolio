import type { Metadata } from "next";
import { LANGS, DEFAULT_LANG, DIR, LANG_LABEL, LOCALE, type Lang } from "@/lib/i18n/config";
import { langStaticParams, toLang, type LangPageProps as Props } from "@/lib/i18n/params";
import { getDictionary } from "@/lib/i18n";
import { articlePath, blogPath, languageAlternates, preferredPath } from "@/lib/i18n/routes";
import { articlesForLang, langsWithArticles } from "@/content/articles";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/site";
import { JsonLd, personLd, blogLd, breadcrumbLd } from "@/lib/seo/jsonld";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import BidiText from "@/components/blog/BidiText";

export const dynamicParams = false;

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
      <main id="main" className="blog-main">
        <p className="blog-eyebrow">{dict.nav.blog}</p>
        <h1 className="blog-h1"><BidiText lang={lang}>{dict.landing.heading}</BidiText></h1>
        <p className="blog-lead"><BidiText lang={lang}>{dict.blogTagline}</BidiText></p>

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
          <ul className="blog-list">
            {items.map(({ article, translation }) => (
              <li key={article.id} className="blog-card">
                <a href={articlePath(lang, translation.slug)}>
                  <span className="blog-meta">
                    <span className="blog-cat">{dict.categories[article.category]}</span>
                    <time dateTime={article.publishedAt}>{dateFmt.format(new Date(article.publishedAt))}</time>
                  </span>
                  <h2>
                    <BidiText lang={lang}>{translation.title}</BidiText>
                  </h2>
                  <p><BidiText lang={lang}>{translation.metaDescription}</BidiText></p>
                  <span className="blog-meta">
                    {dict.landing.read} <span className="blog-arrow" aria-hidden="true">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
      <BlogFooter dict={dict} />
      <JsonLd
        data={[
          personLd(),
          blogLd(lang, blogPath(lang), dict.landing.metaDescription),
          breadcrumbLd([
            { name: SITE_NAME, path: "/" },
            { name: dict.blogName, path: blogPath(lang) },
          ]),
        ]}
      />
    </>
  );
}
