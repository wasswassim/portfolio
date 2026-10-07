import type { Lang } from "@/lib/i18n/config";
import type { Block } from "./types";

export type Heading = { id: string; text: string; level: 2 | 3 };

/** Table-of-contents entries. */
export function headingsOf(body: Block[]): Heading[] {
  return body.flatMap((b) =>
    b.type === "h2" || b.type === "h3"
      ? [{ id: b.id, text: stripMarkup(b.text), level: b.type === "h2" ? (2 as const) : (3 as const) }]
      : [],
  );
}

export function stripMarkup(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\((?:[^()\s]|\([^()\s]*\))+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

function blockText(b: Block): string {
  switch (b.type) {
    case "h2":
    case "h3":
    case "p":
      return b.text;
    case "ul":
    case "ol":
      return b.items.join(" ");
    case "callout":
    case "quote":
      return b.text;
    case "steps":
      return b.items.map((i) => `${i.title} ${i.text}`).join(" ");
    case "keyFacts":
      return b.items.map((i) => `${i.label} ${i.value}`).join(" ");
    case "faq":
      return b.items.map((i) => `${i.q} ${i.a}`).join(" ");
    case "sources":
      return "";
  }
}

const WORDS_PER_MINUTE: Record<Lang, number> = { en: 220, fr: 200, ar: 180 };

export function readingMinutes(lang: Lang, summary: string, body: Block[]): number {
  const text = stripMarkup([summary, ...body.map(blockText)].join(" "));
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE[lang]));
}

/** Plain-text FAQ pairs for FAQPage JSON-LD (markup stripped). */
export function faqPairsOf(body: Block[]): { q: string; a: string }[] {
  return body.flatMap((b) =>
    b.type === "faq" ? b.items.map((i) => ({ q: stripMarkup(i.q), a: stripMarkup(i.a) })) : [],
  );
}
