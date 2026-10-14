import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { homePath } from "@/lib/i18n/routes";
import { reviewAverage, reviewCount, reviews } from "@/content/reviews";
import { Stars } from "./Stars";
import ReviewCarousel from "./ReviewCarousel";

/** id of the reviews section at the bottom of each post; the badge and the carousel link to it */
const SECTION_ID = "reader-reviews";

const fmtRating = (lang: Lang, r: number) => new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(r);
const dateFormat = (lang: Lang) => new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" });

/** Small rating badge (score + stars + count) above the guide card, linked to the reviews section. */
export function RatingBadge({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (reviewAverage === null) return null;
  const score = fmtRating(lang, reviewAverage);
  return (
    <a className="blog-rbadge" href={"#" + SECTION_ID}>
      <span className="blog-sr">{dict.reviews.badgeLabel(score, reviewCount) + " " + dict.reviews.goTo}</span>
      <span className="blog-rbadge-score" aria-hidden="true">{score}</span>
      <span className="blog-rbadge-body">
        <Stars value={reviewAverage} />
        <span className="blog-rbadge-count" aria-hidden="true">{dict.reviews.count(reviewCount)}</span>
      </span>
    </a>
  );
}

/** All reader reviews at the bottom of a post, with a button to send one. */
export function ReviewsSection({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (reviewAverage === null) return null;
  const score = fmtRating(lang, reviewAverage);
  const dateFmt = dateFormat(lang);
  const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <section id={SECTION_ID} className="blog-reviews" aria-labelledby="reader-reviews-title">
      <div className="blog-reviews-head">
        <div>
          <p className="blog-reviews-source">{dict.reviews.from}</p>
          <h2 id="reader-reviews-title" className="blog-reviews-title">{dict.reviews.title}</h2>
        </div>
        <p className="blog-reviews-summary">
          <span className="blog-sr">{dict.reviews.badgeLabel(score, reviewCount)}</span>
          <span className="blog-reviews-score" aria-hidden="true">{score}</span>
          <Stars value={reviewAverage} />
          <span className="blog-reviews-count" aria-hidden="true">{dict.reviews.count(reviewCount)}</span>
        </p>
      </div>
      <ul className="blog-reviews-list">
        {reviews.map((r, i) => (
          <li key={i} className="blog-review">
            <div className="blog-review-head">
              <span className="blog-review-avatar" aria-hidden="true">{initials(r.author)}</span>
              <span className="blog-review-who">
                <bdi className="blog-review-name">{r.author}</bdi>
                <span className="blog-review-meta">
                  {r.context && <span lang={r.lang} dir="auto">{r.context}</span>}
                  <time dateTime={r.date}>{dateFmt.format(new Date(r.date))}</time>
                </span>
              </span>
            </div>
            <span className="blog-review-stars" role="img" aria-label={dict.reviews.stars(r.rating)}><Stars value={r.rating} /></span>
            <p className="blog-review-text" lang={r.lang} dir="auto">{r.text}</p>
          </li>
        ))}
      </ul>
      <div className="blog-reviews-actions">
        {/* The contact form is on the home page, in English */}
        <a className="blog-reviews-btn" href={homePath() + "#contact"} hrefLang="en">{dict.reviews.write}</a>
      </div>
    </section>
  );
}

/** Compact carousel of the same reviews under the post header (between the disclosure and the first notice). */
export function ReviewsCarousel({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (reviewAverage === null) return null;
  const score = fmtRating(lang, reviewAverage);
  const dateFmt = dateFormat(lang);
  return (
    <ReviewCarousel
      rating={reviewAverage}
      sectionHref={"#" + SECTION_ID}
      slides={reviews.map((r) => ({
        author: r.author,
        rating: r.rating,
        ratingLabel: dict.reviews.stars(r.rating),
        text: r.text,
        lang: r.lang,
        date: r.date,
        dateText: dateFmt.format(new Date(r.date)),
      }))}
      labels={{
        region: dict.reviews.title,
        track: dict.reviews.from,
        summary: dict.reviews.badgeLabel(score, reviewCount) + " " + dict.reviews.goTo,
        score,
        count: dict.reviews.count(reviewCount),
        prev: dict.reviews.prev,
        next: dict.reviews.next,
        slides: reviews.map((_, i) => dict.reviews.slide(i + 1, reviewCount)),
      }}
    />
  );
}
