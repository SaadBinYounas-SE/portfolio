"use client";

import Link from "next/link";
import { useState } from "react";
import { projects, splitTitle } from "@/data/profile";
import Arrow from "./Arrow";
import ProjectDiagram from "./ProjectDiagram";
import TechLogo from "./TechLogo";

/**
 * All projects as one index. On wide screens the row under the pointer (or
 * keyboard focus) drives a pinned preview: the project's diagram, summary and stack.
 */
export default function WorkIndex() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section aria-label="All projects" className="bg-granite text-snow [--diagram-bg:var(--color-granite)]">
      <div className="grid lg:grid-cols-12">
        <ol className="lg:col-span-7">
          {projects.map((proj, i) => {
            const [name, kind] = splitTitle(proj.title);
            const on = i === active;
            return (
              <li key={proj.slug} className="border-b border-snow/15">
                <Link
                  href={`/work/${proj.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group gutter grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-3 py-6 transition-colors duration-300 md:py-7 lg:pr-9 ${
                    on ? "lg:bg-ink" : ""
                  }`}
                >
                  <span className={`data transition-colors ${on ? "lg:text-snow" : ""} text-mist`}>{proj.index}</span>
                  <span>
                    <span className="block text-[clamp(1.75rem,3.3vw,3.25rem)] font-medium leading-none tracking-[-0.035em]">
                      {name}
                    </span>
                    {kind && <span className="mt-2 block text-mist">{kind}</span>}
                    <span className="mt-3 block max-w-[52ch] text-[0.9375rem] text-snow/80 lg:hidden">{proj.blurb}</span>
                    <span className="data mt-3 flex flex-wrap gap-x-4 text-mist">
                      <span>{proj.category}</span>
                      <span>{proj.year}</span>
                    </span>
                  </span>
                  <Arrow
                    className={`h-6 w-6 self-center transition-all duration-500 ease-out-expo ${
                      on ? "lg:translate-x-0 lg:opacity-100" : "lg:-translate-x-3 lg:opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ol>

        {/* pinned preview */}
        <div aria-hidden className="hidden border-l border-snow/15 lg:col-span-5 lg:block">
          <div className="sticky top-14 flex h-[calc(100dvh-3.5rem)] max-h-[860px] flex-col justify-between gap-6 p-9">
            <div className="flex items-baseline justify-between">
              <span className="data text-mist">
                {p.index} / {String(projects.length).padStart(2, "0")}
              </span>
              <span className="data text-mist">{p.role}</span>
            </div>
            <div key={p.slug} className="min-h-0 flex-1 animate-fade [animation-duration:.45s]">
              <ProjectDiagram variant={p.diagram} />
            </div>
            <div key={`${p.slug}-t`} className="animate-fade [animation-duration:.45s]">
              <p className="max-w-[46ch] text-[0.9375rem] text-snow/85">{p.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-mist">
                {p.tech.slice(0, 7).map((t) => (
                  <li key={t} className="data flex items-center gap-1.5">
                    <TechLogo name={t} className="h-3.5 w-3.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
