import type { Metadata } from "next";
import { LANGS, DEFAULT_LANG, isLang, type Lang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { blogPath } from "@/lib/i18n/routes";

// /{lang}/ has no content of its own. Static export can't redirect server-side, so
// this page forwards with a meta refresh and points crawlers at the blog landing.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };
const toLang = (raw: string): Lang => (isLang(raw) ? raw : DEFAULT_LANG);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = toLang((await params).lang);
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: blogPath(lang) },
    other: { refresh: `0; url=${blogPath(lang)}` },
  };
}

export default async function LangHomePage({ params }: Props) {
  const lang = toLang((await params).lang);
  const dict = getDictionary(lang);
  return (
    <main className="blog-main">
      <p>
        <a href={blogPath(lang)} className="blog-back">{dict.notFound.cta}</a>
      </p>
    </main>
  );
}
