import { techIcons } from "@/data/techIcons";

/**
 * A technology's brand logo, drawn in the current text colour so every logo
 * belongs to the block it sits on. Tech without a logo gets a neutral cube.
 */
export default function TechLogo({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const icon = techIcons[name];

  if (icon) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z" />
      <path d="M12 21.5V11.75M3.5 7l8.5 4.75L20.5 7" />
    </svg>
  );
}
