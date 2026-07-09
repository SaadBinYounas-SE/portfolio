import { marqueeItems } from "@/data/profile";

/** Infinite belt of the technologies Saad ships with — echoes Sewood's logo strip. */
export default function TechMarquee() {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink/45 transition-colors hover:text-ink md:text-xl">
            {item}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint-400/80" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="border-y border-ink/8 bg-white/45 backdrop-blur-sm">
      <div className="marquee-mask overflow-hidden py-5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
