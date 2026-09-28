"use client";

import { useEffect, useRef, useState } from "react";
import { MQ, matches } from "@/lib/media";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  // Start false (SSR-safe); effect immediately corrects on touch devices.
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Touch-only devices have no hover pointer — don't render the custom cursor.
    if (matches(MQ.touch)) {
      setIsTouch(true);
      return;
    }

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* Follow mouse */
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.transform  = `translate(${x}px, ${y}px)`;
      ring.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);

    /* Hide when a custom cursor zone is active (e.g. gravity pills) */
    const observer = new MutationObserver(() => {
      const hidden = document.body.classList.contains("custom-cursor-hidden");
      dot.style.opacity  = hidden ? "0" : "1";
      ring.style.opacity = hidden ? "0" : "1";
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  // Nothing to render on touch devices — let the browser cursor through.
  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: "-5px",
          left: "-5px",
          width: "10px",
          height: "10px",
          background: "#ffffff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          willChange: "transform",
          transition: "opacity 0.1s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: "-20px",
          left: "-20px",
          width: "40px",
          height: "40px",
          border: "1px solid rgba(255,255,255,0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          willChange: "transform",
          transition: "opacity 0.1s",
        }}
      />
    </>
  );
}
