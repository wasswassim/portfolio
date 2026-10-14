"use client";

import { useEffect, useRef, useState } from "react";
import { addReview } from "@/lib/reviews-store";
import { notifyOwner } from "@/lib/notify-owner";

export type ReviewFormLabels = {
  rate: string;
  /** One word per star value, 1 to 5 (Bad ... Excellent) */
  levels: string[];
  /** Accessible label per star value, e.g. "4 out of 5 stars" */
  stars: string[];
  text: string;
  textPlaceholder: string;
  name: string;
  nameHint: string;
  email: string;
  emailHint: string;
  notice: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  tooMany: string;
  noLinks: string;
  privacyLink: string;
};

// The review is saved to Supabase and published at once; a copy reaches the owner by email (lib/notify-owner.ts),
// and only he can delete a review (Supabase dashboard).
type Status = "idle" | "sending" | "success" | "error" | "rate" | "links";

const STAR = "M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8z";

/**
 * Review box at the bottom of every post, in the "rate first" pattern of review sites: five star
 * tiles, and the rest of the form opens once a rating is picked. Reviews are published at once.
 */
export default function ReviewForm({ lang, page, labels }: { lang: string; page: string; labels: ReviewFormLabels }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  // The button stays disabled until this script runs: without it, a native submit would send nothing useful
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  // Focus the thank-you message once, so screen readers announce it
  const doneRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (status === "success") doneRef.current?.focus();
  }, [status]);

  const shown = hover || rating;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Honeypot: bots fill the hidden field; pretend it worked and save nothing
    if (String(data.get("website") ?? "")) {
      setStatus("success");
      return;
    }
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = String(data.get("review") ?? "").trim();
    // Links are refused by the database (spam), so say it before sending
    // Same rules as the table's CHECK constraints (scheme, www., short links, bare domains)
    if (/(https?:\/\/|www\.)/i.test(body) || /(ftp:|t\.me\/|wa\.me\/|bit\.ly|[\p{L}\p{N}-]\.(com|net|org|info|biz|xyz|top|site|online|shop|store|click|link|io|ru|cn|tn|it|fr|ly|app|dev)([/\s]|$))/u.test(body)) {
      setStatus("links");
      return;
    }
    setStatus("sending");
    try {
      await addReview({ author: name, rating, body, lang, page, email: email || null });
    } catch (err) {
      const rate = err instanceof Error && err.message === "rate";
      if (!rate) console.error("[reviews] not saved:", err);
      setStatus(rate ? "rate" : "error");
      return;
    }
    setStatus("success");
    notifyOwner({
      subject: `New blog review: ${rating}/5 from ${name}`,
      name,
      email,
      message: [`Rating: ${rating}/5`, `Name shown: ${name}`, `Language of the page: ${lang}`, `Page: ${page}`, "Already published. To remove it: Supabase > wassimgatri-blog-reviews > Table Editor > reviews.", "", body].join("\n"),
    });
  };

  if (status === "success") {
    return (
      <p className="blog-rform-done" role="status" tabIndex={-1} ref={doneRef}>{labels.success}</p>
    );
  }

  return (
    // method="post": if the script never loads, nothing typed here can end up in the URL
    <form className="blog-rform" method="post" onSubmit={onSubmit}>
      <fieldset className="blog-rform-rate">
        <legend className="blog-rform-legend">{labels.rate}</legend>
        <div className="blog-rform-rateline">
          <div className="blog-rform-tiles" data-tone={shown || undefined} onPointerLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className={n <= shown ? "is-on" : undefined} onPointerEnter={(e) => e.pointerType === "mouse" && setHover(n)}>
                <input type="radio" name="rating" value={n} required checked={rating === n} onChange={() => { setRating(n); setHover(0); }} />
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d={STAR} /></svg>
                <span className="blog-sr">{labels.stars[n - 1]}</span>
              </label>
            ))}
          </div>
          <span className="blog-rform-level" aria-hidden="true">{shown ? labels.levels[shown - 1] : ""}</span>
        </div>
      </fieldset>

      {rating > 0 && (
        <div className="blog-rform-more">
          <div className="blog-rform-field">
            <label htmlFor="review-text">{labels.text}</label>
            <textarea id="review-text" name="review" required minLength={20} maxLength={1200} rows={5} dir="auto" placeholder={labels.textPlaceholder} />
          </div>
          <div className="blog-rform-row">
            <div className="blog-rform-field">
              <label htmlFor="review-name">{labels.name}</label>
              <input id="review-name" name="name" required maxLength={60} autoComplete="name" dir="auto" aria-describedby="review-name-hint" />
              <p id="review-name-hint" className="blog-rform-hint">{labels.nameHint}</p>
            </div>
            <div className="blog-rform-field">
              <label htmlFor="review-email">{labels.email}</label>
              <input id="review-email" name="email" type="email" maxLength={254} autoComplete="email" inputMode="email" dir="ltr" aria-describedby="review-email-hint" />
              <p id="review-email-hint" className="blog-rform-hint">{labels.emailHint}</p>
            </div>
          </div>
          <div className="blog-newsletter-hp" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>
          <div className="blog-rform-send">
            <button type="submit" className="blog-reviews-btn" disabled={!ready || status === "sending"}>
              {status === "sending" ? labels.sending : labels.submit}
            </button>
            <p className="blog-rform-notice">
              {labels.notice} <a href={`/${lang}/privacy/#reviews`}>{labels.privacyLink}</a>
            </p>
          </div>
          <p className="blog-rform-status" role="status">{status === "error" ? labels.error : status === "rate" ? labels.tooMany : status === "links" ? labels.noLinks : ""}</p>
        </div>
      )}
    </form>
  );
}
