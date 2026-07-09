"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "@/data/profile";
import { ChevronDownIcon, SkillIcon } from "./ui/icons";
import TechLogo from "./ui/TechLogo";

function AccordionItem({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `skill-panel-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-sm transition-colors duration-300 ${
        open ? "border-mint-400/60 shadow-[0_18px_44px_-24px_rgba(16,19,17,0.3)]" : "border-ink/8 hover:border-mint-300/70"
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
          <SkillIcon name={group.icon} className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2.5">
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">{group.title}</h3>
            <span className="text-xs font-semibold text-mint-500/80">
              {group.skills.length} {group.concepts ? "practices" : "tools"}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-ink-3">{group.blurb}</p>
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
            <div className="border-t border-ink/8 px-5 pb-6 pt-5 md:px-6">
              {group.concepts ? (
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.03, duration: 0.3 }}
                      className="rounded-lg border border-ink/10 bg-paper px-3 py-1.5 text-[13px] font-medium text-ink-2"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + i * 0.03, duration: 0.3 }}
                      className="group/badge flex items-center gap-3 rounded-xl border border-ink/8 bg-paper px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-mint-400/70 hover:bg-white hover:shadow-[0_10px_24px_-14px_rgba(16,19,17,0.35)]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white ring-1 ring-ink/5 transition-transform duration-200 group-hover/badge:scale-105">
                        <TechLogo name={skill} className="h-5 w-5" />
                      </span>
                      <span className="truncate text-[13px] font-semibold text-ink-2">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SkillsAccordion() {
  return (
    <div className="space-y-3.5">
      {skillGroups.map((group, i) => (
        <AccordionItem key={group.title} group={group} index={i} />
      ))}
    </div>
  );
}
