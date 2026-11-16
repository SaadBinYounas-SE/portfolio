import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import PageIntro from "@/components/PageIntro";
import ProjectDiagram from "@/components/ProjectDiagram";
import TechLogo from "@/components/TechLogo";
import { getProject, projects, splitTitle } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.blurb };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const [name, kind] = splitTitle(p.title);
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const [nextName, nextKind] = splitTitle(next.title);
  const [first, ...body] = p.description;

  return (
    <article>
      <PageIntro
        size="lg"
        title={name}
        lead={kind ?? undefined}
        trail={
          <>
            <Link href="/work" className="link-rule">Work</Link> / {p.index}
          </>
        }
      />

      {/* facts */}
      <dl className="gutter grid gap-x-10 gap-y-6 bg-ice py-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Role", p.role],
          ["Year", p.year],
          ["Type", p.category],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="data text-rock">{k}</dt>
            <dd className="mt-1 text-lg font-medium tracking-[-0.01em]">{v}</dd>
          </div>
        ))}
        {p.links && (
          <div>
            <dt className="data text-rock">Links</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 text-lg font-medium tracking-[-0.01em]">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5">
                  <span className="link-rule">{l.label}</span>
                  <Arrow className="h-3.5 w-3.5" />
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>

      {/* architecture + outcomes */}
      <section aria-label="Architecture and outcomes" className="grid bg-granite text-snow [--diagram-bg:var(--color-granite)] lg:grid-cols-12">
        <div className="gutter aspect-[4/3] py-10 lg:col-span-7 lg:aspect-auto lg:h-[min(46vw,40rem)] lg:py-14">
          <ProjectDiagram variant={p.diagram} />
        </div>
        {p.metrics && (
          <ul className="border-t border-snow/15 lg:col-span-5 lg:flex lg:flex-col lg:border-l lg:border-t-0">
            {p.metrics.map((m) => (
              <li
                key={m}
                className="gutter flex flex-1 items-center border-b border-snow/15 py-6 text-[clamp(1.5rem,2.5vw,2.25rem)] font-medium leading-[1.05] tracking-[-0.03em] last:border-b-0 lg:px-9"
              >
                {m}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* the story */}
      <section className="gutter grid gap-x-10 gap-y-12 bg-snow py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-1">
          <p className="max-w-[40ch] text-[1.5rem] font-medium leading-[1.25] tracking-[-0.02em] md:text-[1.75rem]">{first}</p>
          <div className="mt-10 max-w-[66ch] space-y-6 text-lg">
            {body.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </div>

        <aside aria-label="Stack" className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-24">
            <h2 className="data text-rock">Built with</h2>
            <ul className="mt-3 border-t border-ink/25">
              {p.tech.map((t) => (
                <li key={t} className="flex items-center gap-3 border-b border-ink/25 py-3 font-medium">
                  <TechLogo name={t} className="h-[1.125rem] w-[1.125rem]" />
                  {t}
                </li>
              ))}
            </ul>
            <a href="#contact" className="group mt-8 flex items-center justify-between bg-jacket px-5 py-4 text-lg font-medium transition-colors duration-300 hover:bg-ink hover:text-snow">
              Discuss a project like this
              <Arrow className="h-5 w-5 rotate-90 transition-transform duration-500 ease-out-expo group-hover:translate-y-1" />
            </a>
          </div>
        </aside>
      </section>

      {/* onward */}
      <Link href={`/work/${next.slug}`} className="group gutter block bg-ice py-12 transition-colors duration-500 hover:bg-snow md:py-16">
        <span className="data text-rock">Next project / {next.index}</span>
        <span className="mt-4 flex items-end justify-between gap-6">
          <span>
            <span className="display block text-[clamp(2.75rem,8vw,8rem)]">{nextName}</span>
            {nextKind && <span className="mt-3 block text-xl font-medium tracking-[-0.015em] text-rock">{nextKind}</span>}
          </span>
          <Arrow className="mb-2 h-[clamp(2.5rem,6vw,6rem)] w-[clamp(2.5rem,6vw,6rem)] shrink-0 transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:translate-x-2" />
        </span>
      </Link>
    </article>
  );
}
