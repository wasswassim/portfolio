import { AUTHOR_ID, BLOG_NAME, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

type JsonLdValue = Record<string, unknown>;

/** Renders a JSON-LD block. "<" is escaped so article text can never close the script tag. */
export function JsonLd({ data }: { data: JsonLdValue | JsonLdValue[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Drops null/undefined so an unverified lastVerified is omitted, never printed as "null". */
function clean<T extends JsonLdValue>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined),
  ) as T;
}

export const personLd = (): JsonLdValue => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: SITE_NAME,
  url: SITE_URL,
});

export const blogLd = (lang: string, path: string, description: string): JsonLdValue => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name: BLOG_NAME,
  description,
  inLanguage: lang,
  url: absoluteUrl(path),
  author: { "@id": AUTHOR_ID },
});

export const breadcrumbLd = (items: { name: string; path: string }[]): JsonLdValue => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const blogPostingLd = (a: {
  lang: string;
  path: string;
  headline: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
}): JsonLdValue =>
  clean({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.headline,
    description: a.description,
    inLanguage: a.lang,
    mainEntityOfPage: absoluteUrl(a.path),
    datePublished: a.publishedAt,
    dateModified: a.updatedAt,
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": AUTHOR_ID },
  });

export const faqLd = (pairs: { q: string; a: string }[]): JsonLdValue | null =>
  pairs.length === 0
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: pairs.map((p) => ({
          "@type": "Question",
          name: p.q,
          acceptedAnswer: { "@type": "Answer", text: p.a },
        })),
      };
