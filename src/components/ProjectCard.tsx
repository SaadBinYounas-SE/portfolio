"use client";

import { useState } from "react";
import type { Project } from "@/data/profile";
import { techIcons } from "@/data/techIcons";
import ProjectDiagram from "./ProjectDiagram";
import Modal from "./ui/Modal";
import TechLogo from "./ui/TechLogo";
import { ExpandIcon } from "./ui/icons";

const dotGrid = {
  backgroundImage: "radial-gradient(circle, rgba(12,104,76,0.16) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

function DiagramPanel({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-mint-50 via-mint-100/50 to-paper-2 ${className}`}
    >
      <div aria-hidden className="absolute inset-0" style={dotGrid} />
      <span
        aria-hidden
        className="absolute right-4 top-0 select-none font-display text-[4.5rem] font-black leading-none text-mint-900/[0.07]"
      >
        {project.index}
      </span>
      <div className="absolute inset-0 p-5">
        <ProjectDiagram variant={project.diagram} />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card — diagram sits on the right (below on mobile). Click opens the case study. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open case study: ${project.title}`}
        className="group grid w-full overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white/75 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint-400/60 hover:shadow-[0_26px_60px_-30px_rgba(16,19,17,0.38)] sm:grid-cols-[1.55fr_1fr]"
      >
        {/* text */}
        <div className="order-2 p-6 sm:order-1 md:p-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="hidden font-display text-2xl font-black tabular-nums text-mint-500/30 sm:inline">
              {project.index}
            </span>
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

          <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-[1.5rem]">
            {project.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-2 md:text-[15px]">{project.blurb}</p>

          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-mint-700 transition-transform duration-300 group-hover:scale-105">
              View case study
              <ExpandIcon className="h-4 w-4" />
            </span>
            <span className="hidden text-xs text-ink-3 sm:inline">· {project.tech.length} technologies</span>
          </div>
        </div>

        {/* diagram (right on desktop, top on mobile) */}
        <DiagramPanel
          project={project}
          className="order-1 h-40 border-ink/8 max-sm:border-b sm:order-2 sm:h-auto sm:border-l"
        />
      </button>

      {/* Full case study */}
      <Modal open={open} onClose={() => setOpen(false)} size="xl" labelledBy="project-modal-title">
        <div className="grid md:grid-cols-2">
          {/* diagram header */}
          <DiagramPanel project={project} className="h-56 border-ink/8 max-md:border-b md:h-full md:min-h-[420px] md:border-r" />

          {/* details */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pr-10">
              <span className="rounded-full border border-mint-500/25 bg-mint-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-mint-700">
                {project.category}
              </span>
              <span className="text-xs font-medium text-ink-3">{project.year}</span>
            </div>

            <h3 id="project-modal-title" className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="mt-1.5 text-[13px] font-bold uppercase tracking-[0.16em] text-mint-600">{project.role}</p>

            <div className="mt-4 space-y-3">
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
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ink/8 bg-white px-2.5 py-1.5 text-xs font-semibold text-ink-2"
                  >
                    {techIcons[t] && <TechLogo name={t} className="h-4 w-4" />}
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
