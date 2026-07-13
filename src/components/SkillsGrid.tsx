"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/profile";
import Modal from "./ui/Modal";
import { ExpandIcon, SkillIcon } from "./ui/icons";
import TechLogo from "./ui/TechLogo";

export default function SkillsGrid() {
  const [active, setActive] = useState<number | null>(null);
  const group = active === null ? null : skillGroups[active];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <button
            key={g.title}
            type="button"
            onClick={() => setActive(i)}
            className="group flex h-full flex-col rounded-2xl border border-ink/8 bg-white/70 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint-400/60 hover:shadow-[0_20px_44px_-24px_rgba(16,19,17,0.3)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-50 text-mint-600 transition-colors duration-300 group-hover:bg-mint-500 group-hover:text-white">
                <SkillIcon name={g.icon} className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold text-mint-500/70">
                {String(g.skills.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">{g.title}</h3>
            <p className="mt-1 flex-1 text-sm leading-snug text-ink-3">{g.blurb}</p>

            {/* logo preview row */}
            <div className="mt-4 flex items-center gap-2">
              {!g.concepts &&
                g.skills.slice(0, 5).map((s) => (
                  <span key={s} className="grid h-7 w-7 place-items-center rounded-lg bg-white ring-1 ring-ink/5">
                    <TechLogo name={s} className="h-4 w-4" />
                  </span>
                ))}
              {g.skills.length > 5 && !g.concepts && (
                <span className="text-xs font-semibold text-ink-3">+{g.skills.length - 5}</span>
              )}
              <span className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-mint-600 transition-transform duration-300 group-hover:scale-105">
                View
                <ExpandIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <Modal open={active !== null} onClose={() => setActive(null)} size="lg" labelledBy="skill-modal-title">
        {group && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 pr-10">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-50 text-mint-600">
                <SkillIcon name={group.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 id="skill-modal-title" className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {group.title}
                </h3>
                <p className="text-sm text-ink-3">{group.blurb}</p>
              </div>
            </div>

            <div className="mt-6">
              {group.concepts ? (
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.3 }}
                      className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-[13px] font-medium text-ink-2"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.3 }}
                      className="flex items-center gap-3 rounded-xl border border-ink/8 bg-white px-3 py-2.5"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper ring-1 ring-ink/5">
                        <TechLogo name={skill} className="h-5 w-5" />
                      </span>
                      <span className="truncate text-[13px] font-semibold text-ink-2">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
