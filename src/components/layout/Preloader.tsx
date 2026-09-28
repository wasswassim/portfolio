"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { MQ, matches } from "@/lib/media";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible]   = useState(true);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const nameRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP controls initial state — keeps the element invisible until the
    // animation begins, avoiding any flash on first paint.
    gsap.set(nameRef.current, { opacity: 0, y: 12 });
    gsap.set(lineRef.current, { scaleX: 0 });

    const proxy = { val: 0 };

    const tl = gsap.timeline({ onComplete: () => setVisible(false) });

    // "WASSIM GATRI" drifts into view first
    tl.to(nameRef.current, {
      opacity: 1, y: 0,
      duration: 0.55,
      ease: "power2.out",
    });

    // Counter 00 → 100
    tl.to(proxy, {
      val: 100,
      duration: 2.0,
      ease: "power2.inOut",
      onUpdate() {
        if (!counterRef.current) return;
        const v = Math.round(proxy.val);
        counterRef.current.textContent = v < 10 ? `0${v}` : String(v);
      },
    }, "-=0.1");

    // Progress line grows in sync with the counter
    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 2.0,
      ease: "power2.inOut",
    }, "<");

    // Breathe at 100 before exiting
    tl.to({}, { duration: 0.35 });

    // Reduced motion: same sequence, just much quicker
    if (matches(MQ.reduced)) tl.timeScale(4);

    return () => { tl.kill(); };
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          suppressHydrationWarning
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#000000",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          {/* ── Name — top-left corner ── */}
          <div
            ref={nameRef}
            style={{
              position: "absolute",
              top: "2.8rem",
              left: "3.5rem",
              opacity: 0,
            }}
          >
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}>
              Wassim Gatri
            </span>
          </div>

          {/* ── Counter — center stage ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span
              ref={counterRef}
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(7rem, 20vw, 22rem)",
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.01em",
                userSelect: "none",
              }}
            >
              00
            </span>
          </div>

          {/* ── Progress line — bottom edge ── */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(255,255,255,0.1)",
          }}>
            <div
              ref={lineRef}
              style={{
                height: "100%",
                background: "#ffffff",
                transformOrigin: "left center",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
