import type { Metadata } from "next";
import { LANGS, OG_LOCALE, type Lang } from "@/lib/i18n/config";
import { SITE_NAME } from "./site";

// Existing site asset; swap for a dedicated 1200x630 card when one exists.
const DEFAULT_OG_IMAGE = "/wassimage.png";

type Args = {
  lang: Lang;
  /** Path of this page, with leading and trailing slash. */
  path: string;
  title: string;
  description: string;
  /** hreflang map (lang or "x-default" → path). */
  languages: Record<string, string>;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** Relative paths resolve against metadataBase set in the blog root layout. */
export function buildMetadata({
  lang,
  path,
  title,
  description,
  languages,
  type = "website",
  publishedTime,
  modifiedTime,
}: Args): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: DEFAULT_OG_IMAGE }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE] },
  };
}
