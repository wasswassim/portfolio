"use client";

import { useState, useEffect } from "react";
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

  /* Refresh all ScrollTrigger instances once after everything mounts.
     This recalculates pin spacers and trigger positions that depend on
     the full rendered page height, preventing dead scroll zones.       */
  useEffect(() => {
    const t = setTimeout(async () => {
      try {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        ScrollTrigger.refresh();
      } catch {
        // Non-fatal — ScrollTrigger chunk failed to load; pin spacers may be off
        // but the page remains functional.
      }
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      {!preloaderDone && (
        <Preloader onDone={() => setPreloaderDone(true)} />
      )}
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <HeroSection onMenuOpen={() => setMenuOpen(true)} />
      <SkillsSection />
      <StatsSection />
      <AboutSection />
      <AISection />
      <WorkSection />
      <JourneySection />
    </main>
  );
}
