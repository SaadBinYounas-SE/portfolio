"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "./icons";

/** Sewood-style circular rotating badge — a confident invite to the contact form. */
export default function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="#contact"
      aria-label="Let’s collaborate — get in touch"
      className={`group block ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.6, type: "spring", bounce: 0.45 }}
      whileHover={{ scale: 1.08 }}
    >
      <span className="relative grid h-28 w-28 place-items-center md:h-32 md:w-32">
        {/* ring */}
        <span className="absolute inset-[26%] rounded-full border-[7px] border-mint-200 bg-paper shadow-[inset_0_2px_6px_rgba(16,19,17,0.08)] transition-colors duration-300 group-hover:border-mint-300" />
        <ArrowDownIcon className="relative z-10 h-4 w-4 text-ink transition-transform duration-300 group-hover:translate-y-0.5" />
        {/* rotating text */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
          <defs>
            <path id="badge-circle" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
          </defs>
          <text className="fill-ink text-[9.5px] font-semibold uppercase">
            {/* textLength = circle circumference (2π·40) so the loop closes without overlap */}
            <textPath href="#badge-circle" textLength="251" lengthAdjust="spacingAndGlyphs">
              Let’s collaborate • Say hello •
            </textPath>
          </text>
        </svg>
      </span>
    </motion.a>
  );
}
