"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MQ, matches } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

const InfiniteGallery = dynamic(
  () => import("@/components/ui/infinite-gallery"),
  { ssr: false }
);

const AI_IMAGES = Array.from({ length: 10 }, (_, i) => `/img/ai/ai-${String(i + 1).padStart(2, "0")}.webp`);

const HEADLINE_LINES = ["PROMPT", "ENGINEER."];

export default function AISection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const lineRefs     = useRef<HTMLDivElement[]>([]);
  const taglineRef   = useRef<HTMLParagraphElement>(null);
  const tagsRef      = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  // Written by the pinned ScrollTrigger, read by the gallery every frame
  const progressRef = useRef(0);
  const [galleryMounted, setGalleryMounted] = useState(false);
  const [galleryActive, setGalleryActive]   = useState(false);
  const [isMobile, setIsMobile]             = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mobile = matches(MQ.mobile);
    setIsMobile(mobile);

    const lines   = lineRefs.current.filter(Boolean) as HTMLDivElement[];
    const tagline = taglineRef.current;
    const tags    = tagsRef.current;
    const stmt    = statementRef.current;

    const ctx = gsap.context(() => {
      // ── Text reveal — plays on the way in, reverses on the way back ───
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
        .fromTo(lines,   { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.1 })
        .fromTo(tagline, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
        .fromTo(tags,    { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.45");

      // ── WebGL gallery: download one screen early ────────────────────
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom+=100%",
        once: true,
        onEnter: () => setGalleryMounted(true),
      });

      // ── Pinned scroll cycle ───────────────────────────────────────────
      // progress 0 → 1 maps straight onto the gallery's depth travel, so the
      // cycle starts when the pin engages, finishes before the pin releases,
      // and scrolling back up replays it exactly in reverse.
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: mobile ? "+=110%" : "+=150%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: true,
        onUpdate: (self) => { progressRef.current = self.progress; },
      });

      // ── Statement strip reveal ────────────────────────────────────────
      if (stmt) {
        gsap.fromTo(stmt, { opacity: 0 }, {
          opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: stmt, start: "top 88%", toggleActions: "play none none reverse" },
        });
      }
    }, section);

    // Render only while on screen. An observer sees the real (pinned) layout,
    // which a ScrollTrigger on the same element measured pre-pin would not.
    const io = new IntersectionObserver(([entry]) => setGalleryActive(entry.isIntersecting));
    io.observe(section);

    return () => {
      io.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="ai-section"
        suppressHydrationWarning
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        <style>{`
          @supports (height: 100svh) {
            .ai-section { height: 100svh !important; }
          }
          @media (max-width: 767px) {
            .ai-text-overlay  { padding: 0 1.5rem 3rem !important; }
            .ai-bottom-row    { gap: 1.2rem !important; flex-direction: column !important; align-items: flex-start !important; }
            .ai-statement     { padding: 2rem 1.5rem !important; flex-direction: column !important; gap: 1rem !important; }
            .ai-statement-txt { font-size: clamp(1rem, 4.5vw, 1.6rem) !important; }
          }
        `}</style>
        {/* Gallery — fills section, scroll-driven */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {galleryMounted && <InfiniteGallery
            images={AI_IMAGES}
            style={{ width: "100%", height: "100%", background: "#0a0a0a" }}
            visibleCount={isMobile ? 6 : 10}
            travel={60}
            progress={progressRef}
            active={galleryActive}
          />}
        </div>

        {/* Dark veil — tones down bright image backgrounds */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          pointerEvents: "none",
          background: "rgba(0,0,0,0.45)",
        }} />

        {/* Left gradient — text readability */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 38%, rgba(0,0,0,0.15) 68%, transparent 100%)",
        }} />

        {/* Bottom fade into next section */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "28%", zIndex: 1, pointerEvents: "none",
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }} />

        {/* Text overlay */}
        <div
          className="ai-text-overlay"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "0 4rem 5rem",
          }}
        >
          <span style={{
            display: "block",
            fontFamily: "var(--font-inter)", fontSize: "0.6rem",
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)", marginBottom: "1rem",
          }}>
            AI Prompting
          </span>

          <h2 style={{ margin: "0 0 1.8rem" }} aria-label={HEADLINE_LINES.join(" ")}>
            {HEADLINE_LINES.map((line, i) => (
              <div key={line} style={{ overflow: "hidden" }}>
                <div ref={(el) => { if (el) lineRefs.current[i] = el; }}>
                  <span style={{
                    display: "block",
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(3.5rem, 9vw, 10rem)",
                    lineHeight: 0.88, letterSpacing: "0.01em",
                    color: i === 1 ? "#8faa8b" : "#ffffff",
                  }}>
                    {line}
                  </span>
                </div>
              </div>
            ))}
          </h2>

          <div className="ai-bottom-row" style={{ display: "flex", gap: "4rem", alignItems: "flex-end", flexWrap: "wrap", maxWidth: "56rem" }}>
            <p
              ref={taglineRef}
              style={{
                fontFamily: "var(--font-inter)", fontSize: "0.82rem",
                lineHeight: 1.7, color: "rgba(255,255,255,0.5)",
                maxWidth: "30rem", flex: "1 1 20rem", margin: 0,
              }}
            >
              Knowing how to speak to generative models — with precision, direction and
              creative intent — is now the difference between generic output and
              brand-defining visuals.
            </p>
            <div
              ref={tagsRef}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", flex: "0 0 auto" }}
            >
              {["Image Generation", "Video Concepts", "Character Consistency", "Brand Systems"].map((tag) => (
                <span key={tag} style={{
                  fontFamily: "var(--font-inter)", fontSize: "0.55rem",
                  fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.45)",
                  padding: "0.3rem 0.8rem", borderRadius: "999px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: "1.8rem", right: "2.5rem",
          zIndex: 3, pointerEvents: "none",
        }}>
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "0.55rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}>
            Scroll to reveal
          </span>
        </div>
      </section>

      {/* Statement strip */}
      <div
        ref={statementRef}
        className="ai-statement"
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "2.5rem 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          opacity: 0,
        }}
      >
        <p
          className="ai-statement-txt"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(1.1rem, 2.4vw, 2.4rem)",
            lineHeight: 1, letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.15)",
            maxWidth: "62rem", margin: 0,
          }}
        >
          IN AN ERA WHERE EVERY BRAND NEEDS AI-GRADE VISUAL OUTPUT,
          PROMPT ENGINEERING IS THE SILENT SUPERPOWER OF MODERN DESIGN.
        </p>
        <span style={{
          fontFamily: "var(--font-inter)", fontSize: "0.6rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.15)", whiteSpace: "nowrap",
        }}>
          ↓ projects
        </span>
      </div>
    </>
  );
}
