import { education, experience } from "@/data/profile";
import EducationCard from "./EducationCard";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { GraduationCapIcon } from "./ui/icons";

export default function Experience() {
  return (
    <section id="experience" className="section-anchor">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="experience"
          title="Where I’ve worked"
          sub="From enterprise web and mobile teams to owning full delivery lifecycles across concurrent client engagements."
        />

        {/* Timeline */}
        <div className="relative mt-12 md:mt-14">
          <div aria-hidden className="absolute bottom-3 left-[7px] top-2 w-px bg-ink/10" />
          <ol className="space-y-12">
            {experience.map((job, i) => (
              <li key={job.company} className="relative pl-10 md:pl-14">
                {/* timeline dot */}
                <span aria-hidden className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center">
                  {job.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-50" />
                  )}
                  <span className="relative inline-flex h-[15px] w-[15px] rounded-full border-[3px] border-mint-500 bg-paper" />
                </span>

                <Reveal delay={i * 0.06}>
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-[15px]">
                        <span className="font-semibold text-mint-700">{job.company}</span>
                        <span className="text-ink-3"> · {job.meta}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                          job.current
                            ? "border-mint-500/30 bg-mint-50 text-mint-800"
                            : "border-ink/10 bg-white/70 text-ink-2"
                        }`}
                      >
                        {job.period}
                      </span>
                      <span className="hidden text-ink-3 sm:inline">{job.location}</span>
                    </div>
                  </div>

                  <ul className="mt-4 max-w-3xl space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-mint-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Education — expandable cards */}
        <Reveal className="mt-16">
          <h3 className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
            <GraduationCapIcon className="h-6 w-6 text-mint-600" />
            Education
          </h3>
          <p className="mt-2 text-[15px] text-ink-3">Tap a card to see what I studied.</p>
        </Reveal>

        <div className="mt-6 space-y-4">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.08}>
              <EducationCard edu={edu} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
