import type { Lang } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { articlePath } from "@/lib/i18n/routes";
import type { SeriesPosition } from "@/content/articles";
import BidiText from "./BidiText";

/**
 * Compact series index under the byline: "Part 2 of 7" with every part of the series in a
 * native disclosure (closed by default, so long series do not push the article down on
 * phones). The current part is marked instead of linked. No JS.
 */
export function SeriesStrip({ position, lang, dict }: { position: SeriesPosition; lang: Lang; dict: Dictionary }) {
  return (
    <nav className="blog-series-strip" aria-label={dict.series.label + ": " + position.series.title[lang]}>
      <details>
        <summary>
          <span className="blog-series-strip-label">
            <span>{dict.series.part(position.part, position.total)}</span>
            <span aria-hidden="true">·</span>
            <BidiText lang={lang}>{position.series.title[lang]}</BidiText>
          </span>
          <span className="blog-series-strip-hint">{dict.series.allParts}</span>
          <span className="blog-acc-icon" aria-hidden="true" />
        </summary>
        <ol>
        {position.parts.map((p) => (
          <li key={p.article.id}>
            {p.part === position.part ? (
              <span aria-current="page"><BidiText lang={lang}>{p.translation.title}</BidiText></span>
            ) : (
              <a href={articlePath(lang, p.translation.slug)}><BidiText lang={lang}>{p.translation.title}</BidiText></a>
            )}
          </li>
        ))}
        </ol>
      </details>
    </nav>
  );
}

/** End-of-article card that leads to the next part, plus a smaller link back to the previous one. */
export function SeriesNav({ position, lang, dict }: { position: SeriesPosition; lang: Lang; dict: Dictionary }) {
  const { next, prev, total } = position;
  return (
    <nav className="blog-series-nav" aria-label={dict.series.continue}>
      {next && (
        // Named by the kicker and title only; the description stays visible but is not read as part of the link
        <a
          className="blog-series-next"
          href={articlePath(lang, next.translation.slug)}
          aria-labelledby="series-next-kicker series-next-title"
        >
          <span id="series-next-kicker" className="blog-series-kicker">
            {dict.series.next} <span aria-hidden="true">·</span> {dict.series.part(next.part, total)}
          </span>
          <span id="series-next-title" className="blog-series-title"><BidiText lang={lang}>{next.translation.title}</BidiText></span>
          <span className="blog-series-desc"><BidiText lang={lang}>{next.translation.metaDescription}</BidiText></span>
          <span className="blog-series-go" aria-hidden="true"><span className="blog-arrow">→</span></span>
        </a>
      )}
      {prev && (
        <a className="blog-series-prev" href={articlePath(lang, prev.translation.slug)}>
          <span className="blog-arrow" aria-hidden="true">→</span>
          <span>
            <span className="blog-series-kicker">
              {prev.part === 1 ? dict.series.start : dict.series.previous} <span aria-hidden="true">·</span>{" "}
              {dict.series.part(prev.part, total)}
            </span>
            <BidiText lang={lang}>{prev.translation.title}</BidiText>
          </span>
        </a>
      )}
    </nav>
  );
}
