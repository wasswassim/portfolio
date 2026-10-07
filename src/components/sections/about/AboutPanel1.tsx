import type { MutableRefObject, RefObject } from "react";
import { HEADLINE_LINES, SUBLINE } from "./content";

/* ════════════════════════════════════════
   Panel 1 — Intro          bg: #0a0a0a
════════════════════════════════════════ */
export default function AboutPanel1({
  innerRef,
  lineRefs,
  sublineRef,
  bioRef,
}: {
  innerRef: RefObject<HTMLDivElement | null>;
  lineRefs: MutableRefObject<HTMLDivElement[]>;
  sublineRef: RefObject<HTMLDivElement | null>;
  bioRef: RefObject<HTMLParagraphElement | null>;
}) {
  return (
    <div className="about-panel about-panel-1" style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "0 6rem", position: "relative",
      backgroundColor: "#0a0a0a",
    }}>
      {/* Parallax wrapper — shifts slightly faster than the panel on exit */}
      <div ref={innerRef}>
        <span style={{
          display: "block",
          fontFamily: "var(--font-inter)", fontSize: "0.62rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)", marginBottom: "2rem",
        }}>
          About
        </span>

        {/* Headline — per-line clip reveal ("rolling curtain") */}
        <h2
          aria-label={HEADLINE_LINES.join(" ")}
          style={{ margin: 0 }}
        >
          {HEADLINE_LINES.map((line, i) => (
            <div key={line} style={{ overflow: "hidden" }}>
              <div ref={(el) => { if (el) lineRefs.current[i] = el; }}>
                <span style={{
                  display: "block",
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(5rem, 13vw, 14rem)",
                  lineHeight: 0.88, letterSpacing: "0.01em",
                  color: "#ffffff",
                }}>
                  {line}
                </span>
              </div>
            </div>
          ))}
        </h2>

        {/* Subline — single clip-line reveal */}
        <div style={{ overflow: "hidden", marginTop: "1.8rem" }}>
          <div ref={sublineRef}>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
              fontWeight: 600, letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.85)",
              margin: 0,
            }}>
              {SUBLINE}
            </p>
          </div>
        </div>

        {/* Bio — fades in last */}
        <p
          ref={bioRef}
          style={{
            fontFamily: "var(--font-inter)", fontSize: "0.82rem",
            lineHeight: 1.7, color: "rgba(255,255,255,0.4)",
            marginTop: "1rem", maxWidth: "38rem",
          }}
        >
          Not just a developer. Not just a designer. Someone who understands the full picture — and builds it.
        </p>
      </div>

      <div style={{
        position: "absolute", bottom: "3rem", right: "4rem",
        fontFamily: "var(--font-inter)", fontSize: "0.65rem",
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.25)",
      }}>
        scroll →
      </div>
    </div>
  );
}
