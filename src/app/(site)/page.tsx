"use client";

import { useState, useEffect, useCallback } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import AISection from "@/components/sections/AISection";
import WorkSection from "@/components/sections/WorkSection";
import JourneySection from "@/components/sections/JourneySection";
import Preloader from "@/components/layout/Preloader";
import Menu from "@/components/layout/Menu";

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Stable handlers so Menu/Hero don't re-subscribe on every render
  const openMenu  = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // ScrollTrigger already refreshes on window load, but web fonts swapping in
  // change text heights after that — re-measure once they're ready so pin
  // spacers and trigger positions line up.
  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      if (cancelled) return;
      try {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        ScrollTrigger.refresh();
      } catch {
        // Non-fatal — ScrollTrigger chunk failed to load; pin spacers may be off
        // but the page remains functional.
      }
    };
    document.fonts?.ready.then(refresh);
    return () => { cancelled = true; };
  }, []);

  return (
    <main>
      {!preloaderDone && (
        <Preloader onDone={() => setPreloaderDone(true)} />
      )}
      <Menu isOpen={menuOpen} onClose={closeMenu} />
      <HeroSection onMenuOpen={openMenu} />
      <SkillsSection />
      <StatsSection />
      <AboutSection />
      <AISection />
      <WorkSection />
      <JourneySection />
    </main>
  );
}
