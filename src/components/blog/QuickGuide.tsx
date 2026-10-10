import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import type { Heading } from "@/content/articles/blocks";
import BidiText from "./BidiText";
import Inline from "./Inline";

/**
 * Phones and tablets only (hidden in CSS from 64rem, where the sticky guide card does this job):
 * the answer-first summary and the section list, near the top of the post instead of after the
 * whole article. Native disclosure, closed by default, no JS.
 */
export default function QuickGuide({
  summary,
  headings,
  lang,
  dict,
}: {
  summary: string;
  headings: Heading[];
  lang: Lang;
  dict: Dictionary;
}) {
  return (
    <details className="blog-quickguide">
      <summary>
        <span>
          {dict.article.summary} <span aria-hidden="true">·</span> {dict.article.toc}
        </span>
        <span className="blog-acc-icon" aria-hidden="true" />
      </summary>
      <div className="blog-quickguide-body">
        <p className="blog-quickguide-summary"><Inline lang={lang} text={summary} /></p>
        {headings.length >= 3 && (
          <ol>
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`}><BidiText lang={lang}>{h.text}</BidiText></a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </details>
  );
}
