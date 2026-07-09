import SkillsAccordion from "./SkillsAccordion";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-anchor">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="tech stack"
          title="Tools I ship with"
          sub="Grouped the way I actually reach for them — expand any category to see the stack, logos and all."
        />

        <Reveal className="mt-12 md:mt-14">
          <SkillsAccordion />
        </Reveal>
      </div>
    </section>
  );
}
