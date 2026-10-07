import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import type { Heading } from "@/content/articles/blocks";
import BidiText from "./BidiText";

/** In-page anchors (plain links, no JS). Hidden when the article has fewer than 3 headings. */
export default function TableOfContents({ headings, lang, dict }: { headings: Heading[]; lang: Lang; dict: Dictionary }) {
  if (headings.length < 3) return null;
  return (
    <nav className="blog-toc" aria-label={dict.article.toc}>
      <p className="blog-toc-title">{dict.article.toc}</p>
      <ol>
        {headings.map((h) => (
          <li key={h.id} data-level={h.level}>
            <a href={`#${h.id}`}><BidiText lang={lang}>{h.text}</BidiText></a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
