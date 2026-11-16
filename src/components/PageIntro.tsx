import type { ReactNode } from "react";

/** The light block every inner page opens with: one oversized word and a line under it. */
export default function PageIntro({
  title,
  lead,
  trail,
  size = "xl",
  children,
}: {
  title: string;
  lead?: string;
  /** Small line above the title — where this page sits in the site. */
  trail?: ReactNode;
  size?: "xl" | "lg";
  children?: ReactNode;
}) {
  return (
    <header className="bg-snow">
      <div className="gutter pb-12 pt-32 md:pb-16 md:pt-44">
        {trail && <p className="data mb-6 animate-fade text-rock">{trail}</p>}
        <h1
          className={`display ${
            size === "xl" ? "text-[clamp(4.5rem,19vw,19rem)]" : "text-[clamp(3rem,10.5vw,10.5rem)]"
          }`}
        >
          <span className="line-mask">
            <span className="block animate-rise">{title}</span>
          </span>
        </h1>
        {lead && (
          <p className="mt-8 max-w-[34ch] animate-fade text-[1.5rem] font-medium leading-[1.18] tracking-[-0.02em] [animation-delay:350ms] md:mt-10 md:text-[2rem]">
            {lead}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
