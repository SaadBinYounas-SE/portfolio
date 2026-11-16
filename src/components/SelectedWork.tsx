import Link from "next/link";
import { projects, splitTitle } from "@/data/profile";
import Arrow from "./Arrow";
import ProjectDiagram from "./ProjectDiagram";

export default function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" aria-labelledby="work-h" className="-scroll-mt-14 bg-granite text-snow [--diagram-bg:var(--color-granite)]">
      <div className="gutter flex flex-wrap items-end justify-between gap-x-10 gap-y-6 pb-10 pt-20 md:pb-14 md:pt-28">
        <h2 id="work-h" className="display text-[clamp(3.25rem,9vw,9rem)]">Selected work</h2>
        <Link href="/work" className="group mb-2 flex items-center gap-2 text-lg font-medium">
          <span className="link-rule">All {projects.length} projects</span>
          <Arrow className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <ul>
        {featured.map((p) => {
          const [name, kind] = splitTitle(p.title);
          return (
            <li key={p.slug} className="border-t border-snow/15">
              <Link
                href={`/work/${p.slug}`}
                className="group gutter grid gap-x-10 gap-y-8 py-10 transition-colors duration-500 hover:bg-ink focus-visible:bg-ink md:py-14 lg:grid-cols-12"
              >
                <div className="lg:col-span-7">
                  <p className="data flex flex-wrap gap-x-4 text-mist">
                    <span>{p.index}</span>
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </p>
                  <h3 className="mt-4 flex items-start gap-3 text-[clamp(2.25rem,4.8vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.04em]">
                    {name}
                    <Arrow className="mt-[0.12em] h-[0.5em] w-[0.5em] shrink-0 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
                  </h3>
                  {kind && <p className="mt-2 text-xl font-medium tracking-[-0.015em] text-mist">{kind}</p>}
                  <p className="mt-6 max-w-[58ch] text-snow/85">{p.blurb}</p>
                  {p.metrics && (
                    <ul className="data mt-7 flex flex-wrap gap-2">
                      {p.metrics.map((m) => (
                        <li key={m} className="border border-snow/25 px-2.5 py-1.5">{m}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="relative aspect-[4/3] border border-snow/15 p-5 text-snow transition-colors duration-500 group-hover:border-snow/40 sm:p-8 lg:col-span-5">
                  <ProjectDiagram variant={p.diagram} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
