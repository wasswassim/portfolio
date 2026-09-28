"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────────────────
   WordsPullUp
   Splits text into words and reveals each one upward with a stagger.
   wordDelay — base offset (seconds) added to every word's delay, useful for
               sequencing multiple instances on the same page.
───────────────────────────────────────────────────────────────────────────── */
interface WordsPullUpProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  wordDelay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function WordsPullUp({
  text,
  className = "",
  style,
  wordDelay = 0,
  duration = 0.65,
  stagger = 0.08,
  once = true,
}: WordsPullUpProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });
  // Reduced motion: render words in place, no reveal
  const reduce = useReducedMotion();
  const words  = text.split(" ");

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      style={style}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration, delay: wordDelay + i * stagger, ease: EASE }}
          style={{ display: "inline-block", marginRight: i < words.length - 1 ? "0.2em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WordsPullUpMultiStyle
   Multiple text segments each with their own className — rendered as a flat
   list of words so the stagger runs across segment boundaries.
───────────────────────────────────────────────────────────────────────────── */
interface Segment {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
  wordDelay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
  style,
  wordDelay = 0,
  duration = 0.65,
  stagger = 0.08,
  once = true,
}: WordsPullUpMultiStyleProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });
  const reduce = useReducedMotion();

  // Flatten all segments into a single word list preserving per-word style
  const words: { word: string; className?: string; style?: React.CSSProperties }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className, style: seg.style });
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration, delay: wordDelay + i * stagger, ease: EASE }}
          className={w.className ?? ""}
          style={{ display: "inline-block", marginRight: "0.2em", ...w.style }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
}
