"use client";

import { useEffect, useState, type ReactNode } from "react";

const KEY = "blog-guide-collapsed";

/**
 * Collapse toggle for the guide card. The content is rendered on the server and passed in as
 * children, so it stays in the static HTML; without JS the card simply stays open. The choice
 * is remembered for the browser session only.
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
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") setCollapsed(true);
    } catch {
      // storage blocked (private mode): keep the card open
    }
  }, []);

  const toggle = () => {
    setCollapsed((c) => {
      try {
        sessionStorage.setItem(KEY, c ? "0" : "1");
      } catch {
        // ignore
      }
      return !c;
    });
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
      <div id="guide-panel" className="blog-guide-scroll" tabIndex={0} hidden={collapsed}>
        {children}
      </div>
    </>
  );
}
