"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { XIcon } from "./icons";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "md" | "lg" | "xl";
  labelledBy?: string;
};

const sizes = {
  md: "sm:max-w-lg",
  lg: "sm:max-w-2xl",
  xl: "sm:max-w-4xl",
} as const;

/**
 * Accessible popup: dims + blurs the page, traps scroll, closes on Escape or
 * backdrop click. Renders as a centered dialog on desktop and a bottom sheet on
 * mobile.
 */
export default function Modal({ open, onClose, children, size = "lg", labelledBy }: ModalProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-ink/55 backdrop-blur-[3px]"
            onClick={onClose}
            aria-hidden
          />

          {/* panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: 0.32, ease: [0.21, 0.65, 0.28, 0.99] }}
            className={`relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-paper shadow-[0_-20px_60px_-20px_rgba(16,19,17,0.5)] sm:rounded-3xl sm:shadow-[0_40px_100px_-30px_rgba(16,19,17,0.6)] ${sizes[size]}`}
          >
            {/* grab handle on mobile */}
            <div aria-hidden className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-ink/15 sm:hidden" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink-2 backdrop-blur transition-colors duration-200 hover:border-mint-400 hover:text-mint-700"
            >
              <XIcon className="h-4.5 w-4.5" />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
