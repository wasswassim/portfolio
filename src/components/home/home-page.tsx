"use client";

import Preloader from "./preloader";
import AnimatedBackground from "./animated-background";
import Particles from "./particles";
import SmoothScroll from "./smooth-scroll";
import Header from "./header";
import Footer from "./footer";
import ElasticCursor from "./elastic-cursor";
import { usePerfProfile } from "./use-perf-profile";
import HeroSection from "./sections/hero";
import VerseSection from "./sections/verse";
import AboutSection from "./sections/about";
import ToolsSection from "./sections/tools";
import ProjectsSection from "./sections/projects";
import ServicesSection from "./sections/services";
import ContactSection from "./sections/contact";

// The homepage (rebrand 2026-10). Order chosen by the owner: hero, Quran verse, who I am, tools,
// projects, services, contact. The 3D keyboard is a fixed canvas behind the page; its pose follows
// the #verse, #projects and #contact sections (components/home/keyboard/motion.ts).
function Stars() {
  const { particleCount, maxDpr } = usePerfProfile();
  return particleCount > 0 ? <Particles className="fixed inset-0 -z-10" quantity={particleCount} maxDpr={maxDpr} /> : null;
}

export default function HomePage() {
  return (
    <Preloader>
      <SmoothScroll>
        <Stars />
        <AnimatedBackground />
        <ElasticCursor />
        <Header />
        <main id="main" className="canvas-overlay-mode relative">
          <HeroSection />
          <VerseSection />
          <AboutSection />
          <ToolsSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </SmoothScroll>
    </Preloader>
  );
}
