"use client";

import { useEffect, useRef, type ReactNode } from "react";

const GAP = 24; // px kept above and below the column

/**
 * Sticky side column that may be taller than the screen: it sticks at the top while it fits,
 * otherwise it scrolls with the page until its bottom reaches the bottom of the screen, then
 * sticks there, so the newsletter card is never cut off. The offset follows the column's
 * height (guide opened or closed, window resized).
 */
export default function SideColumn({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const top = Math.min(GAP, window.innerHeight - el.offsetHeight - GAP);
      el.style.setProperty("--side-top", `${top}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="blog-side">
      {children}
    </div>
  );
}
