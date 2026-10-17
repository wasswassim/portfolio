"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePerfProfile } from "./use-perf-profile";

gsap.registerPlugin(ScrollTrigger);

// Lenis smooth scrolling driven by GSAP's ticker, as in the template, so ScrollTrigger (which moves
// the 3D keyboard between sections) samples every scroll frame.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const { reducedMotion } = usePerfProfile();
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(raf);
  }, [lenis]);

  return (
    <ReactLenis root autoRaf={false} options={{ duration: reducedMotion ? 0 : 2, smoothWheel: !reducedMotion }}>
      {children}
    </ReactLenis>
  );
}
