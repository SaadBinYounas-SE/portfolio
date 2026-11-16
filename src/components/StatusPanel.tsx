"use client";

import { useEffect, useState } from "react";
import { lifecycle, runLog } from "@/data/profile";

/**
 * The dark panel in the hero. The list is the delivery lifecycle Saad owns on
 * every engagement; a marker steps through it. Underneath, a readout replays
 * real outcomes from the projects, one line at a time.
 */
export default function StatusPanel() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => s + 1), 1700);
    return () => clearInterval(id);
  }, []);

  const active = step % lifecycle.length;
  const rows = 4;
  // Newest line last; indices keep growing so keys stay stable and only the new line animates.
  const visible = Array.from({ length: rows }, (_, i) => Math.floor(step / 2) + i);

  return (
    <div className="flex h-full flex-col justify-between gap-8 bg-granite px-[var(--gutter)] py-7 text-snow lg:px-9 lg:py-8">
      <div>
        <h2 className="text-[1.375rem] font-medium tracking-[-0.02em]">Owned end to end</h2>
        <ol className="data mt-4">
          {lifecycle.map((l, i) => (
            <li
              key={l.stage}
              aria-current={i === active ? "step" : undefined}
              className={`flex items-center gap-3 py-[0.2rem] transition-colors duration-300 ${i === active ? "text-snow" : "text-mist"}`}
            >
              <span className="tabular-nums">0{i + 1}.</span>
              <span>{l.stage}</span>
              <span className={`hidden min-w-0 flex-1 truncate normal-case transition-opacity duration-300 2xl:block ${i === active ? "opacity-70" : "opacity-0"}`}>
                {l.detail}
              </span>
              <span
                aria-hidden
                className={`ml-auto h-1.5 w-1.5 shrink-0 transition-all duration-300 ${i === active ? "scale-150 bg-snow" : i < active ? "bg-mist" : "bg-mist/40"}`}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="relative pl-5">
        {/* bracket down the side of the readout */}
        <span aria-hidden className="absolute inset-y-0 left-0 w-2 border-y border-l border-mist/70" />
        <p className="sr-only">Recent outcomes from the projects below</p>
        <ul aria-hidden className="data flex min-h-[5.25rem] flex-col justify-end text-mist">
          {visible.map((n, i) => {
            const r = runLog[n % runLog.length];
            const newest = i === visible.length - 1;
            return (
              <li
                key={n}
                className={`grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_auto] gap-3 py-[0.15rem] ${newest ? "text-snow [animation:reveal_.7s_steps(22)_both]" : ""}`}
              >
                <span className="truncate">&gt; {r.job}</span>
                <span className="truncate">{r.result}</span>
                <span>ok</span>
              </li>
            );
          })}
        </ul>
        <span aria-hidden className="data absolute -bottom-0.5 right-0 animate-blink text-snow">_</span>
      </div>
    </div>
  );
}
