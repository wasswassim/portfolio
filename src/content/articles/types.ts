import type { Lang } from "@/lib/i18n/config";

export const CATEGORIES = ["documents", "work", "language", "daily-life"] as const;
export type CategoryId = (typeof CATEGORIES)[number];

/**
 * Article body as typed blocks. Text fields accept light inline markup:
 * **bold**, *italic*, `code` and [label](https://url). See components/blog/Inline.tsx.
 */
export type Block =
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "callout"; tone: "tip" | "warning" | "note"; title?: string; text: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "keyFacts"; items: { label: string; value: string }[] }
  | {
      type: "figure";
      /** Path under /public, e.g. "/blog/colosseum-rome.webp" */
      src: string;
      width: number;
      height: number;
      alt: string;
      caption: string;
      /** Required for CC BY / CC BY-SA images; omit for own work and CC0 */
      credit?: { text: string; url: string };
    }
  | {
      type: "video";
      /** YouTube and Vimeo use their privacy-friendly embeds; "file" plays a self-hosted video under /public */
      provider: "youtube" | "vimeo" | "file";
      /** Video id for youtube/vimeo, or a path like "/blog/intro.mp4" for "file" */
      id: string;
      /** Accessible iframe title and VideoObject name */
      title: string;
      /** VideoObject description (what the video covers) */
      description: string;
      caption: string;
      /** ISO date the video was published (VideoObject uploadDate) */
      uploadDate: string;
      /** Path under /public. YouTube falls back to its own thumbnail; vimeo/file need one for VideoObject. */
      thumbnail?: string;
      /** ISO 8601 duration, e.g. "PT3M20S" */
      duration?: string;
      /** Aspect ratio source; defaults to 16:9 */
      width?: number;
      height?: number;
      /** Optional WebVTT captions for provider "file" */
      captions?: { src: string; lang: string; label: string };
      credit?: { text: string; url: string };
    }
  | { type: "quote"; text: string; cite?: string }
  // id + title give the block its own h2 (and a table-of-contents entry); without them a default label is used
  | { type: "faq"; id?: string; title?: string; items: { q: string; a: string }[] }
  | { type: "sources"; id?: string; title?: string; items: { label: string; url: string }[] };

/** Per-language fields. Slugs are translated, so they differ between languages. */
export type ArticleTranslation = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  /** Answer-first summary; shown at the top of the guide card and quoted by answer engines. */
  summary: string;
  /** The article itself. Shown in the main column, so readers see it immediately. */
  body: Block[];
  /** Explanation and guidance (key facts, steps, FAQ, sources). Shown in the scrollable side card. */
  guide?: Block[];
  /** Alt text for the share image (og:image / JSON-LD image) */
  imageAlt?: string;
  /** Primary search phrases for this language; used in JSON-LD only, never rendered */
  keywords?: string[];
};

export type Article = {
  /** Shared across languages; the language switcher maps through this. */
  id: string;
  category: CategoryId;
  /** ISO dates (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt: string;
  /** Null until the facts in the article have been checked against an official source. */
  lastVerified: string | null;
  /** Share image (Open Graph + JSON-LD). 1200x630 recommended. */
  image?: { src: string; width: number; height: number };
  /** A language may be missing while a translation is in progress. */
  translations: Partial<Record<Lang, ArticleTranslation>>;
};
