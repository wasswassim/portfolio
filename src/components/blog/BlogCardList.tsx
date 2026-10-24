"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n/config";
import { track } from "@/lib/analytics";
import { bestFaq, prepare, queryTerms, search, type SearchDoc } from "@/lib/blog-search";
import BidiText from "./BidiText";

export type BlogCardItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  category: string;
  date: string;
  dateText: string;
  part?: string;
  /** Text the search looks at (keywords, headings, FAQ), not shown on the card */
  search: SearchDoc;
};

export type BlogSearchLabels = {
  /** Heading of the ask box */
  title: string;
  /** One or two sentences under the heading: what the blog answers and how to search */
  intro: string;
  /** Accessible name of the search field */
  label: string;
  placeholder: string;
  clear: string;
  /** Lead-in before the suggested questions */
  try: string;
  /** Suggested questions, one tap fills the search */
  suggestions: readonly string[];
  /** Shown when exactly one guide matches */
  one: string;
  /** "{n}" is replaced by the number of matching guides */
  results: string;
  none: string;
  /** Under "none": what to do next */
  noneHint: string;
  /** Badge on the first result */
  best: string;
  /** Label of the quick answer box */
  answer: string;
  /** Link from the quick answer to the guide */
  fullGuide: string;
  read: string;
};

const ANSWER_MAX = 320;
const shorten = (s: string) => (s.length <= ANSWER_MAX ? s : s.slice(0, s.lastIndexOf(" ", ANSWER_MAX)) + "…");
// Never send what looks like an email address, a phone or ID number or an Italian codice fiscale to analytics
const looksPersonal = (s: string) => /@|\d{6,}|[a-z]{6}\d{2}[a-z]\d{2}[a-z]\d{3}[a-z]/i.test(s.replace(/\s/g, ""));

/**
 * The ask box (intro, search field, suggested questions) and one card per post. Typing a question
 * or a keyword ranks the guides, best first, and shows the matching FAQ answer when there is one.
 * Every card stays in the static HTML for crawlers.
 */
export default function BlogCardList({ lang, items, labels }: { lang: Lang; items: BlogCardItem[]; labels: BlogSearchLabels }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const docs = useMemo(() => items.map((it) => it.search), [items]);
  const prepared = useMemo(() => prepare(docs), [docs]);
  // Only filler words so far ("how do I") is not a search yet, so no "no match" while typing
  const active = useMemo(() => queryTerms(query).length > 0, [query]);
  const ranked = useMemo(() => (active ? search(prepared, query) : []), [active, prepared, query]);
  const answer = useMemo(() => (ranked.length ? bestFaq(docs, ranked, query) : null), [docs, ranked, query]);
  const none = active && ranked.length === 0;
  // No match: keep every guide on screen rather than an empty page
  const shown = active && !none ? ranked.map((h) => items[h.index]) : items;
  const status = !active ? "" : none ? labels.none : ranked.length === 1 ? labels.one : labels.results.replace("{n}", String(ranked.length));

  // Screen readers hear the count once typing pauses, not on every keystroke
  const [announced, setAnnounced] = useState("");
  // The quick answer is announced with the count, since it appears without focus moving to it
  const spoken = answer ? `${status} ${labels.answer}: ${answer.q}` : status;
  useEffect(() => {
    const id = window.setTimeout(() => setAnnounced(spoken), 500);
    return () => window.clearTimeout(id);
  }, [spoken]);

  // A search opened from a shared link (?q=...) runs on arrival
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q.slice(0, 120));
  }, []);

  // Tell analytics what readers look for once they pause. The address bar is deliberately not
  // updated while typing: GA enhanced measurement would turn each change into a page view and
  // read ?q= as a site search, sending the raw text past the personal-data guard.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const q = query.trim();
      if (q.length >= 3 && !looksPersonal(q)) track("search", { search_term: q.slice(0, 100), results: ranked.length, language: lang });
    }, 1500);
    return () => window.clearTimeout(id);
  }, [query, ranked.length, lang]);

  const [mac, setMac] = useState(false);
  // Ctrl+K (⌘K on Mac) jumps to the search field. A modifier is required (WCAG 2.1.4: no single-key shortcuts).
  useEffect(() => {
    setMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.isComposing || e.repeat || e.altKey || e.shiftKey) return;
      if (e.key.toLowerCase() !== "k" || !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const clickFrom = (id: string, position: number, source: string) => () => {
    const q = query.trim();
    if (q && !looksPersonal(q)) track("search_result_click", { search_term: q.slice(0, 100), article_id: id, position, source });
  };

  return (
    <>
      <section className="blog-ask" aria-labelledby="blog-ask-title">
        <h2 id="blog-ask-title" className="blog-ask-title"><BidiText lang={lang}>{labels.title}</BidiText></h2>
        <p className="blog-ask-intro"><BidiText lang={lang}>{labels.intro}</BidiText></p>
        <div className="blog-search-row">
          <div className="blog-search" role="search">
            <svg className="blog-search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              className="blog-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape" || e.nativeEvent.isComposing) return;
                e.preventDefault();
                if (query) setQuery("");
                else e.currentTarget.blur();
              }}
              placeholder={labels.placeholder}
              aria-label={labels.label}
              aria-keyshortcuts="Control+K Meta+K"
              enterKeyHint="search"
              maxLength={120}
              dir="auto"
              autoComplete="off"
              spellCheck={false}
            />
            {query ? (
              <button type="button" className="blog-search-clear" onClick={() => { setQuery(""); inputRef.current?.focus(); }} aria-label={labels.clear}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            ) : (
              <kbd className="blog-search-kbd" aria-hidden="true">{mac ? "⌘K" : "Ctrl K"}</kbd>
            )}
          </div>
          <p className="blog-search-count" aria-hidden="true">{status}</p>
          <p className="blog-sr" role="status">{announced}</p>
        </div>
        <div className="blog-ask-try">
          <span className="blog-ask-try-label">{labels.try}</span>
          <ul className="blog-chips">
            {labels.suggestions.map((s) => (
              <li key={s}>
                <button type="button" className="blog-chip" aria-pressed={query === s} onClick={() => setQuery(query === s ? "" : s)}>
                  <BidiText lang={lang}>{s}</BidiText>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {answer && (
        <aside className="blog-answer" aria-labelledby="blog-answer-label">
          <p id="blog-answer-label" className="blog-answer-label">{labels.answer}</p>
          <p className="blog-answer-q"><BidiText lang={lang}>{answer.q}</BidiText></p>
          <p className="blog-answer-a"><BidiText lang={lang}>{shorten(answer.a)}</BidiText></p>
          <a className="blog-answer-link" href={`${items[answer.doc].href}#faq`} onClick={clickFrom(items[answer.doc].id, 0, "answer")}>
            {labels.fullGuide}: <BidiText lang={lang}>{items[answer.doc].title}</BidiText> <span className="blog-arrow" aria-hidden="true">→</span>
          </a>
        </aside>
      )}
      {none && <p className="blog-none"><BidiText lang={lang}>{labels.noneHint}</BidiText></p>}

      <ul className="blog-list blog-cards">
        {shown.map((it, i) => (
          <li key={it.id} className={active && !none && i === 0 ? "blog-card blog-card-best" : "blog-card"}>
            <a href={it.href} onClick={clickFrom(it.id, i + 1, "card")}>
              <span className="blog-meta">
                {active && !none && i === 0 && <span className="blog-best">{labels.best}</span>}
                <span className="blog-cat">{it.category}</span>
                <time dateTime={it.date}>{it.dateText}</time>
                {it.part && <span className="blog-part">{it.part}</span>}
              </span>
              <h2><BidiText lang={lang}>{it.title}</BidiText></h2>
              <p><BidiText lang={lang}>{it.description}</BidiText></p>
              <span className="blog-meta">
                {labels.read} <span className="blog-arrow" aria-hidden="true">→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
