import Image from "next/image";
import portrait from "@/assets/portrait.png";
import { about, experience, profile } from "@/data/profile";
import Arrow from "./Arrow";
import Brackets from "./Brackets";
import LocalTime from "./LocalTime";
import StatusPanel from "./StatusPanel";

/**
 * One screen built from flat blocks. The portrait is a cut-out, multiplied onto
 * the blocks so the snow and ice show through it: it is printed on the page
 * rather than framed by it, and it stands across the seam between two blocks.
 */
export default function Hero() {
  const current = experience.find((e) => e.current) ?? experience[0];

  return (
    <section className="grid lg:h-dvh lg:max-h-[1080px] lg:min-h-[700px] lg:grid-cols-[minmax(0,1fr)_minmax(19rem,24.5%)]">
      {/* ---------------- left: headline + portrait ---------------- */}
      <div className="relative isolate flex flex-col overflow-hidden bg-snow">
        <div className="gutter pt-28 lg:pt-[max(7.5rem,15.5vh)]">
          <h1 className="display text-[clamp(3.5rem,17.5vw,7rem)] lg:text-[clamp(5rem,min(9.9vw,20vh),13.5rem)]">
            <span className="line-mask">
              <span className="block animate-rise">
                Full<span className="mx-[-0.02em] inline-block font-light">/</span>Stack
              </span>
            </span>
            <span className="line-mask">
              <span className="block animate-rise [animation-delay:90ms]">Engineer</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[30ch] animate-fade text-[1.25rem] font-medium leading-[1.22] tracking-[-0.015em] [animation-delay:450ms] lg:mt-[3.2vh] lg:max-w-[27ch] lg:text-[clamp(1.125rem,1.55vw,1.5rem)]">
            {profile.tagline}
          </p>
        </div>

        {/* ice strip the portrait stands in */}
        {/* Below lg the seam is painted part-way down the strip so it still crosses the portrait at the collar, never the face. */}
        <div className="relative mt-[22vw] h-[84vw] bg-[linear-gradient(to_bottom,var(--color-snow)_53%,var(--color-ice)_53%)] sm:mt-16 sm:h-[52vw] lg:mt-auto lg:h-[30%] lg:bg-ice lg:bg-none">
          <dl className="gutter relative z-10 grid max-w-[47%] gap-x-10 gap-y-4 pt-6 text-[0.9375rem] leading-snug sm:max-w-[60%] sm:grid-cols-2 lg:max-w-[58%] lg:pt-[3.2vh]">
            <div>
              <dt className="data text-rock">Currently</dt>
              <dd className="mt-1 font-medium">
                {current.role.replace(" & ", " and ")}, {current.company}
              </dd>
            </div>
            <div>
              <dt className="data text-rock">Based in</dt>
              <dd className="mt-1 font-medium">
                {profile.location}
                <span className="data mt-1 block text-rock">
                  31.5204° N 74.3587° E / <LocalTime />
                </span>
              </dd>
            </div>
          </dl>
          <div className="gutter absolute bottom-6 left-0 z-10 flex max-w-[47%] flex-col gap-x-7 gap-y-2 sm:max-w-none sm:flex-row text-[0.9375rem] font-medium lg:bottom-[3.2vh]">
            <a href="#work" className="link-rule">See the work</a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="link-rule">Resume (PDF)</a>
          </div>
        </div>

        {/* portrait: bottom-anchored, crossing from the ice strip up into the snow */}
        <div className="pointer-events-none absolute bottom-0 right-[-14%] z-[5] aspect-[842/1224] mix-blend-multiply h-[100vw] animate-fade [animation-delay:250ms] sm:right-0 sm:h-[66vw] lg:right-[1.5%] lg:h-[79%]">
          <Image
            src={portrait}
            alt="Portrait of Saad Bin Younas in a dark suit and glasses"
            preload
            sizes="(min-width: 1024px) 34vw, 70vw"
            className="h-full w-full object-contain object-bottom"
          />
          <Brackets className="left-[24%] top-[6.5%] h-[52%] w-[56%] text-ink [animation-delay:900ms]" label="On the clock" />
        </div>
      </div>

      {/* ---------------- right: statement, status, the way to contact ---------------- */}
      <div className="flex flex-col">
        <div className="bg-ice px-[var(--gutter)] pb-8 pt-8 lg:px-9 lg:pb-[3.4vh] lg:pt-[max(7.5rem,15.5vh)]">
          <p className="max-w-[20ch] text-[1.5rem] font-medium leading-[1.12] tracking-[-0.025em] lg:text-[clamp(1.25rem,1.72vw,1.75rem)]">
            {about.heading.replace(" — ", ", ")}
          </p>
        </div>

        <div className="min-h-0 flex-1">
          <StatusPanel />
        </div>

        <a
          href="#contact"
          className="group relative flex min-h-36 items-start justify-between overflow-hidden bg-jacket px-[var(--gutter)] py-6 text-ink transition-colors duration-500 hover:bg-snow lg:h-[23%] lg:min-h-0 lg:px-9 lg:py-7"
        >
          <span className="text-[1.375rem] font-medium leading-[1.1] tracking-[-0.02em]">
            Start a<br />conversation
          </span>
          <Arrow className="absolute bottom-5 right-6 h-20 w-20 transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:translate-x-2 lg:bottom-[12%] lg:right-9 lg:h-[46%] lg:w-auto" />
        </a>
      </div>
    </section>
  );
}
