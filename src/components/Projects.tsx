import { profile, projects } from "@/data/profile";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { ArrowUpRightIcon, GitHubIcon } from "./ui/icons";

export default function Projects() {
  return (
    <section id="work" className="section-anchor">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="selected work"
          title="Projects that carry real load"
          sub="Production systems with real users, real data, and real stakes — not weekend demos. Expand any project to see the architecture story and the full stack behind it."
        />

        <div className="mt-12 space-y-4 md:mt-14">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i < 4 ? i * 0.05 : 0}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-mint-500 hover:text-mint-700"
          >
            <GitHubIcon className="h-4.5 w-4.5" />
            More on GitHub
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
