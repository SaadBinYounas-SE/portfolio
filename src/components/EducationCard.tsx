"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Education } from "@/data/profile";
import { BookIcon, ChevronDownIcon, GraduationCapIcon } from "./ui/icons";

export default function EducationCard({ edu, index }: { edu: Education; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `edu-panel-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-sm transition-colors duration-300 ${
        open ? "border-mint-400/60 shadow-[0_18px_40px_-22px_rgba(16,19,17,0.3)]" : "border-ink/8 hover:border-mint-300/70"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-50 text-mint-600">
          <GraduationCapIcon className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="font-display text-lg font-bold tracking-tight text-ink">{edu.school}</h4>
            <span className="shrink-0 text-sm font-semibold text-ink-3">{edu.period}</span>
          </div>
          <p className="mt-0.5 text-[15px] text-ink-2">
            {edu.degree} <span className="text-ink-3">· {edu.location}</span>
          </p>
        </div>

        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open ? "rotate-180 border-mint-500 bg-mint-500 text-white" : "border-ink/15 text-ink-2"
          }`}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.65, 0.28, 0.99] }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink/8 px-5 pb-6 pt-5 md:px-6 md:pl-[4.75rem]">
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-2">{edu.summary}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-mint-600">
                <BookIcon className="h-4 w-4" />
                {edu.coursesLabel}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.025, duration: 0.3 }}
                    className="rounded-lg border border-ink/10 bg-paper px-3 py-1.5 text-[13px] font-medium text-ink-2"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
