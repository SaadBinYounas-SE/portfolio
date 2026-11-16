import { marqueeItems } from "@/data/profile";
import TechLogo from "./TechLogo";

/** The daily stack, drifting past. Pauses under the pointer; static for reduced motion. */
export default function LogoBelt() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {marqueeItems.map((name) => (
        <li key={name} className="flex items-center gap-3 border-r border-ink/20 px-7 py-5 md:px-9">
          <TechLogo name={name} className="h-5 w-5" />
          <span className="data whitespace-nowrap">{name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Tools used every day" className="group overflow-hidden border-b border-ink/20 bg-snow text-ink">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
