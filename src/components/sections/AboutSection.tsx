"use client";

import { useRef, useEffect, useState, Component } from "react";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

// Catches fetch errors thrown by the Spline runtime (e.g. network unavailable)
class SplineErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "@/lib/lenis";
import { MQ, matches } from "@/lib/media";
import { LinkPreview } from "@/components/ui/link-preview";
import { Magnetic } from "@/components/ui/magnetic";
import { LiquidCursor } from "@/components/ui/liquid-cursor";

gsap.registerPlugin(ScrollTrigger);

const FACTS = [
  { label: "Based in",   value: "Tunis & Italy" },
  { label: "Background", value: "Business Information Systems — where I learned that technology only matters if it serves people" },
  { label: "Languages",  value: "Arabic · French · English · Italian" },
  { label: "Currently",  value: "Digital Marketing Master · LUMSA Università di Roma" },
  { label: "Approach",   value: "Start with the concept. Make it beautiful. Make it work. Make it grow." },
];

// Panel 1: two clip lines for the headline reveal
const HEADLINE_LINES = ["WASSIM", "GATRI"];
const SUBLINE        = "Where design meets code meets growth.";


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  // Panel 1 — clip-line refs
  const p1HeadlineLineRefs = useRef<HTMLDivElement[]>([]);
  const p1SublineInnerRef  = useRef<HTMLDivElement>(null);
  const p1BioRef           = useRef<HTMLParagraphElement>(null);

  // Panel 2 — word spans + parallax wrapper
  const p2WordRefs = useRef<HTMLSpanElement[]>([]);
  const p2InnerRef = useRef<HTMLDivElement>(null);

  // Panel 3 — body wrapper + parallax wrapper
  const p3BodyRef = useRef<HTMLDivElement>(null);
  const p3InnerRef      = useRef<HTMLDivElement>(null);

  // Panel 1 parallax wrapper
  const p1InnerRef = useRef<HTMLDivElement>(null);

  // Liquid cursor — desktop (fine pointer) only, shown while panel 3 is under the mouse
  const [showLiquidCursor, setShowLiquidCursor] = useState(false);
  // Spline is several MB — only fetch it once the section is close
  const [loadSpline, setLoadSpline] = useState(false);
  const [isTouch, setIsTouch]       = useState(false);
  const panel3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    const panel3  = panel3Ref.current;
    if (!section || !track || !panel3) return;

    const finePointer = matches(MQ.fine);
    setIsTouch(!finePointer);

    // ── Liquid cursor hit-test ────────────────────────────────────────────
    // Runs on mouse move and on scroll (the panel can slide under a still
    // cursor), at most once per frame, and only while About is on screen.
    // The normal cursor dot stays on top so links are still easy to click.
    let pointerX = -1, pointerY = -1, rafId = 0;
    const hitTest = () => {
      rafId = 0;
      const r = panel3.getBoundingClientRect();
      setShowLiquidCursor(pointerX >= r.left && pointerX <= r.right && pointerY >= r.top && pointerY <= r.bottom);
    };
    const queueHitTest = () => { if (!rafId) rafId = requestAnimationFrame(hitTest); };
    const onMouseMove  = (e: MouseEvent) => { pointerX = e.clientX; pointerY = e.clientY; queueHitTest(); };
    const trackPointer = (on: boolean) => {
      if (on) {
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("scroll", queueHitTest, { passive: true });
      } else {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("scroll", queueHitTest);
        setShowLiquidCursor(false);
      }
    };

    // Observer rather than a ScrollTrigger: it sees the pinned layout, so it
    // stays "on" for the whole horizontal run
    const io = finePointer
      ? new IntersectionObserver(([entry]) => trackPointer(entry.isIntersecting))
      : null;
    io?.observe(section);

    // lenis.start() reused as unlockScroll in both Panel 1 and Panel 2
    const unlockScroll = () => getLenis()?.start();

    const isMobile = matches(MQ.mobile);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: isMobile ? panel3 : section,
        start: "top bottom+=75%",
        once: true,
        onEnter: () => setLoadSpline(true),
      });


      const viewW   = window.innerWidth;
      const travelX = -(track.scrollWidth - viewW);

      // ── Gather refs ──────────────────────────────────────────────────────
      const p1Lines    = p1HeadlineLineRefs.current.filter(Boolean) as HTMLDivElement[];
      const p1Subline  = p1SublineInnerRef.current;
      const p1Bio      = p1BioRef.current;
      const p2Words    = p2WordRefs.current.filter(Boolean) as HTMLSpanElement[];
      const p3Body     = p3BodyRef.current;
      const p1Inner    = p1InnerRef.current;
      const p2Inner    = p2InnerRef.current;
      const p3Inner    = p3InnerRef.current;

      // ── Initial hidden states ─────────────────────────────────────────────
      gsap.set(p1Lines,   { yPercent: 105 });
      if (p1Subline) gsap.set(p1Subline, { yPercent: 105 });
      if (p1Bio)     gsap.set(p1Bio,     { opacity: 0, y: 14 });
      gsap.set(p2Words,   { opacity: 0.1 });
      if (p3Body) gsap.set(p3Body, { opacity: 0 });

      if (isMobile) {
        // ── MOBILE: simple scroll-triggered reveals, no pin or Lenis lock ──
        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          once: true,
          onEnter() {
            gsap.timeline()
              .to(p1Lines,   { yPercent: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 })
              .to(p1Subline, { yPercent: 0, duration: 0.7, ease: "power3.out" }, "-=0.55")
              .to(p1Bio,     { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35");
          },
        });
        // Reveal p2 words and p3 body on scroll into their panels
        if (p2Words.length > 0) {
          ScrollTrigger.create({
            trigger: ".about-panel-2",
            start: "top 75%",
            once: true,
            onEnter() { gsap.to(p2Words, { opacity: 1, stagger: 0.012, duration: 0.02, ease: "none" }); },
          });
        }
        if (p3Body) {
          ScrollTrigger.create({
            trigger: ".about-panel-3",
            start: "top 75%",
            once: true,
            onEnter() { gsap.to(p3Body, { opacity: 1, duration: 0.6, ease: "power2.out" }); },
          });
        }
        return; // skip all desktop logic below
      }

      // ── DESKTOP: Panel 1 clip-line entrance with Lenis lock ──────────────
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        once: true,
        onEnter() {
          getLenis()?.stop();
          gsap.timeline({ onComplete: unlockScroll })
            .to(p1Lines, {
              yPercent: 0,
              duration: 1.15,
              ease: "power4.out",
              stagger: 0.1,
            })
            .to(p1Subline, {
              yPercent: 0,
              duration: 0.95,
              ease: "power3.out",
            }, "-=0.75")
            .to(p1Bio, {
              opacity: 1, y: 0,
              duration: 0.6,
              ease: "power2.out",
            }, "-=0.5");
        },
      });

      // ── Main horizontal-scroll timeline ──────────────────────────────────
      // scrub: 0.8 (not 1.2) — Lenis already provides smooth scroll momentum
      // so a smaller scrub lag avoids double-dampening.
      let p2LockApplied = false;

      const tl = gsap.timeline({
        // The track keeps sliding while the scrub catches up — re-check the cursor
        onUpdate: finePointer ? queueHitTest : undefined,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end:   () => `+=${Math.abs(travelX)}`,
          scrub: 0.8,
          pin:   true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            // Panel 2 fully in view at progress ≈ 0.5.
            // Lock Lenis, wait 0.5 s for scrub to settle the track flush at
            // Panel 2, then reveal all words with a timed animation.
            if (!p2LockApplied && self.progress >= 0.499) {
              p2LockApplied = true;
              getLenis()?.stop();
              gsap.delayedCall(0.8, () => {
                if (p2Words.length === 0) { unlockScroll(); return; }
                gsap.timeline({ onComplete: unlockScroll })
                  .fromTo(p2Words,
                    { opacity: 0.1 },
                    { opacity: 1, ease: "power1.in", duration: 0.04, stagger: 0.08 }
                  );
              });
            }

          },
        },
      });

      tl.to(track, { x: travelX, ease: "none", duration: 1 }, 0);

      // ── Parallax — panel content moves at slightly different rate ─────────
      // Creates depth: backgrounds travel at 1×, inner content at ~0.85×.
      if (p1Inner) tl.to(p1Inner,   { x: -28, ease: "none", duration: 0.5 }, 0);
      if (p2Inner) tl.fromTo(p2Inner, { x: 45 }, { x: 0, ease: "power2.out", duration: 0.5 }, 0.05);
      if (p3Inner) tl.fromTo(p3Inner, { x: 45 }, { x: 0, ease: "power2.out", duration: 0.4 }, 0.57);

      // ── Panel 3 — body fade-in ────────────────────────────────────────────
      if (p3Body) {
        tl.to(p3Body, { opacity: 1, ease: "none", duration: 0.12 }, 0.89);
      }
    }, section);

    return () => {
      io?.disconnect();
      trackPointer(false);
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
      unlockScroll();
    };
  }, []);

  // Mutable counter for Panel 2 word spans — resets on every render.
  let p2Idx = 0;

  return (
    <section
      id="about"
      ref={sectionRef}
      suppressHydrationWarning
      className="about-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .about-section { height: auto !important; overflow: visible !important; }
          .about-track   { flex-direction: column !important; width: 100% !important;
                           height: auto !important; transform: none !important; }
          .about-panel   { width: 100% !important; min-height: 100svh !important; height: auto !important; }
          .about-panel-1 { padding: 0 1.5rem !important; }
          .about-panel-2 { padding: 0 1.5rem !important; }
          .about-panel-3 { padding: 0 !important; }
          /* Push panel 3 text below the background copy on mobile */
          .about-p3-content { padding-top: 44vh !important; }
        }
      `}</style>
      <div
        ref={trackRef}
        className="about-track"
        style={{ display: "flex", width: "300vw", height: "100vh", willChange: "transform" }}
      >

        {/* ════════════════════════════════════════
            Panel 1 — Intro          bg: #0a0a0a
        ════════════════════════════════════════ */}
        <div className="about-panel about-panel-1" style={{
          width: "100vw", height: "100vh", flexShrink: 0,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 6rem", position: "relative",
          backgroundColor: "#0a0a0a",
        }}>
          {/* Parallax wrapper — shifts slightly faster than the panel on exit */}
          <div ref={p1InnerRef}>
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
                  <div ref={(el) => { if (el) p1HeadlineLineRefs.current[i] = el; }}>
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
              <div ref={p1SublineInnerRef}>
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
              ref={p1BioRef}
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

        {/* ════════════════════════════════════════
            Panel 2 — Facts          bg: #8faa8b
        ════════════════════════════════════════ */}
        <div style={{
          width: "100vw", height: "100vh", flexShrink: 0,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 6rem",
          backgroundColor: "#8faa8b",
        }}
          className="about-panel about-panel-2"
        >
          {/* Parallax wrapper — lags slightly behind the panel on entry */}
          <div ref={p2InnerRef}>
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
                      const idx = p2Idx++;
                      return (
                        <span
                          key={idx}
                          ref={(el) => { if (el) p2WordRefs.current[idx] = el; }}
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
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: "0.75rem",
                    fontWeight: 500, letterSpacing: "0.03em",
                    color: "rgba(255,255,255,0.85)",
                    borderBottom: "1px solid rgba(255,255,255,0.45)",
                    paddingBottom: "0.1rem",
                    textDecoration: "none",
                  }}
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
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: "0.75rem",
                    fontWeight: 500, letterSpacing: "0.03em",
                    color: "rgba(255,255,255,0.85)",
                    borderBottom: "1px solid rgba(255,255,255,0.45)",
                    paddingBottom: "0.1rem",
                    textDecoration: "none",
                  }}
                >
                  LinkedIn ↗
                </LinkPreview>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            Panel 3 — I PAINT.   bg: Spline 3D
        ════════════════════════════════════════ */}
        <div
          ref={panel3Ref}
          className="about-panel about-panel-3"
          style={{
            width: "100vw", height: "100vh", flexShrink: 0,
            position: "relative", overflow: "hidden",
            backgroundColor: "#0a0a0a",
          }}
        >
          {/* ── Spline 3D scene — full-panel background ── */}
          {loadSpline && (
            <SplineErrorBoundary>
              <Spline
                scene="https://prod.spline.design/Y6qwPytKdu4Vr5ru/scene.splinecode"
                style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  // On touch screens the scene is decorative — don't let it swallow scroll
                  pointerEvents: isTouch ? "none" : "auto",
                }}
              />
            </SplineErrorBoundary>
          )}

          {/* Subtle dark scrim so text is always legible over the scene */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none", zIndex: 1,
          }} />

          {/* ── Parallax content wrapper — centred mid-panel ── */}
          <div
            ref={p3InnerRef}
            className="about-p3-content"
            style={{
              position: "absolute", inset: 0, zIndex: 2,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "0 4rem", textAlign: "center",
              paddingTop: "22vh",
              pointerEvents: "none", // let mouse events reach the Spline canvas
            }}
          >
            {/* Body, closing line, link — scroll-driven fade-in */}
            <div ref={p3BodyRef}>
              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "0.92rem",
                lineHeight: 1.8, color: "rgba(255,255,255,0.72)",
                maxWidth: "38rem", margin: "0 auto",
              }}>
                Landscapes. Seascapes. Canvas before screen. That&apos;s where the creative instinct comes from — the ability to see something that doesn&apos;t exist yet and bring it to life. I carry that into every project I touch.
              </p>

              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "0.78rem",
                fontWeight: 600, letterSpacing: "0.01em",
                color: "rgba(255,255,255,0.9)",
                marginTop: "1.4rem",
              }}>
                Ambitious by nature. Creative by choice. Technical by necessity.
              </p>

              <div style={{ marginTop: "1.4rem", pointerEvents: "auto" }}>
                <Magnetic strength={0.3}>
                  <LinkPreview
                    url="https://www.tiktok.com/@wassimgatri1"
                    isStatic={true}
                    imageSrc="/img/tiktok.webp"
                    width={140}
                    height={240}
                    style={{
                      fontFamily: "var(--font-inter)", fontSize: "0.75rem",
                      fontWeight: 500, letterSpacing: "0.03em",
                      color: "rgba(255,255,255,0.65)",
                      borderBottom: "1px solid rgba(255,255,255,0.28)",
                      paddingBottom: "0.1rem",
                      textDecoration: "none",
                    }}
                  >
                    → see my work
                  </LinkPreview>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* ── Pointer hint (desktop) ── */}
          {!isTouch && <div style={{
            position: "absolute", top: "2.2rem", left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3, pointerEvents: "none",
            display: "flex", alignItems: "center", gap: "0.55rem",
          }}>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L1 10L4 7.5L5.5 11.5L7 11L5.5 7L9 7L1 1Z" fill="rgba(255,255,255,0.3)" />
            </svg>
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "0.58rem",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}>
              Move your cursor to paint
            </span>
          </div>}
        </div>

      </div>

      {/* LiquidCursor — mounted only while hovering Panel 3 */}
      {showLiquidCursor && <LiquidCursor />}
    </section>
  );
}
