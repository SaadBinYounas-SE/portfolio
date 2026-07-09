"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/profile";
import ProjectDiagram from "./ProjectDiagram";
import { ChevronDownIcon } from "./ui/icons";

const dotGrid = {
  backgroundImage: "radial-gradient(circle, rgba(12,104,76,0.16) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `project-panel-${project.index}`;

  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border bg-white/75 backdrop-blur-sm transition-all duration-300 ${
        open
          ? "border-mint-400/60 shadow-[0_28px_65px_-30px_rgba(16,19,17,0.4)]"
          : "border-ink/8 hover:border-mint-300/70 hover:shadow-[0_18px_40px_-24px_rgba(16,19,17,0.3)]"
      }`}
    >
      {/* Header — always visible */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group/btn flex w-full items-center gap-5 p-5 text-left md:p-7"
      >
        {/* index */}
        <span className="hidden shrink-0 font-display text-3xl font-black tabular-nums text-mint-500/30 sm:block md:text-4xl">
          {project.index}
        </span>

        {/* main */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="rounded-full border border-mint-500/25 bg-mint-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-mint-700">
              {project.category}
            </span>
            <span className="text-xs font-medium text-ink-3">{project.year}</span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-mint-600">
                <span aria-hidden>✦</span> Featured
              </span>
            )}
          </div>
          <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink md:text-[1.55rem]">
            {project.title}
          </h3>
          <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-ink-2 md:text-[15px]">{project.blurb}</p>
        </div>

        {/* chevron */}
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-180 border-mint-500 bg-mint-500 text-white"
              : "border-ink/15 text-ink-2 group-hover/btn:border-mint-400"
          }`}
        >
          <ChevronDownIcon className="h-4.5 w-4.5" />
        </span>
      </button>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.65, 0.28, 0.99] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 border-t border-ink/8 p-5 md:grid-cols-[1.15fr_1fr] md:gap-10 md:p-7">
              {/* left: story */}
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-mint-600">{project.role}</p>
                <div className="mt-3 space-y-3">
                  {project.description.map((para) => (
                    <p key={para.slice(0, 24)} className="text-[15px] leading-relaxed text-ink-2">
                      {para}
                    </p>
                  ))}
                </div>

                {project.metrics && (
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-mint-100 bg-mint-50 px-3 py-1.5 text-[13px] font-bold text-mint-800"
                      >
                        <span aria-hidden className="text-mint-500">
                          ✦
                        </span>
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 border-t border-ink/8 pt-5">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-3">Built with</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-xs font-medium text-ink-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* right: blueprint diagram */}
              <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-ink/8 bg-gradient-to-br from-mint-50 via-mint-100/50 to-paper-2">
                <div aria-hidden className="absolute inset-0" style={dotGrid} />
                <span
                  aria-hidden
                  className="absolute right-4 top-1 select-none font-display text-[5rem] font-black leading-none text-mint-900/[0.06]"
                >
                  {project.index}
                </span>
                <div className="absolute inset-0 p-6">
                  <ProjectDiagram variant={project.diagram} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
