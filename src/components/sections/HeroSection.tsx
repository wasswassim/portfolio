"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WordsPullUpMultiStyle } from "@/components/ui/words-pull-up";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATS = [
  "10+ Projects Completed",
  "3+ Years of Experience",
  "Tunisia & Italy",
];

const DIVIDER: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  width: "100%",
  height: "1px",
  background: "rgba(255,255,255,0.1)",
  flexShrink: 0,
};

const LABEL: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontSize: "0.6rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
  marginBottom: "0.5rem",
};

export default function HeroSection({ onMenuOpen }: { onMenuOpen?: () => void }) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const inView    = useInView(bottomRef, { once: true });

  return (
    <section
      id="hero"
      suppressHydrationWarning
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .hero-topbar   { padding: 1.2rem 1.4rem !important; }
          .hero-statsbar { display: none !important; }
          .hero-divider  { display: none !important; }
          .hero-bottom   { flex-direction: column !important; align-items: flex-start !important;
                           padding: 1.2rem 1.4rem 1.8rem !important; gap: 1rem !important; }
          .hero-bio      { max-width: 100% !important; }
        }
      `}</style>
      {/* ── Video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
      />

      {/* ── Gradient overlay — keeps top/bottom readable ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.72) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top bar ── */}
      <div
        className="hero-topbar"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 2.5rem",
          flexShrink: 0,
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: "2.4rem",
            height: "2.4rem",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#ffffff",
            }}
          >
            W.G.
          </span>
        </div>

        {/* Menu pill */}
        <button
          suppressHydrationWarning
          onClick={onMenuOpen}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#ffffff",
            color: "#0a0a0a",
            border: "none",
            borderRadius: "999px",
            padding: "0.45rem 1rem 0.45rem 0.75rem",
            fontFamily: "var(--font-inter)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: "0.45rem",
              height: "0.45rem",
              borderRadius: "50%",
              background: "#4ade80",
              flexShrink: 0,
            }}
          />
          MENU
        </button>
      </div>

      {/* Divider top */}
      <div className="hero-divider" style={DIVIDER} />

      {/* ── Stats bar ── */}
      <div
        className="hero-statsbar"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.85rem 2.5rem",
          flexShrink: 0,
        }}
      >
        {STATS.map((stat) => (
          <span
            key={stat}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {stat}
          </span>
        ))}
      </div>

      {/* ── Headline — centered, pulls up word by word ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "2.25rem",
          paddingRight: "2.25rem",
        }}
      >
        {/*
         * WordsPullUpMultiStyle: "I DESIGN, BUILD" in white, "& MARKET" in sage.
         * The two segments share one continuous stagger so the colour shift
         * feels like a single flowing reveal rather than two separate animations.
         */}
        <WordsPullUpMultiStyle
          segments={[
            { text: "I DESIGN, BUILD", style: { color: "#ffffff" } },
            { text: "& MARKET",        style: { color: "#8faa8b" } },
          ]}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.4rem, 14.5vw, 16rem)",
            letterSpacing: "0.01em",
            lineHeight: 0.9,
            display: "flex",
            flexWrap: "wrap",
          }}
          wordDelay={0.1}
          duration={0.7}
          stagger={0.09}
        />
      </div>

      {/* Divider bottom */}
      <div className="hero-divider" style={DIVIDER} />

      {/* ── Bottom bar ── */}
      <div
        ref={bottomRef}
        className="hero-bottom"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "1.1rem 2.5rem 1.5rem",
          flexShrink: 0,
        }}
      >
        {/* About block */}
        <motion.div
          className="hero-bio"
          initial={{ y: 18, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          style={{ maxWidth: "28rem" }}
        >
          <p style={LABEL}>About</p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.38)",
              lineHeight: 1.65,
              letterSpacing: "0.01em",
            }}
          >
            I have experience in web development, digital marketing, and project
            management. Passionate about technology, problem-solving, and
            building things that work.
          </p>
        </motion.div>

        {/* Scroll-down indicator */}
        <motion.button
          initial={{ y: 18, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          style={{
            background: "none", border: "none", cursor: "none",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem",
          }}
        >
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "0.6rem",
            fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}>
            Learn more
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.9rem", lineHeight: 1 }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
