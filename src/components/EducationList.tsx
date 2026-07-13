"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { education } from "@/data/profile";
import Modal from "./ui/Modal";
import Reveal from "./ui/Reveal";
import { BookIcon, ExpandIcon, GraduationCapIcon } from "./ui/icons";

export default function EducationList() {
  const [active, setActive] = useState<number | null>(null);
  const edu = active === null ? null : education[active];

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group flex w-full items-center gap-4 rounded-2xl border border-ink/8 bg-white/70 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint-400/60 hover:shadow-[0_20px_44px_-24px_rgba(16,19,17,0.3)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-50 text-mint-600 transition-colors duration-300 group-hover:bg-mint-500 group-hover:text-white">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="font-display text-lg font-bold tracking-tight text-ink">{e.school}</h4>
                <p className="mt-0.5 truncate text-[15px] text-ink-2">{e.degree}</p>
                <p className="mt-1 text-sm text-ink-3">{e.period}</p>
              </div>
              <ExpandIcon className="h-5 w-5 shrink-0 text-ink-3 transition-all duration-300 group-hover:scale-110 group-hover:text-mint-600" />
            </button>
          </Reveal>
        ))}
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)} size="lg" labelledBy="edu-modal-title">
        {edu && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3 pr-10">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-50 text-mint-600">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 id="edu-modal-title" className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {edu.school}
                </h3>
                <p className="mt-0.5 text-[15px] text-ink-2">{edu.degree}</p>
                <p className="mt-1 text-sm text-ink-3">
                  {edu.period} · {edu.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-ink-2">{edu.summary}</p>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-mint-600">
              <BookIcon className="h-4 w-4" />
              {edu.coursesLabel}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {edu.courses.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.025 * i, duration: 0.3 }}
                  className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-[13px] font-medium text-ink-2"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
