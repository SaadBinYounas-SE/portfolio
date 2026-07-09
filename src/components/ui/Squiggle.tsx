"use client";

import { motion, useReducedMotion } from "framer-motion";

const PATH =
  "M 8 178 C 30 120 96 96 122 138 C 146 178 92 214 68 182 C 44 150 96 108 176 118 C 300 133 420 172 545 158 C 640 147 700 110 752 62";

type SquiggleProps = {
  className?: string;
  /** "back" renders the full line (hidden where the arch covers it); "front" renders
   *  only a clipped center window so the line appears to wrap around the portrait. */
  layer?: "back" | "front";
  delay?: number;
};

/** Hand-drawn accent line that draws itself in, Sewood-style. */
export default function Squiggle({ className = "", layer = "back", delay = 1.1 }: SquiggleProps) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 760 300"
      fill="none"
      aria-hidden
      className={className}
      style={layer === "front" ? { clipPath: "inset(36% 26% 6% 28%)" } : undefined}
    >
      <motion.path
        d={PATH}
        stroke="var(--color-mint-500)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
