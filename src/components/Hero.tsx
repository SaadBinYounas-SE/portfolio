"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import headshot from "../../public/images/headshot.png";
import RotatingBadge from "./ui/RotatingBadge";
import Squiggle from "./ui/Squiggle";
import TechMarquee from "./TechMarquee";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./ui/icons";

const ease = [0.21, 0.65, 0.28, 0.99] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.socials.email, label: "Email", Icon: MailIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-x-clip pt-24 md:pt-28">
      <div className="relative mx-auto max-w-6xl px-5">
        {/* Vertical social rail — Sewood's left-edge icons */}
        <motion.div
          {...fadeUp(1.0)}
          className="absolute left-5 top-40 z-20 hidden flex-col items-center gap-5 lg:flex"
        >
          <span className="h-14 w-px bg-ink/15" />
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              aria-label={label}
              className="text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-mint-600"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <span className="h-14 w-px bg-ink/15" />
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Portrait arch + squiggle + rotating badge */}
          <div className="relative mt-4 md:mt-6">
            {/* back layer of the wrap-around line (visible outside the arch) */}
            <Squiggle
              layer="back"
              className="absolute left-1/2 top-[46%] z-0 w-[175%] -translate-x-1/2"
            />

            {/* Plain (non-animated) wrapper: animating a transform on a mask-image
                element intermittently fails to paint until refresh. */}
            <div className="arch-fade relative z-10 aspect-[4/5] w-[min(76vw,19rem)] overflow-hidden rounded-t-full bg-mint-100/40 sm:w-[21rem] md:w-[24rem]">
              <Image
                src={headshot}
                alt="Saad Bin Younas — professional headshot"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 76vw, (max-width: 768px) 336px, 384px"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* front layer of the line — clipped so it crosses in front of the portrait */}
            <Squiggle
              layer="front"
              className="absolute left-1/2 top-[46%] z-20 w-[175%] -translate-x-1/2"
            />

            <RotatingBadge className="absolute -right-8 top-2 z-30 hidden sm:block md:-right-16" />

            {/* sparkle accents */}
            <motion.span
              {...fadeUp(1.3)}
              aria-hidden
              className="absolute -left-10 top-16 animate-pulse text-xl text-mint-500 md:-left-16"
            >
              ✦
            </motion.span>
            <motion.span
              {...fadeUp(1.5)}
              aria-hidden
              className="absolute -right-6 bottom-24 animate-pulse text-sm text-mint-400"
            >
              ✦
            </motion.span>
          </div>

          {/* Name — huge display type, tail fading to grey like the reference */}
          <motion.h1
            {...fadeUp(0.35)}
            className="relative z-20 -mt-14 text-center font-display text-[clamp(2.7rem,9.5vw,7rem)] font-black leading-[0.98] tracking-[-0.035em] sm:-mt-16 md:-mt-20"
          >
            <span className="bg-gradient-to-r from-ink from-55% to-ink-3 bg-clip-text text-transparent">
              Saad Bin Younas
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-4 text-center text-[13px] font-semibold uppercase tracking-[0.3em] text-ink-2 sm:text-sm md:text-base md:tracking-[0.35em]"
          >
            Full-Stack Engineer <span className="text-mint-500">{"//"}</span> Automation Engineer
          </motion.p>

          <motion.p
            {...fadeUp(0.6)}
            className="mt-5 max-w-xl text-center text-[15px] leading-relaxed text-ink-3 md:text-base"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.72)} className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-mint-600 hover:shadow-[0_14px_30px_-12px_rgba(15,133,96,0.8)]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-mint-500 hover:text-mint-700"
            >
              Let’s Talk
            </a>
          </motion.div>

          {/* Mobile-only resume link (the nav pill is hidden on small screens) */}
          <motion.a
            {...fadeUp(0.8)}
            href={profile.resumeUrl}
            download
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-2 underline decoration-mint-400 decoration-2 underline-offset-4 transition-colors hover:text-mint-700 sm:hidden"
          >
            Download Resume
            <DownloadIcon className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

      {/* Tech belt — echoes the reference's logo strip */}
      <motion.div {...fadeUp(0.9)} className="mt-14 md:mt-20">
        <TechMarquee />
      </motion.div>
    </section>
  );
}
