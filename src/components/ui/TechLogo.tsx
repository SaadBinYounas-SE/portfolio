import { techIcons } from "@/data/techIcons";

/**
 * Renders a technology's official brand logo (from the embedded simple-icons
 * paths) in its brand colour, or a neutral cube glyph for tech without a logo.
 */
export default function TechLogo({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const icon = techIcons[name];

  if (icon) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill={icon.hex} aria-hidden>
        <path d={icon.path} />
      </svg>
    );
  }

  // Fallback: brand-neutral cube for logos not in the icon set (e.g. SQL, Oracle).
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z"
        stroke="var(--color-mint-600)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 2.5V21.5M3.5 7l8.5 4.75L20.5 7" stroke="var(--color-mint-400)" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
