"use client";

import { useState } from "react";
import { LiquidCursor } from "@/components/ui/liquid-cursor";
import AboutPanel1 from "./about/AboutPanel1";
import AboutPanel2 from "./about/AboutPanel2";
import AboutPanel3 from "./about/AboutPanel3";
import { ABOUT_CSS } from "./about/content";
import { useAboutAnimation, useAboutRefs } from "./about/useAboutAnimation";

/**
 * About: three full-viewport panels on a horizontal track, pinned while the page scrolls
 * (stacked vertically on mobile). Layout lives in ./about/AboutPanel*, the scroll
 * choreography in ./about/useAboutAnimation, the copy in ./about/content.
 */
export default function AboutSection() {
  const refs = useAboutRefs();

  // Liquid cursor — desktop (fine pointer) only, shown while panel 3 is under the mouse
  const [showLiquidCursor, setShowLiquidCursor] = useState(false);
  // Spline is several MB — only fetch it once the section is close
  const [loadSpline, setLoadSpline] = useState(false);
  const [isTouch, setIsTouch]       = useState(false);

  useAboutAnimation(refs, { setShowLiquidCursor, setLoadSpline, setIsTouch });

  return (
    <section
      id="about"
      ref={refs.section}
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
      <style>{ABOUT_CSS}</style>
      <div
        ref={refs.track}
        className="about-track"
        style={{ display: "flex", width: "300vw", height: "100vh", willChange: "transform" }}
      >
        <AboutPanel1
          innerRef={refs.p1Inner}
          lineRefs={refs.p1Lines}
          sublineRef={refs.p1Subline}
          bioRef={refs.p1Bio}
        />
        <AboutPanel2 innerRef={refs.p2Inner} wordRefs={refs.p2Words} />
        <AboutPanel3
          panelRef={refs.panel3}
          innerRef={refs.p3Inner}
          bodyRef={refs.p3Body}
          loadSpline={loadSpline}
          isTouch={isTouch}
        />
      </div>

      {/* LiquidCursor — mounted only while hovering Panel 3 */}
      {showLiquidCursor && <LiquidCursor />}
    </section>
  );
}
