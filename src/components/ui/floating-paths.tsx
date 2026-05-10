"use client";

import { motion } from "framer-motion";

export function FloatingPathsBackground({
  position,
  className = "",
}: {
  position: number;
  className?: string;
}) {
  const paths = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div
      className={className}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <svg
        style={{ width: "100%", height: "100%", color: "white" }}
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.018}
            initial={{ pathLength: 0.5, opacity: 0.4 }}
            animate={{
              pathLength: 0.5,
              opacity: [0.4, 0.8, 0.4],
              pathOffset: [1, 0],
            }}
            transition={{
              duration: 1 + Math.random() * 0.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
