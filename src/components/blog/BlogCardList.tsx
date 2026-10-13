"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n/config";
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
};

export type BlogSearchLabels = {
  label: string;
  placeholder: string;
  clear: string;
  /** Shown when exactly one guide matches */
  one: string;
  /** "{n}" is replaced by the number of matching guides */
  results: string;
  none: string;
  read: string;
};

// Lower-case and fold accents, Arabic diacritics and tatweel, ة/ه, ى/ي and Arabic-Indic digits,
// so "etudier" finds "Étudier" and "دراسه" finds "دراسة"
const normalize = (s: string) =>
  s.normalize("NFKD")
    .replace(/\p{M}|ـ/gu, "")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x660))
    .toLowerCase();

/** One card per post, with a small search field that filters the cards in place (every card stays in the HTML). */
export default function BlogCardList({ lang, items, labels }: { lang: Lang; items: BlogCardItem[]; labels: BlogSearchLabels }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const haystacks = useMemo(
    () => items.map((it) => normalize([it.title, it.description, it.category, it.part ?? ""].join(" "))),
    [items],
  );
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const visible = items.map((_, i) => words.every((w) => haystacks[i].includes(w)));
  const count = visible.filter(Boolean).length;
  const status = words.length === 0 ? "" : count === 0 ? labels.none : count === 1 ? labels.one : labels.results.replace("{n}", String(count));
  // Screen readers hear the count once typing pauses, not on every keystroke
  const [announced, setAnnounced] = useState("");
  useEffect(() => {
    const id = window.setTimeout(() => setAnnounced(status), 500);
    return () => window.clearTimeout(id);
  }, [status]);
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

  return (
    <>
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
      <ul className="blog-list blog-cards">
        {items.map((it, i) => (
          <li key={it.id} className="blog-card" hidden={!visible[i]}>
            <a href={it.href}>
              <span className="blog-meta">
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
