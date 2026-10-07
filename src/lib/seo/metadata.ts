import type { Metadata } from "next";
import { LANGS, OG_LOCALE, type Lang } from "@/lib/i18n/config";
import { DEFAULT_SHARE_IMAGE, SITE_NAME, SITE_URL } from "./site";

type ShareImage = { src: string; width: number; height: number; alt: string };

type Args = {
  lang: Lang;
  /** Path of this page, with leading and trailing slash. */
  path: string;
  title: string;
  description: string;
  /** hreflang map (lang or "x-default" → path). */
  languages: Record<string, string>;
  /** Share card; falls back to the blog default. */
  image?: ShareImage;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Article section label (translated category). */
  section?: string;
};

/** Relative paths resolve against metadataBase set in the blog root layout. */
export function buildMetadata({
  lang,
  path,
  title,
  description,
  languages,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
}: Args): Metadata {
  const share = image ?? { ...DEFAULT_SHARE_IMAGE, alt: SITE_NAME };
  const images = [{ url: share.src, width: share.width, height: share.height, alt: share.alt }];
  return {
    title,
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical: path, languages },
    // Allow large image previews and full snippets (Discover, rich results)
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images,
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors: [SITE_URL], ...(section ? { section } : {}) }
        : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [share.src] },
  };
}
