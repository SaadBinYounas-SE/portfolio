import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import PageIntro from "@/components/PageIntro";
import TechLogo from "@/components/TechLogo";
import { about, education, experience, profile, skillGroups } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: about.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About" lead={about.heading.replace(" — ", ", ")} />

      {/* story */}
      <section aria-label="Background" className="gutter grid gap-x-10 gap-y-12 bg-snow pb-20 md:pb-28 lg:grid-cols-12">
        <div className="max-w-[66ch] space-y-6 text-lg lg:col-span-7">
          {about.paragraphs.map((para, i) => (
            <p key={i} className={i === 0 ? "text-[1.375rem] font-medium leading-[1.3] tracking-[-0.015em]" : undefined}>
              {para}
            </p>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="group !mt-10 inline-flex items-center gap-3 bg-ink px-5 py-4 font-medium text-snow transition-colors duration-300 hover:bg-granite">
            Download resume (PDF)
            <Arrow className="h-4 w-4 rotate-90 transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5" />
          </a>
        </div>

        <dl className="self-start border-b border-ink/30 lg:col-span-4 lg:col-start-9">
          {about.stats.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-6 border-t border-ink/30 py-4">
              <dd className="order-1 text-[2.75rem] font-medium leading-none tracking-[-0.04em]">{s.value}</dd>
              <dt className="order-2 max-w-[20ch] text-right text-[0.9375rem] leading-snug">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* experience */}
      <section aria-labelledby="exp-h" className="bg-granite text-snow">
        <h2 id="exp-h" className="display gutter pb-10 pt-20 text-[clamp(3rem,8.5vw,8.5rem)] md:pb-14 md:pt-28">
          Experience
        </h2>
        <ol>
          {experience.map((job) => (
            <li key={job.company} className="gutter grid gap-x-10 gap-y-5 border-t border-snow/15 py-10 md:py-14 lg:grid-cols-12">
              <div className="data space-y-1 text-mist lg:col-span-3">
                <p className="flex items-center gap-2 text-snow">
                  {job.current && <span aria-hidden className="h-1.5 w-1.5 animate-blink bg-snow [animation-duration:1.6s]" />}
                  {job.period}
                </p>
                <p>{job.location}</p>
                <p>{job.meta}</p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="text-[clamp(1.75rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.035em]">{job.role}</h3>
                <p className="mt-2 text-xl font-medium tracking-[-0.015em] text-mist">{job.company}</p>
                <ul className="mt-7 max-w-[72ch] space-y-3 text-snow/85">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 32)} className="grid grid-cols-[1.25rem_minmax(0,1fr)]">
                      <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-mist" />
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-mist">
                  {job.tech.map((t) => (
                    <li key={t} className="data flex items-center gap-1.5">
                      <TechLogo name={t} className="h-3.5 w-3.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* stack */}
      <section aria-labelledby="stack-h" className="bg-snow">
        <h2 id="stack-h" className="display gutter pb-10 pt-20 text-[clamp(3rem,8.5vw,8.5rem)] md:pb-14 md:pt-28">
          Stack
        </h2>
        <dl>
          {skillGroups.map((g) => (
            <div key={g.title} className="gutter grid gap-x-10 gap-y-4 border-t border-ink/25 py-7 lg:grid-cols-12">
              <dt className="lg:col-span-3">
                <span className="block text-xl font-medium tracking-[-0.02em]">{g.title}</span>
                <span className="mt-1 block text-[0.9375rem] text-rock">{g.blurb}</span>
              </dt>
              <dd className="lg:col-span-9">
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 border border-ink/30 px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200 hover:bg-ink hover:text-snow">
                      {!g.concepts && <TechLogo name={s} className="h-4 w-4" />}
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <div className="h-16 border-t border-ink/25 md:h-24" />
      </section>

      {/* education */}
      <section aria-labelledby="edu-h" className="bg-ice">
        <h2 id="edu-h" className="display gutter pb-10 pt-20 text-[clamp(3rem,8.5vw,8.5rem)] md:pb-14 md:pt-28">
          Education
        </h2>
        <ul className="pb-16 md:pb-24">
          {education.map((e) => (
            <li key={e.school} className="gutter grid gap-x-10 gap-y-4 border-t border-ink/30 py-9 lg:grid-cols-12">
              <div className="data space-y-1 text-rock lg:col-span-3">
                <p className="text-ink">{e.period}</p>
                <p>{e.location}</p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="text-[clamp(1.75rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.035em]">{e.degree}</h3>
                <p className="mt-2 text-xl font-medium tracking-[-0.015em] text-rock">{e.school}</p>
                <p className="mt-5 max-w-[66ch]">{e.summary}</p>
                <details className="group mt-5">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-medium [&::-webkit-details-marker]:hidden">
                    <span aria-hidden className="relative block h-3 w-3">
                      <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90" />
                    </span>
                    {e.coursesLabel}
                  </summary>
                  <ul className="data mt-4 flex max-w-[80ch] flex-wrap gap-2">
                    {e.courses.map((c) => (
                      <li key={c} className="border border-ink/30 px-2.5 py-1.5">{c}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
