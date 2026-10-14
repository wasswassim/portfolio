"use client";

import { useEffect, useState } from "react";

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
  privacyLink: string;
};

// Same EmailJS service and template as the contact form on the home page: the review reaches the
// owner's inbox and goes online only after he adds it to src/content/reviews.ts.
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim(),
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim(),
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim(),
};

type Status = "idle" | "sending" | "success" | "error";

const STAR = "M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9L4.7 18l1.1-6L1.4 7.8l6-.8z";

/**
 * Review box at the bottom of every post, in the "rate first" pattern of review sites: five star
 * tiles, and the rest of the form opens once a rating is picked. Nothing is published automatically.
 */
export default function ReviewForm({ lang, page, labels }: { lang: string; page: string; labels: ReviewFormLabels }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  // The button stays disabled until this script runs: without it, a native submit would send nothing useful
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const shown = hover || rating;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: bots fill the hidden field; pretend it worked and send nothing
    if (String(data.get("website") ?? "")) {
      setStatus("success");
      return;
    }
    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      console.error("[EmailJS] Missing NEXT_PUBLIC_EMAILJS_* env vars at build time.");
      setStatus("error");
      return;
    }
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      // Field names match {{name}}, {{email}}, {{subject}}, {{message}} and {{time}} in the template
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name,
          email: email || "(not given)",
          subject: `Blog review: ${rating}/5 from ${name}`,
          message: [
            `Rating: ${rating}/5`,
            `Name to show: ${name}`,
            `Language of the page: ${lang}`,
            `Page: ${page}`,
            "Sent knowing that the name, rating and review are published.",
            "",
            String(data.get("review") ?? "").trim(),
          ].join("\n"),
          time: new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }),
        },
        { publicKey: EMAILJS.publicKey },
      );
      setStatus("success");
    } catch (err) {
      console.error("[EmailJS] review not sent:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      // Focus moves to the message so screen readers announce it (a new live region may be skipped)
      <p className="blog-rform-done" role="status" tabIndex={-1} ref={(el) => el?.focus()}>{labels.success}</p>
    );
  }

  return (
    // method="post": if the script never loads, nothing typed here can end up in the URL
    <form className="blog-rform" method="post" onSubmit={onSubmit}>
      <fieldset className="blog-rform-rate">
        <legend className="blog-rform-legend">{labels.rate}</legend>
        <div className="blog-rform-rateline">
          <div className="blog-rform-tiles" data-tone={shown || undefined} onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className={n <= shown ? "is-on" : undefined} onMouseEnter={() => setHover(n)}>
                <input type="radio" name="rating" value={n} required checked={rating === n} onChange={() => setRating(n)} />
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
              <input id="review-email" name="email" type="email" autoComplete="email" inputMode="email" dir="ltr" aria-describedby="review-email-hint" />
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
          <p className="blog-rform-status" role="status">{status === "error" ? labels.error : ""}</p>
        </div>
      )}
    </form>
  );
}
