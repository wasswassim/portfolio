import type { Metadata } from "next";
import { LANGS, type Lang } from "@/lib/i18n/config";
import { langStaticParams, toLang, type LangPageProps as Props } from "@/lib/i18n/params";
import { getDictionary } from "@/lib/i18n";
import { aboutPath, languageAlternates } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, absoluteUrl } from "@/lib/seo/site";
import { JsonLd, personLd } from "@/lib/seo/jsonld";
import { AUTHOR_AVATAR, AUTHOR_COPY, AUTHOR_EMAIL, AUTHOR_LINKEDIN } from "@/content/author";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import BidiText from "@/components/blog/BidiText";

// Author page: who writes the guides and how they are checked (E-E-A-T). Every byline and author box links here.
export const dynamicParams = false;

export function generateStaticParams() {
  return langStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const c = AUTHOR_COPY[lang];
  return buildMetadata({
    lang,
    path: aboutPath(lang),
    title: `${c.title}: ${SITE_NAME} | ${getDictionary(lang).blogName}`,
    description: c.description,
    languages: languageAlternates(aboutPath, aboutPath("en")),
  });
}

export default async function AboutPage({ params }: Props) {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  const c = AUTHOR_COPY[lang];
  const switcherPaths = Object.fromEntries(LANGS.map((l) => [l, aboutPath(l)])) as Record<Lang, string>;
  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(aboutPath(lang)),
    name: `${c.title}: ${SITE_NAME}`,
    inLanguage: lang,
    // The Person itself, as Google's ProfilePage documentation expects (not a reference to another block)
    mainEntity: { ...personLd(), "@context": undefined },
  };
  return (
    <>
      <a href="#main" className="blog-skip">{dict.nav.skip}</a>
      <div className="blog-paper">
        <BlogHeader lang={lang} dict={dict} switcherPaths={switcherPaths} />
        <main id="main" className="blog-main">
          <article className="blog-article">
            <div className="blog-about-head">
              {/* eslint-disable-next-line @next/next/no-img-element -- 3 KB static avatar; static export has no image optimiser */}
              <img className="blog-about-photo" src={AUTHOR_AVATAR} width={240} height={240} alt="" />
              <div>
                <h1 className="blog-h1">{SITE_NAME}</h1>
                <p className="blog-lead"><BidiText lang={lang}>{c.role}</BidiText></p>
              </div>
            </div>
            <div className="blog-prose">
              <p><BidiText lang={lang}>{c.intro}</BidiText></p>
              {c.sections.map((s) => (
                <section key={s.h}>
                  <h2 className="blog-h2">{s.h}</h2>
                  {s.p?.map((p) => <p key={p}><BidiText lang={lang}>{p}</BidiText></p>)}
                  {s.items && <ul>{s.items.map((i) => <li key={i}><BidiText lang={lang}>{i}</BidiText></li>)}</ul>}
                </section>
              ))}
              <p>
                {c.contact} <a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a> · <a href={AUTHOR_LINKEDIN} rel="me noopener noreferrer" target="_blank">LinkedIn</a>
              </p>
            </div>
          </article>
        </main>
        <BlogFooter lang={lang} dict={dict} />
      </div>
      <JsonLd data={profileLd} />
    </>
  );
}
