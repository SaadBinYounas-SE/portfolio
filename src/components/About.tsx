import Image from "next/image";
import { about, profile } from "@/data/profile";
import headshot from "../../public/images/headshot.png";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { MapPinIcon } from "./ui/icons";

export default function About() {
  return (
    <section id="about" className="section-anchor">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-[5fr_6fr] lg:gap-16">
        {/* Portrait composition — top-aligned to start around the heading */}
        <Reveal className="mx-auto w-full max-w-md lg:mx-0 lg:mt-16">
          <div className="relative">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border border-ink/5 bg-mint-50">
              <Image
                src={headshot}
                alt={`${profile.name} — portrait`}
                placeholder="blur"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="h-full w-full object-cover object-top"
              />
              {/* subtle ring so the natural photo sits cleanly in the card */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/10" />
            </div>

            {/* floating location card */}
            <div className="absolute -right-4 top-8 flex rotate-3 items-center gap-2 rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(16,19,17,0.35)] md:-right-7">
              <MapPinIcon className="h-4 w-4 text-mint-600" />
              <span className="text-sm font-semibold text-ink">{profile.location}</span>
            </div>

            {/* floating role card */}
            <div className="absolute -left-4 bottom-10 flex -rotate-2 items-center gap-2.5 rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(16,19,17,0.35)] md:-left-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
              </span>
              <span className="text-sm font-semibold text-ink">
                Full-Stack Lead <span className="font-medium text-ink-3">@ Automaxion LLC</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <div>
          <SectionHeading eyebrow="about me" title={about.heading} />
          <div className="mt-6 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <p className="text-[15px] leading-relaxed text-ink-2 md:text-base">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i}>
                <div className="group rounded-2xl border border-ink/8 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint-400/60 hover:shadow-[0_18px_40px_-18px_rgba(16,19,17,0.25)]">
                  <div className="font-display text-3xl font-black tracking-tight text-ink transition-colors duration-300 group-hover:text-mint-600 md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink-3">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
