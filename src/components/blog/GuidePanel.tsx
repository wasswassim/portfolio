"use client";

import { useEffect, useState, type ReactNode } from "react";

const KEY = "blog-guide-collapsed";

/**
 * Collapse toggle for the guide card. The card starts collapsed on every post; when the reader
 * opens or closes it, that choice is remembered in this browser (localStorage) and applies on
 * every page. The content is rendered on the server and passed in as children, so it stays in
 * the static HTML; without JS a <noscript> rule keeps it visible.
 */
export default function GuidePanel({
  title,
  expandLabel,
  collapseLabel,
  children,
}: {
  title: string;
  expandLabel: string;
  collapseLabel: string;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    try {
      // "0" = the reader chose to keep it open on some page; anything else = collapsed
      if (localStorage.getItem(KEY) === "0") setCollapsed(false);
    } catch {
      // storage blocked (private mode): keep the default (collapsed)
    }
  }, []);

  const toggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    try {
      localStorage.setItem(KEY, next ? "1" : "0");
    } catch {
      // ignore
    }
  };

  return (
    <>
      <h2 id="guide-title" className="blog-guide-title">
        <button
          type="button"
          className="blog-guide-toggle"
          aria-expanded={!collapsed}
          aria-controls="guide-panel"
          onClick={toggle}
          title={collapsed ? expandLabel : collapseLabel}
        >
          <span>{title}</span>
          <span className="blog-acc-icon" aria-hidden="true" />
        </button>
      </h2>
      <noscript>
        <style>{"#guide-panel[hidden]{display:block}"}</style>
      </noscript>
      <div id="guide-panel" className="blog-guide-scroll" tabIndex={0} role="region" aria-labelledby="guide-title" hidden={collapsed}>
        {children}
      </div>
    </>
  );
}
