"use client";

import { useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { GalleryControls } from "@/components/ui/infinite-gallery";

gsap.registerPlugin(ScrollTrigger);

const InfiniteGallery = dynamic(
  () => import("@/components/ui/infinite-gallery"),
  { ssr: false }
);

const AI_IMAGES = [
  "/tarislula_a_close_up_studio_portrait_features_a_fair_skinned__d2f2881a-1014-431c-be34-59bdabdb3b38_2.png",
  "/vittorio8763_In_Mirrors_2026_Doron_B_creates_an_instrument_fo_e8cacb0d-c1af-408b-9288-9b130531d1e2_2.png",
  "/jmgcg_an_eye-catching_label_for__night_mask_with_text_in_engl_f4c0201d-5434-4e24-921e-0a8e4feaaeb2_1.png",
  "/hmnm_a_unique_outdoor_sofa_in_soft_blush_pink_linen_sits_amid_9324b9eb-2036-43b9-9105-4747f172e018_3.png",
  "/depaula_A_seamless_texture_pattern_of_multiple_identical_bold_a97dda1e-3de6-42c0-8b26-feb79775888a_3.png",
  "/Blue_Ivy_I_waited_and_I_waited_It_was_something_in_my_heart_-_3363a26a-facb-417e-b85e-cb7b2509c786_0.png",
  "/danaeanime_Test_photo_--profile_qwi2equ_--v_8.1_20c7570d-a661-4f74-991b-d21872a1cc0b_2.png",
  "/Creator_Human_A_young_man_with_dark_messy_hair_and_thick-rimm_552288d1-5108-4311-91f8-f7056c75b8a4_3.png",
  "/Volveri_moment_psychology_impact_creapy_--chaos_20_--ar_916_-_5c5d42be-b4bb-4376-b7c6-081028827df3_1.png",
  "/dzued_61293_two_stylized_children_characters_standing_side_by_094355f6-cdb9-4608-aa63-96cf48cfc766_0.png",
];

const HEADLINE_LINES = ["PROMPT", "ENGINEER."];

export default function AISection() {
  const sectionRef     = useRef<HTMLElement>(null);
  const lineRefs       = useRef<HTMLDivElement[]>([]);
  const taglineRef     = useRef<HTMLParagraphElement>(null);
  const tagsRef        = useRef<HTMLDivElement>(null);
  const statementRef   = useRef<HTMLDivElement>(null);
  const addVelocityRef = useRef<((v: number) => void) | null>(null);

  const handleGalleryReady = useCallback((controls: GalleryControls) => {
    addVelocityRef.current = controls.addVelocity;
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lines   = lineRefs.current.filter(Boolean) as HTMLDivElement[];
    const tagline = taglineRef.current;
    const tags    = tagsRef.current;
    const stmt    = statementRef.current;

    gsap.set(lines,   { yPercent: 110 });
    if (tagline) gsap.set(tagline, { opacity: 0, y: 18 });
    if (tags)    gsap.set(tags,    { opacity: 0, y: 12 });

    const ctx = gsap.context(() => {
      // ── Text reveal — triggers as section enters viewport ──────────────
      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        once: true,
        onEnter() {
          gsap.timeline()
            .to(lines, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.1 })
            .to(tagline, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.6")
            .to(tags,    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.45");
        },
      });

      // ── Pin section and route scroll velocity into the gallery ─────────
      // Images stay static until you scroll — forward scrolls them toward
      // you, backward pulls them away. Auto-play is disabled (initialAutoPlay=false).
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=150%",          // section stays pinned for 150vh of scroll
        pin: true,
        pinSpacing: true,
        onUpdate(self) {
          const v = self.getVelocity();   // px/s from the scroller
          // Forward-only: only push images when scrolling down.
          // Scrolling back up releases the pin normally — no image reversal.
          if (v > 8) {
            addVelocityRef.current?.(v * 0.0016);
          }
        },
      });

      // ── Statement strip reveal ─────────────────────────────────────────
      if (stmt) {
        gsap.set(stmt, { opacity: 0 });
        ScrollTrigger.create({
          trigger: stmt,
          start: "top 88%",
          once: true,
          onEnter() {
            gsap.to(stmt, { opacity: 1, duration: 0.8, ease: "power2.out" });
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        suppressHydrationWarning
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        {/* Gallery — fills section, scroll-driven (no auto-play) */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <InfiniteGallery
            images={AI_IMAGES}
            style={{ width: "100%", height: "100%", background: "#0a0a0a" }}
            speed={1.2}
            visibleCount={10}
            initialAutoPlay={false}
            onReady={handleGalleryReady}
            fadeSettings={{
              fadeIn:  { start: 0.04, end: 0.20 },
              fadeOut: { start: 0.82, end: 0.96 },
            }}
            blurSettings={{
              blurIn:  { start: 0.0,  end: 0.08 },
              blurOut: { start: 0.88, end: 1.0  },
              maxBlur: 6.0,
            }}
          />
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
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 4rem 5rem",
        }}>
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

          <div style={{ display: "flex", gap: "4rem", alignItems: "flex-end", flexWrap: "wrap", maxWidth: "56rem" }}>
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
        <p style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(1.1rem, 2.4vw, 2.4rem)",
          lineHeight: 1, letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.15)",
          maxWidth: "62rem", margin: 0,
        }}>
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
