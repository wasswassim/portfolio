import type { Lang } from "@/lib/i18n/config";
import BidiText from "./BidiText";

// **bold**, *italic*, `code`, [label](url). Split with a capture group so tokens land on odd indexes.
// URLs may contain one level of parentheses (e.g. Wikipedia); a lone "*" with spaces around it stays literal.
const URL_PART = String.raw`(?:[^()\s]|\([^()\s]*\))+`;
const TOKEN = new RegExp(
  String.raw`(\*\*[^*]+\*\*|\*(?!\s)[^*]+(?<!\s)\*|` + "`[^`]+`" + String.raw`|\[[^\]]+\]\(${URL_PART}\))`,
  "g",
);
const LINK = new RegExp(String.raw`^\[([^\]]+)\]\((${URL_PART})\)$`);

/** Only http(s), mailto and site-relative URLs become links; anything else (javascript:, data:) is dropped. */
function safeHref(url: string): string | null {
  // Browsers drop tab/newline and treat "\" as "/", so "/\evil.com" would become "//evil.com"
  const u = url.replace(/[\t\n\r]/g, "").trim();
  if (u.includes("\\")) return null;
  if (/^https?:\/\//i.test(u) || /^mailto:/i.test(u)) return u;
  if (u.startsWith("/") && !u.startsWith("//")) return u;
  return null;
}

/** Renders light inline markup as React elements, never as raw HTML. */
export default function Inline({ lang, text }: { lang: Lang; text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return part ? <BidiText key={i} lang={lang}>{part}</BidiText> : null;
        if (part.startsWith("**")) return <strong key={i}><BidiText lang={lang}>{part.slice(2, -2)}</BidiText></strong>;
        if (part.startsWith("*")) return <em key={i}><BidiText lang={lang}>{part.slice(1, -1)}</BidiText></em>;
        if (part.startsWith("`")) return <code key={i} className="blog-ltr">{part.slice(1, -1)}</code>;
        const m = LINK.exec(part);
        const href = m ? safeHref(m[2]) : null;
        if (!m || !href) return m ? <BidiText key={i} lang={lang}>{m[1]}</BidiText> : part;
        const external = /^https?:\/\//i.test(href);
        return (
          <a key={i} href={href} {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
            <BidiText lang={lang}>{m[1]}</BidiText>
          </a>
        );
      })}
    </>
  );
}
