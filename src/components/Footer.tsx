import { navLinks, profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-ink/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 md:flex-row md:justify-between md:gap-6">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-mint-500 font-display text-base font-black text-paper">
            S
          </span>
          <p className="text-sm text-ink-3">
            © {new Date().getFullYear()} <span className="font-semibold text-ink">{profile.name}</span> ·{" "}
            {profile.location}
          </p>
        </div>

        {/* Quick links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-ink-3 transition-colors hover:text-mint-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {[
            { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
            { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
            { href: profile.socials.email, label: "Email", Icon: MailIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              aria-label={label}
              className="text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-mint-600"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-ink-3/70">
        Designed & built with Next.js, Tailwind CSS & Framer Motion
      </p>
    </footer>
  );
}
