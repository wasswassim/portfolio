import type { Metadata } from "next";
import { LANGS, DEFAULT_LANG, LOCALE, isLang, type Lang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { articlePath, blogPath, languageAlternates } from "@/lib/i18n/routes";
import { articlesForLang } from "@/content/articles";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, personLd, blogLd, breadcrumbLd } from "@/lib/seo/jsonld";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import BidiText from "@/components/blog/BidiText";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };

const toLang = (raw: string): Lang => (isLang(raw) ? raw : DEFAULT_LANG);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  return buildMetadata({
    lang,
    path: blogPath(lang),
    title: dict.blogName,
    description: dict.blogTagline,
    languages: languageAlternates(blogPath, blogPath(DEFAULT_LANG)),
  });
}

export default async function BlogLandingPage({ params }: Props) {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  const items = articlesForLang(lang);
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
          <p className="blog-lead" style={{ marginBlockStart: "2.5rem" }}>{dict.landing.empty}</p>
        ) : (
          <ul className="blog-list">
            {items.map(({ article, translation }) => (
              <li key={article.id} className="blog-card">
                <a href={articlePath(lang, translation.slug)}>
                  <span className="blog-meta">
                    <span className="blog-cat">{dict.categories[article.category]}</span>
                    <time dateTime={article.publishedAt}>{dateFmt.format(new Date(article.publishedAt))}</time>
                  </span>
                  <h2 style={{ viewTransitionName: `post-${article.id}` }}>
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
          blogLd(lang, blogPath(lang), dict.blogTagline),
          breadcrumbLd([{ name: dict.blogName, path: blogPath(lang) }]),
        ]}
      />
    </>
  );
}
