import { marqueeItems } from "@/data/profile";
import TechLogo from "./ui/TechLogo";

/** Infinite belt of brand logos for the technologies Saad ships with. */
export default function TechMarquee() {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {marqueeItems.map((item) => (
        <span key={item} className="flex shrink-0 items-center gap-2.5">
          <TechLogo name={item} className="h-6 w-6 md:h-7 md:w-7" />
          <span className="whitespace-nowrap font-display text-base font-semibold tracking-tight text-ink/55 md:text-lg">
            {item}
          </span>
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
