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
  | { type: "quote"; text: string; cite?: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "sources"; items: { label: string; url: string }[] };

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
  /** A language may be missing while a translation is in progress. */
  translations: Partial<Record<Lang, ArticleTranslation>>;
};
