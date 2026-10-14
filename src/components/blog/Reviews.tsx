import type { Lang } from "@/lib/i18n/config";
import { LOCALE } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { reviewAverage, reviewCount, reviews } from "@/content/reviews";
import { Stars } from "./Stars";
import ReviewCarousel from "./ReviewCarousel";
import ReviewForm from "./ReviewForm";
import { SITE_URL } from "@/lib/seo/site";

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

/**
 * Reader reviews at the bottom of every post, always shown: the reviews (once there are any) and a
 * form to send one. Sent reviews reach the owner by email and go online only after he adds them.
 */
export function ReviewsSection({ lang, dict, path }: { lang: Lang; dict: Dictionary; path: string }) {
  const r = dict.reviews;
  const dateFmt = dateFormat(lang);
  const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <section id={SECTION_ID} className="blog-reviews" aria-labelledby="reader-reviews-title">
      <div className="blog-reviews-head">
        <div>
          <p className="blog-reviews-source">{r.from}</p>
          <h2 id="reader-reviews-title" className="blog-reviews-title">{r.title}</h2>
          <p className="blog-reviews-ask">{r.ask}</p>
        </div>
        {reviewAverage !== null && (
          <p className="blog-reviews-summary">
            <span className="blog-sr">{r.badgeLabel(fmtRating(lang, reviewAverage), reviewCount)}</span>
            <span className="blog-reviews-score" aria-hidden="true">{fmtRating(lang, reviewAverage)}</span>
            <Stars value={reviewAverage} />
            <span className="blog-reviews-count" aria-hidden="true">{r.count(reviewCount)}</span>
          </p>
        )}
      </div>
      <ReviewForm
        lang={lang}
        page={SITE_URL + path}
        labels={{
          rate: r.form.rate,
          levels: r.form.levels,
          stars: [1, 2, 3, 4, 5].map((n) => r.stars(n)),
          text: r.form.text,
          textPlaceholder: r.form.textPlaceholder,
          name: r.form.name,
          nameHint: r.form.nameHint,
          email: r.form.email,
          emailHint: r.form.emailHint,
          notice: r.form.notice,
          submit: r.form.submit,
          sending: r.form.sending,
          success: r.form.success,
          error: r.form.error,
          privacyLink: dict.newsletter.privacyLink,
        }}
      />
      {reviewCount === 0 ? (
        <p className="blog-reviews-empty">{r.empty}</p>
      ) : (
        <ul className="blog-reviews-list">
          {reviews.map((rev, i) => (
            <li key={i} className="blog-review">
              <div className="blog-review-head">
                <span className="blog-review-avatar" aria-hidden="true">{initials(rev.author)}</span>
                <span className="blog-review-who">
                  <bdi className="blog-review-name">{rev.author}</bdi>
                  <span className="blog-review-meta">
                    {rev.context && <span lang={rev.lang} dir="auto">{rev.context}</span>}
                    <time dateTime={rev.date}>{dateFmt.format(new Date(rev.date))}</time>
                  </span>
                </span>
              </div>
              <span className="blog-review-stars" role="img" aria-label={r.stars(rev.rating)}><Stars value={rev.rating} /></span>
              <p className="blog-review-text" lang={rev.lang} dir="auto">{rev.text}</p>
            </li>
          ))}
        </ul>
      )}
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
        region: dict.reviews.from,
        track: dict.reviews.count(reviewCount),
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
