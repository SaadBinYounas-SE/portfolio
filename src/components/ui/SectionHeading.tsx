import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, sub, align = "left", dark = false }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] ${
          dark ? "text-mint-300" : "text-mint-600"
        }`}
      >
        <span aria-hidden>{"//"}</span>
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            dark ? "text-paper/60" : "text-ink-3"
          } ${centered ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
