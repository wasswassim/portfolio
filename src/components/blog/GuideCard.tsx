import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import type { Block } from "@/content/articles/types";
import ArticleBody from "./ArticleBody";
import Inline from "./Inline";

/**
 * Explanation and guidance live here, not in the article column, so readers see the
 * post first. Sticky and independently scrollable on wide screens (CSS only); it
 * drops below the article on small screens. tabIndex makes the scroll area
 * keyboard-reachable.
 */
export default function GuideCard({
  summary,
  guide,
  lang,
  dict,
}: {
  summary: string;
  guide: Block[];
  lang: Lang;
  dict: Dictionary;
}) {
  return (
    <aside id="guide" className="blog-guide" aria-labelledby="guide-title">
      <h2 id="guide-title" className="blog-guide-title">{dict.article.guide}</h2>
      <div className="blog-guide-scroll" tabIndex={0}>
        <p className="blog-summary">
          <span className="blog-summary-label">{dict.article.summary}</span>
          <Inline lang={lang} text={summary} />
        </p>
        <ArticleBody body={guide} lang={lang} dict={dict} className="blog-prose--compact" />
      </div>
    </aside>
  );
}
