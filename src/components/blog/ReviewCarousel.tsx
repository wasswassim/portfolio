"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleMark, Stars } from "./GoogleIcons";

export type CarouselSlide = { author: string; rating: number; ratingLabel: string; text: string; lang: string; date: string; dateText: string; uri: string };
export type CarouselLabels = {
  region: string;
  /** e.g. "Rated 4.8 out of 5 from 12 Google reviews." */
  summary: string;
  score: string;
  count: string;
  prev: string;
  next: string;
  /** One label per slide, e.g. "Review 2 of 5" */
  slides: string[];
  readOnGoogle: string;
  newTab: string;
};

/**
 * Compact Google-review carousel under the post header: one review per slide, swipe or arrows,
 * dots below. No autoplay (moving content would need a pause control, WCAG 2.2.2).
 * The slides are a scroll-snap track, so it also works by plain scrolling without JS.
 */
export default function ReviewCarousel({ slides, labels, mapsUri, rating }: { slides: CarouselSlide[]; labels: CarouselLabels; mapsUri: string; rating: number }) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  // Slide we are moving to: quick repeated clicks keep advancing while the smooth scroll runs
  const target = useRef(0);

  // Follow the slide in view (swipe, arrows or dots)
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = Number((e.target as HTMLElement).dataset.i);
        target.current = i;
        setIndex(i);
      }),
      { root: el, threshold: 0.6 },
    );
    Array.from(el.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const el = track.current;
    const next = (i + slides.length) % slides.length;
    const slide = el?.children[next] as HTMLElement | undefined;
    if (!el || !slide) return;
    target.current = next;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // inline: works the same in RTL; block "nearest" leaves the page where it is while the carousel is visible
    slide.scrollIntoView({ inline: "start", block: "nearest", behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="blog-rcar" aria-roledescription="carousel" aria-label={labels.region}>
      <div className="blog-rcar-head">
        <a className="blog-rcar-sum" href={mapsUri} target="_blank" rel="noopener noreferrer" aria-label={labels.summary + " " + labels.newTab}>
          <GoogleMark className="blog-rcar-g" />
          <span className="blog-rcar-score">{labels.score}</span>
          <Stars value={rating} />
          <span className="blog-rcar-count">{labels.count}</span>
        </a>
        {slides.length > 1 && (
          <span className="blog-rcar-nav">
            <button type="button" className="blog-rcar-btn" onClick={() => go(target.current - 1)} aria-label={labels.prev}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6" /></svg>
            </button>
            <button type="button" className="blog-rcar-btn" onClick={() => go(target.current + 1)} aria-label={labels.next}>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6" /></svg>
            </button>
          </span>
        )}
      </div>
      <ul ref={track} className="blog-rcar-track" tabIndex={0} aria-label={labels.region}>
        {slides.map((s, i) => (
          <li key={i} data-i={i} className="blog-rcar-slide" role="group" aria-roledescription="slide" aria-label={labels.slides[i]}>
            <span className="blog-rcar-stars" role="img" aria-label={s.ratingLabel}><Stars value={s.rating} /></span>
            <p className="blog-rcar-text" lang={s.lang || undefined} dir="auto">“{s.text}”</p>
            <p className="blog-rcar-by">
              <span className="blog-rcar-author">{s.author}</span>
              {s.date && <time dateTime={s.date}>{s.dateText}</time>}
              {s.uri && (
                <a href={s.uri} target="_blank" rel="noopener noreferrer nofollow">
                  {labels.readOnGoogle}<span className="blog-sr">{" " + labels.newTab}</span>
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
      {slides.length > 1 && (
        <div className="blog-rcar-dots">
          {slides.map((_, i) => (
            <button key={i} type="button" className="blog-rcar-dot" aria-label={labels.slides[i]} aria-current={i === index ? "true" : undefined} onClick={() => go(i)} />
          ))}
        </div>
      )}
    </section>
  );
}
