"use client";

import { useEffect, useMemo, useRef } from "react";
import type { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "@/lib/lenis";
import { MQ, matches } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

/** Every DOM node the About animation touches. Stable for the component's lifetime. */
export interface AboutRefs {
  section: RefObject<HTMLElement | null>;
  track: RefObject<HTMLDivElement | null>;
  panel3: RefObject<HTMLDivElement | null>;
  // Panel 1: clip lines, subline, bio, parallax wrapper
  p1Lines: MutableRefObject<HTMLDivElement[]>;
  p1Subline: RefObject<HTMLDivElement | null>;
  p1Bio: RefObject<HTMLParagraphElement | null>;
  p1Inner: RefObject<HTMLDivElement | null>;
  // Panel 2: word spans, parallax wrapper
  p2Words: MutableRefObject<HTMLSpanElement[]>;
  p2Inner: RefObject<HTMLDivElement | null>;
  // Panel 3: body wrapper, parallax wrapper
  p3Body: RefObject<HTMLDivElement | null>;
  p3Inner: RefObject<HTMLDivElement | null>;
}

export function useAboutRefs(): AboutRefs {
  const section   = useRef<HTMLElement>(null);
  const track     = useRef<HTMLDivElement>(null);
  const panel3    = useRef<HTMLDivElement>(null);
  const p1Lines   = useRef<HTMLDivElement[]>([]);
  const p1Subline = useRef<HTMLDivElement>(null);
  const p1Bio     = useRef<HTMLParagraphElement>(null);
  const p1Inner   = useRef<HTMLDivElement>(null);
  const p2Words   = useRef<HTMLSpanElement[]>([]);
  const p2Inner   = useRef<HTMLDivElement>(null);
  const p3Body    = useRef<HTMLDivElement>(null);
  const p3Inner   = useRef<HTMLDivElement>(null);
  return useMemo(
    () => ({ section, track, panel3, p1Lines, p1Subline, p1Bio, p1Inner, p2Words, p2Inner, p3Body, p3Inner }),
    [section, track, panel3, p1Lines, p1Subline, p1Bio, p1Inner, p2Words, p2Inner, p3Body, p3Inner],
  );
}

export interface AboutStateSetters {
  setShowLiquidCursor: Dispatch<SetStateAction<boolean>>;
  setLoadSpline: Dispatch<SetStateAction<boolean>>;
  setIsTouch: Dispatch<SetStateAction<boolean>>;
}

interface Elements {
  p1Lines: HTMLDivElement[];
  p1Subline: HTMLDivElement | null;
  p1Bio: HTMLParagraphElement | null;
  p2Words: HTMLSpanElement[];
  p3Body: HTMLDivElement | null;
  p1Inner: HTMLDivElement | null;
  p2Inner: HTMLDivElement | null;
  p3Inner: HTMLDivElement | null;
}

// ── Liquid cursor hit-test ───────────────────────────────────────────────────
// Runs on mouse move and on scroll (the panel can slide under a still cursor),
// at most once per frame, and only while About is on screen. The normal cursor
// dot stays on top so links are still easy to click.
function trackLiquidCursor(
  section: HTMLElement,
  panel3: HTMLElement,
  finePointer: boolean,
  setShowLiquidCursor: Dispatch<SetStateAction<boolean>>,
) {
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

  return {
    queueHitTest,
    cleanup() {
      io?.disconnect();
      trackPointer(false);
      if (rafId) cancelAnimationFrame(rafId);
    },
  };
}

// ── Initial hidden states ────────────────────────────────────────────────────
function setInitialStates({ p1Lines, p1Subline, p1Bio, p2Words, p3Body }: Elements) {
  gsap.set(p1Lines,   { yPercent: 105 });
  if (p1Subline) gsap.set(p1Subline, { yPercent: 105 });
  if (p1Bio)     gsap.set(p1Bio,     { opacity: 0, y: 14 });
  gsap.set(p2Words,   { opacity: 0.1 });
  if (p3Body) gsap.set(p3Body, { opacity: 0 });
}

// ── MOBILE: simple scroll-triggered reveals, no pin or Lenis lock ────────────
function buildMobile(section: HTMLElement, { p1Lines, p1Subline, p1Bio, p2Words, p3Body }: Elements) {
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
}

// ── DESKTOP: Panel 1 clip-line entrance with Lenis lock ──────────────────────
function buildDesktopIntro(section: HTMLElement, { p1Lines, p1Subline, p1Bio }: Elements, unlockScroll: () => void) {
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
}

// ── DESKTOP: main pinned horizontal-scroll timeline ──────────────────────────
// scrub: 0.8 (not 1.2) — Lenis already provides smooth scroll momentum
// so a smaller scrub lag avoids double-dampening.
function buildDesktopTimeline(
  section: HTMLElement,
  track: HTMLElement,
  els: Elements,
  travelX: number,
  onUpdate: (() => void) | undefined,
  unlockScroll: () => void,
) {
  const { p2Words, p3Body, p1Inner, p2Inner, p3Inner } = els;
  let p2LockApplied = false;

  const tl = gsap.timeline({
    // The track keeps sliding while the scrub catches up — re-check the cursor
    onUpdate,
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

  // ── Parallax — panel content moves at slightly different rate ───────────
  // Creates depth: backgrounds travel at 1×, inner content at ~0.85×.
  if (p1Inner) tl.to(p1Inner,   { x: -28, ease: "none", duration: 0.5 }, 0);
  if (p2Inner) tl.fromTo(p2Inner, { x: 45 }, { x: 0, ease: "power2.out", duration: 0.5 }, 0.05);
  if (p3Inner) tl.fromTo(p3Inner, { x: 45 }, { x: 0, ease: "power2.out", duration: 0.4 }, 0.57);

  // ── Panel 3 — body fade-in ──────────────────────────────────────────────
  if (p3Body) {
    tl.to(p3Body, { opacity: 1, ease: "none", duration: 0.12 }, 0.89);
  }
}

export function useAboutAnimation(refs: AboutRefs, { setShowLiquidCursor, setLoadSpline, setIsTouch }: AboutStateSetters) {
  useEffect(() => {
    const section = refs.section.current;
    const track   = refs.track.current;
    const panel3  = refs.panel3.current;
    if (!section || !track || !panel3) return;

    const finePointer = matches(MQ.fine);
    setIsTouch(!finePointer);

    const cursor = trackLiquidCursor(section, panel3, finePointer, setShowLiquidCursor);

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

      // ── Gather refs ────────────────────────────────────────────────────
      const els: Elements = {
        p1Lines:   refs.p1Lines.current.filter(Boolean),
        p1Subline: refs.p1Subline.current,
        p1Bio:     refs.p1Bio.current,
        p2Words:   refs.p2Words.current.filter(Boolean),
        p3Body:    refs.p3Body.current,
        p1Inner:   refs.p1Inner.current,
        p2Inner:   refs.p2Inner.current,
        p3Inner:   refs.p3Inner.current,
      };

      setInitialStates(els);

      if (isMobile) {
        buildMobile(section, els);
        return; // skip all desktop logic below
      }

      buildDesktopIntro(section, els, unlockScroll);
      buildDesktopTimeline(section, track, els, travelX, finePointer ? cursor.queueHitTest : undefined, unlockScroll);
    }, section);

    return () => {
      cursor.cleanup();
      ctx.revert();
      unlockScroll();
    };
  }, [refs, setShowLiquidCursor, setLoadSpline, setIsTouch]);
}
