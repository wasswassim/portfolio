"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MQ, matches } from "@/lib/media";

// matter-js is loaded on demand when the pills get close to the viewport
type GravityModule = typeof import("@/components/ui/gravity");

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    num: "01", label: "Web & Development",
    title: "WEB DESIGN &\nDEVELOPMENT",
    desc: "Building fast, responsive, and visually polished websites and web apps. From clean frontend architecture to robust backend logic — every project is crafted for performance and scalability.",
    bg: "#f0ede6", ghost: "rgba(0,0,0,0.06)",
  },
  {
    num: "02", label: "Visual & Creative",
    title: "GRAPHIC &\n3D DESIGN",
    desc: "Designing visual identities, marketing creatives, and 3D assets that communicate with clarity and style. Every pixel is intentional.",
    bg: "#8faa8b", ghost: "rgba(0,0,0,0.09)",
  },
  {
    num: "03", label: "Growth & Acquisition",
    title: "DIGITAL\nMARKETING",
    desc: "Planning and executing data-driven digital marketing strategies — from advertising campaigns and lead generation to copywriting and email marketing.",
    bg: "#f0ede6", ghost: "rgba(0,0,0,0.06)",
  },
  {
    num: "04", label: "Direction & Delivery",
    title: "PROJECT\nMANAGEMENT",
    desc: "Coordinating projects from brief to launch with clear communication, structured planning, and reliable delivery at every stage.",
    bg: "#8faa8b", ghost: "rgba(0,0,0,0.09)",
  },
  {
    num: "05", label: "Insight & Optimisation",
    title: "DATA ANALYSIS\n& SEO",
    desc: "Analysing online performance and applying SEO best practices to improve visibility, user engagement, and long-term organic growth.",
    bg: "#f0ede6", ghost: "rgba(0,0,0,0.06)",
  },
];

const TRANSITIONS = CARDS.length - 1;

// Full desktop pill set — 18 bodies, full gravity
const PILLS = [
  { label: "Figma",       bg: "#F24E1E", color: "#ffffff", x: "5%",  y: 24  },
  { label: "Blender",     bg: "#E87D0D", color: "#ffffff", x: "24%", y: 24  },
  { label: "Claude",      bg: "#D4A27F", color: "#ffffff", x: "44%", y: 24  },
  { label: "Tailwind",    bg: "#38BDF8", color: "#ffffff", x: "63%", y: 24  },
  { label: "Framer",      bg: "#0055FF", color: "#ffffff", x: "82%", y: 24  },
  { label: "WordPress",   bg: "#21759B", color: "#ffffff", x: "13%", y: 104 },
  { label: "Google Ads",  bg: "#4285F4", color: "#ffffff", x: "33%", y: 104 },
  { label: "Notion",      bg: "#ffffff", color: "#0a0a0a", x: "53%", y: 104 },
  { label: "Adobe Ps",    bg: "#31A8FF", color: "#ffffff", x: "72%", y: 104 },
  { label: "Adobe Ai",    bg: "#FF9A00", color: "#ffffff", x: "88%", y: 104 },
  { label: "Shopify",     bg: "#96BF48", color: "#ffffff", x: "6%",  y: 184 },
  { label: "Meta Ads",    bg: "#0081FB", color: "#ffffff", x: "26%", y: 184 },
  { label: "Adobe Ae",    bg: "#9999FF", color: "#ffffff", x: "46%", y: 184 },
  { label: "Canva",       bg: "#00C4CC", color: "#ffffff", x: "65%", y: 184 },
  { label: "VSCode",      bg: "#007ACC", color: "#ffffff", x: "84%", y: 184 },
  { label: "TikTok",      bg: "#111111", color: "#ffffff", x: "14%", y: 264, border: "1px solid rgba(255,255,255,0.18)" },
  { label: "GitHub",      bg: "#333333", color: "#ffffff", x: "40%", y: 264, border: "1px solid rgba(255,255,255,0.18)" },
  { label: "Next.js",     bg: "#111111", color: "#ffffff", x: "68%", y: 264, border: "1px solid rgba(255,255,255,0.18)" },
];

// Reduced mobile pill set — 9 bodies, lighter physics
const PILLS_MOBILE = [
  { label: "Figma",      bg: "#F24E1E", color: "#ffffff", x: "15%", y: 20  },
  { label: "Claude",     bg: "#D4A27F", color: "#ffffff", x: "60%", y: 20  },
  { label: "WordPress",  bg: "#21759B", color: "#ffffff", x: "18%", y: 110 },
  { label: "Google Ads", bg: "#4285F4", color: "#ffffff", x: "62%", y: 110 },
  { label: "Notion",     bg: "#ffffff", color: "#0a0a0a", x: "15%", y: 200 },
  { label: "Adobe Ps",   bg: "#31A8FF", color: "#ffffff", x: "60%", y: 200 },
  { label: "Shopify",    bg: "#96BF48", color: "#ffffff", x: "15%", y: 290 },
  { label: "TikTok",     bg: "#111111", color: "#ffffff", x: "52%", y: 290, border: "1px solid rgba(255,255,255,0.18)" },
  { label: "GitHub",     bg: "#333333", color: "#ffffff", x: "78%", y: 290, border: "1px solid rgba(255,255,255,0.18)" },
];

export default function SkillsSection() {
  const sectionRef          = useRef<HTMLElement>(null);
  const cardsWrapRef        = useRef<HTMLDivElement>(null);
  const cardRefs            = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs           = useRef<(HTMLSpanElement | null)[]>([]);
  const titleRefs           = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs            = useRef<(HTMLDivElement | null)[]>([]);
  const gravityContainerRef = useRef<HTMLDivElement>(null);
  const handCursorRef       = useRef<HTMLDivElement | null>(null);
  const handPos             = useRef({ x: 0, y: 0 });

  const [showCursor, setShowCursor]       = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);
  const [gravityMod, setGravityMod]       = useState<GravityModule | null>(null);

  // ── Main GSAP setup ──────────────────────────────────────────────────────
  useEffect(() => {
    const isTouch = matches(MQ.touch);
    setIsTouchDevice(isTouch);
    // Scrubbed blur on full-width cards repaints every frame — too costly on phones
    const lowPower = isTouch || matches(MQ.mobile);

    const cards  = cardRefs.current.filter(Boolean)  as HTMLDivElement[];
    const labels = labelRefs.current.filter(Boolean) as HTMLSpanElement[];
    const titles = titleRefs.current.filter(Boolean) as HTMLHeadingElement[];
    const descs  = descRefs.current.filter(Boolean)  as HTMLDivElement[];
    const wrap   = cardsWrapRef.current;
    if (!wrap || cards.length === 0) return;

    cards.forEach((card, i) => { gsap.set(card, { zIndex: i + 1 }); });
    gsap.set(cards[0], { y: 0 });
    gsap.set(cards[1], { y: "50vh" });
    for (let i = 2; i < cards.length; i++) gsap.set(cards[i], { y: "100vh" });
    cards.forEach((_, i) => {
      gsap.set(labels[i], { y: 14, opacity: 0 });
      gsap.set(titles[i], { y: 52, opacity: 0 });
      gsap.set(descs[i],  { y: 18, opacity: 0 });
    });

    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 80%", once: true } })
        .to(labels[0], { y: 0, opacity: 1, duration: 0.4,  ease: "power2.out" })
        .to(titles[0], { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, "-=0.25")
        .to(descs[0],  { y: 0, opacity: 1, duration: 0.4,  ease: "power2.out" }, "-=0.35");

      gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 65%", once: true } })
        .to(labels[1], { y: 0, opacity: 1, duration: 0.4,  ease: "power2.out" })
        .to(titles[1], { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, "-=0.25")
        .to(descs[1],  { y: 0, opacity: 1, duration: 0.4,  ease: "power2.out" }, "-=0.35");

      for (let i = 0; i < TRANSITIONS; i++) {
        const startPct = (i / TRANSITIONS) * 100;
        const endPct   = ((i + 1) / TRANSITIONS) * 100;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: wrap, start: `${startPct}% top`, end: `${endPct}% top`, scrub: true },
        });
        tl.to(cards[i],     { scale: 0.82, z: -90, opacity: 0.4, ...(lowPower ? {} : { filter: "blur(7px)" }), transformOrigin: "50% 50%", ease: "power1.in",  duration: 1 }, 0);
        tl.to(cards[i + 1], { y: 0, ease: "power1.out", duration: 1 }, 0);
        if (i + 2 < cards.length) {
          tl
            .to(cards[i + 2],  { y: "50vh", ease: "power1.out", duration: 1 }, 0)
            .to(labels[i + 2], { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" }, 0.60)
            .to(titles[i + 2], { y: 0, opacity: 1, duration: 0.38, ease: "power3.out" }, 0.72)
            .to(descs[i + 2],  { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" }, 0.88);
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Lazy-load physics once the device is known and the zone is near ─────
  // Mounting only after detection means the world is built with the final
  // container size and pill set, so no post-mount reset is needed.
  // Gravity itself starts/stops as the zone enters/leaves the viewport.
  useEffect(() => {
    const el = gravityContainerRef.current;
    if (isTouchDevice === null || !el || gravityMod) return;
    let cancelled = false;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      import("@/components/ui/gravity").then((m) => { if (!cancelled) setGravityMod(m); });
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => { cancelled = true; io.disconnect(); };
  }, [isTouchDevice, gravityMod]);

  // Don't leave the system cursor hidden if we unmount mid-hover
  useEffect(() => () => document.body.classList.remove("custom-cursor-hidden"), []);

  // Hand cursor follows the mouse via a direct style write — no re-render per move
  const placeHand = useCallback(() => {
    const el = handCursorRef.current;
    if (el) el.style.transform = `translate3d(${handPos.current.x}px, ${handPos.current.y}px, 0) translate(-40%, -20%)`;
  }, []);
  const moveHand = (e: React.MouseEvent) => {
    handPos.current = { x: e.clientX, y: e.clientY };
    placeHand();
  };
  const handRef = useCallback((el: HTMLDivElement | null) => {
    handCursorRef.current = el;
    placeHand();
  }, [placeHand]);

  // No hand cursor on touch
  const hoverHandlers = isTouchDevice ? undefined : {
    onMouseMove: moveHand,
    onMouseEnter: (e: React.MouseEvent) => {
      moveHand(e);
      setShowCursor(true);
      document.body.classList.add("custom-cursor-hidden");
    },
    onMouseLeave: () => {
      setShowCursor(false);
      document.body.classList.remove("custom-cursor-hidden");
    },
  };

  const pills      = isTouchDevice ? PILLS_MOBILE : PILLS;
  const gravityY   = isTouchDevice ? 1.2 : 2;
  const pillFont   = isTouchDevice ? "0.88rem" : "1.15rem";
  const pillPad    = isTouchDevice ? "0.65rem 1.4rem" : "0.9rem 2.2rem";

  return (
    <section id="skills" ref={sectionRef} suppressHydrationWarning style={{ background: "#0a0a0a" }}>
      <style>{`
        @media (max-width: 767px) {
          /* Reduce the top padding so the section header doesn't start too far down */
          .sk-header  { padding: 4rem 1.5rem 2.5rem !important; }
          /* Tighten card padding horizontally on small viewports */
          .sk-card-inner { padding: 1.5rem !important; }
        }
      `}</style>

      {/* ── Section header ── */}
      <div className="sk-header" style={{ padding: "8rem 3rem 5rem", background: "#0a0a0a" }}>
        <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>
          Strategy
        </span>
        <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(4rem, 10vw, 10rem)", lineHeight: 0.88, letterSpacing: "0.01em", color: "#ffffff" }}>
          <div>HOW I APPROACH</div>
          <div>EVERY PROJECT?</div>
        </div>
      </div>

      {/* ── Scroll-stack cards ── */}
      <div ref={cardsWrapRef} style={{ position: "relative", height: `${CARDS.length * 100}vh` }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", perspective: "900px" }}>
          {CARDS.map((card, i) => (
            <div
              key={card.num}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="sk-card-inner"
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "50vh",
                background: card.bg, display: "flex", flexDirection: "column",
                justifyContent: "space-between", padding: "2rem 3rem", overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", bottom: "-1rem", right: "1.5rem", fontFamily: "var(--font-bebas)", fontSize: "clamp(7rem, 20vw, 18rem)", color: card.ghost, lineHeight: 1, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
                {card.num}
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <span ref={(el) => { labelRefs.current[i] = el; }} style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "0.75rem" }}>
                  {card.label}
                </span>
                <h2 ref={(el) => { titleRefs.current[i] = el; }} style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: 0.9, letterSpacing: "0.01em", color: "#0a0a0a", margin: 0, whiteSpace: "pre-line" }}>
                  {card.title}
                </h2>
              </div>
              <div ref={(el) => { descRefs.current[i] = el; }} style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "36rem", margin: "0 auto" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", lineHeight: 1.6, color: "rgba(0,0,0,0.55)" }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gravity pills — touches that miss a pill still scroll the page ── */}
      <div
        ref={gravityContainerRef}
        className="gravity-zone"
        style={{ position: "relative", background: "#0a0a0a" }}
        {...hoverHandlers}
      >
        {gravityMod && (
        <gravityMod.Gravity
          gravity={{ x: 0, y: gravityY }}
          grabCursor={false}
          addTopWall={false}
          autoStart={false}
          runWhenVisible
        >
          {pills.map((pill) => (
            <gravityMod.MatterBody
              key={pill.label}
              x={pill.x}
              y={pill.y}
              matterBodyOptions={{ friction: 0.45, restitution: 0.3, density: 0.002 }}
              isDraggable
              bodyType="rectangle"
            >
              <div style={{
                fontFamily: "var(--font-inter)",
                fontSize: pillFont,
                fontWeight: 600,
                letterSpacing: "0.04em",
                padding: pillPad,
                borderRadius: "999px",
                whiteSpace: "nowrap",
                background: pill.bg,
                color: pill.color,
                border: (pill as { border?: string }).border ?? "none",
                userSelect: "none",
              }}>
                {pill.label}
              </div>
            </gravityMod.MatterBody>
          ))}
        </gravityMod.Gravity>
        )}
      </div>

      {/* ── Hand cursor — desktop only ── */}
      {showCursor && (
        <div ref={handRef} style={{ position: "fixed", left: 0, top: 0, pointerEvents: "none", zIndex: 9999, userSelect: "none" }}>
          <svg width="64" height="64" viewBox="0 0 40 50" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="0"  width="8"  height="30" rx="4" />
            <rect x="24" y="5"  width="8"  height="25" rx="4" />
            <rect x="6"  y="5"  width="8"  height="25" rx="4" />
            <rect x="33" y="9"  width="7"  height="21" rx="3.5" />
            <rect x="0"  y="15" width="7"  height="19" rx="3.5" transform="rotate(-12 0 15)" />
            <rect x="5"  y="23" width="32" height="27" rx="8" />
          </svg>
        </div>
      )}
    </section>
  );
}
