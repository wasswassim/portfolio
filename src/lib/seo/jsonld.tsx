import { AUTHOR_ID, SITE_NAME, SITE_URL, SOCIAL_PROFILES, absoluteUrl } from "./site";

type JsonLdValue = Record<string, unknown>;

/** Renders a JSON-LD block. "<" is escaped so article text can never close the script tag. */
export function JsonLd({ data }: { data: JsonLdValue | JsonLdValue[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Drops null/undefined so optional fields are omitted, never printed as "null". */
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
  sameAs: SOCIAL_PROFILES,
});

export const blogLd = (lang: string, path: string, name: string, description: string): JsonLdValue => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name,
  description,
  inLanguage: lang,
  url: absoluteUrl(path),
  author: { "@id": AUTHOR_ID },
  publisher: { "@id": AUTHOR_ID },
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
  abstract: string;
  image?: { src: string; width: number; height: number };
  keywords?: string[];
  section: string;
  wordCount: number;
  minutes: number;
  publishedAt: string;
  updatedAt: string;
  /** Series membership: the hub's path identifies the series (CreativeWorkSeries), position is the part number */
  series?: { name: string; hubPath: string; position: number };
}): JsonLdValue =>
  clean({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.headline,
    description: a.description,
    abstract: a.abstract,
    inLanguage: a.lang,
    mainEntityOfPage: absoluteUrl(a.path),
    url: absoluteUrl(a.path),
    image: a.image
      ? { "@type": "ImageObject", url: absoluteUrl(a.image.src), width: a.image.width, height: a.image.height }
      : undefined,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt,
    articleSection: a.section,
    keywords: a.keywords?.join(", "),
    wordCount: a.wordCount,
    timeRequired: `PT${a.minutes}M`,
    isAccessibleForFree: true,
    isPartOf: a.series
      ? {
          "@type": "CreativeWorkSeries",
          "@id": absoluteUrl(a.series.hubPath) + "#series",
          name: a.series.name,
          url: absoluteUrl(a.series.hubPath),
          inLanguage: a.lang,
        }
      : undefined,
    position: a.series?.position,
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

/** VideoObject for an embedded video; null when no thumbnail can be resolved (required by search engines). */
export const videoLd = (v: {
  provider: "youtube" | "vimeo" | "file";
  id: string;
  title: string;
  description: string;
  uploadDate: string;
  thumbnail?: string;
  duration?: string;
}): JsonLdValue | null => {
  const thumb =
    v.thumbnail !== undefined
      ? absoluteUrl(v.thumbnail)
      : v.provider === "youtube"
        ? "https://i.ytimg.com/vi/" + v.id + "/hqdefault.jpg"
        : undefined;
  if (!thumb) return null;
  return clean({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    thumbnailUrl: thumb,
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl:
      v.provider === "youtube"
        ? "https://www.youtube-nocookie.com/embed/" + v.id
        : v.provider === "vimeo"
          ? "https://player.vimeo.com/video/" + v.id
          : undefined,
    contentUrl: v.provider === "file" ? absoluteUrl(v.id) : undefined,
  });
};
