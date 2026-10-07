import type { MutableRefObject, RefObject } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Magnetic } from "@/components/ui/magnetic";
import { FACTS } from "./content";

const LINK_STYLE = {
  fontFamily: "var(--font-inter)", fontSize: "0.75rem",
  fontWeight: 500, letterSpacing: "0.03em",
  color: "rgba(255,255,255,0.85)",
  borderBottom: "1px solid rgba(255,255,255,0.45)",
  paddingBottom: "0.1rem",
  textDecoration: "none",
} as const;

/* ════════════════════════════════════════
   Panel 2 — Facts          bg: #8faa8b
════════════════════════════════════════ */
export default function AboutPanel2({
  innerRef,
  wordRefs,
}: {
  innerRef: RefObject<HTMLDivElement | null>;
  wordRefs: MutableRefObject<HTMLSpanElement[]>;
}) {
  // Mutable counter for the word spans — resets on every render.
  let wordIdx = 0;

  return (
    <div style={{
      width: "100vw", height: "100vh", flexShrink: 0,
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "0 6rem",
      backgroundColor: "#8faa8b",
    }}
      className="about-panel about-panel-2"
    >
      {/* Parallax wrapper — lags slightly behind the panel on entry */}
      <div ref={innerRef}>
        <span style={{
          display: "block",
          fontFamily: "var(--font-inter)", fontSize: "0.62rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem",
        }}>
          Quick facts
        </span>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <div style={{
                fontFamily: "var(--font-inter)", fontSize: "0.58rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)", marginBottom: "0.25rem",
              }}>
                {fact.label}
              </div>
              <div style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(1.2rem, 2.2vw, 2.2rem)",
                letterSpacing: "0.03em", lineHeight: 1.1,
              }}>
                {fact.value.split(" ").map((word) => {
                  const idx = wordIdx++;
                  return (
                    <span
                      key={idx}
                      ref={(el) => { if (el) wordRefs.current[idx] = el; }}
                      style={{ display: "inline-block", marginRight: "0.22em", color: "#ffffff" }}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Links with magnetic pull */}
        <div style={{
          display: "flex", gap: "2rem", marginTop: "2.4rem",
          paddingTop: "1.6rem",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}>
          <Magnetic strength={0.28}>
            <LinkPreview
              url="https://github.com/wasswassim"
              isStatic={false}
              width={220}
              height={130}
              style={LINK_STYLE}
            >
              GitHub ↗
            </LinkPreview>
          </Magnetic>
          <Magnetic strength={0.28}>
            <LinkPreview
              url="https://www.linkedin.com/in/wassim-gatri-683a12259/?locale=fr"
              isStatic={true}
              imageSrc="/img/linkedin.webp"
              width={220}
              height={130}
              style={LINK_STYLE}
            >
              LinkedIn ↗
            </LinkPreview>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
