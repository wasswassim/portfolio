"use client";

import { useRef, useEffect, Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { target: 10, suffix: "+", label: "Projects Completed" },
  { target: 3,  suffix: "+", label: "Years of Experience" },
  { target: 4,  suffix: "",  label: "Countries Worked With" },
];

const MARQUEE_TEXT =
  "Web Development ✦ Digital Marketing ✦ Graphic Design ✦ 3D Design ✦ Project Management ✦ Data Analysis ✦ ";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs    = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: stat.target,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
          onUpdate()   { el.textContent = Math.round(proxy.val) + stat.suffix; },
          onComplete() { el.textContent = stat.target + stat.suffix; },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      suppressHydrationWarning
      style={{ background: "#0a0a0a" }}
    >
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0);     } }
        @media (max-width: 767px) {
          .stats-row  { flex-direction: column !important; padding: 3rem 1.5rem !important; gap: 0 !important; }
          .stats-item { padding: 1.2rem 0 !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .stats-sep  { display: none !important; }
        }
      `}</style>

      {/* ── Stats row ── */}
      <div
        className="stats-row"
        style={{
          display: "flex",
          alignItems: "stretch",
          padding: "5rem 4rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {STATS.map((stat, i) => (
          <Fragment key={stat.label}>
            <div className="stats-item" style={{ flex: 1, textAlign: "center", padding: "0 2.5rem" }}>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(5rem, 11vw, 11rem)", color: "#ffffff", lineHeight: 1, letterSpacing: "-0.01em" }}>
                <span ref={(el) => { numRefs.current[i] = el; }}>
                  {"0" + stat.suffix}
                </span>
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "0.9rem" }}>
                {stat.label}
              </div>
            </div>
            {i < STATS.length - 1 && (
              <div className="stats-sep" style={{ width: "1px", alignSelf: "stretch", background: "rgba(255,255,255,0.1)" }} />
            )}
          </Fragment>
        ))}
      </div>

      {/* ── Dual marquee ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ overflow: "hidden", padding: "1.1rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", width: "max-content", whiteSpace: "nowrap", animation: "marquee-left 28s linear infinite" }}>
            {[MARQUEE_TEXT, MARQUEE_TEXT].map((t, i) => (
              <span key={i} style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff" }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ overflow: "hidden", padding: "1.1rem 0" }}>
          <div style={{ display: "flex", width: "max-content", whiteSpace: "nowrap", animation: "marquee-right 28s linear infinite" }}>
            {[MARQUEE_TEXT, MARQUEE_TEXT].map((t, i) => (
              <span key={i} style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8faa8b" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
