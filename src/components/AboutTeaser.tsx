import Link from "next/link";
import { about } from "@/data/profile";
import Arrow from "./Arrow";

export default function AboutTeaser() {
  // "I turn ambiguous problems into production systems. I architect …" → lead sentence + the rest
  const [lead, ...rest] = about.paragraphs[1].split(". ");

  return (
    <section aria-labelledby="about-h" className="bg-ice">
      <div className="gutter grid gap-x-10 gap-y-14 pb-16 pt-20 md:pt-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="about-h" className="max-w-[16ch] text-[clamp(2.5rem,5.4vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.04em]">
            {lead}.
          </h2>
          <p className="mt-8 max-w-[56ch] text-lg">{rest.join(". ")}</p>
          <p className="mt-4 max-w-[56ch] text-lg">{about.paragraphs[2]}</p>
          <Link href="/about" className="group mt-9 inline-flex items-center gap-2 text-lg font-medium">
            <span className="link-rule">Experience, stack and education</span>
            <Arrow className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <dl className="self-end border-b border-ink/35 lg:col-span-4 lg:col-start-9">
          {about.stats.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-6 border-t border-ink/35 py-4">
              <dd className="order-1 text-[2.75rem] font-medium leading-none tracking-[-0.04em]">{s.value}</dd>
              <dt className="order-2 max-w-[20ch] text-right text-[0.9375rem] leading-snug">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
