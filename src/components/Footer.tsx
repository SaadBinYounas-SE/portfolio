import Link from "next/link";
import { navLinks, profile } from "@/data/profile";
import Mark from "./Mark";
import LocalTime from "./LocalTime";

export default function Footer() {
  return (
    <footer className="bg-ink text-snow">
      <div className="gutter grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Mark className="h-6 w-6" />
            <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-[0.9375rem] text-mist">
            Full-stack and automation engineer. Systems owned from the first scoping call to the production deploy.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2 text-[0.9375rem]">
            <li><Link className="link-rule" href="/">Home</Link></li>
            {navLinks.map((l) => (
              <li key={l.href}><Link className="link-rule" href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-2 text-[0.9375rem] md:col-span-2">
          <li><a className="link-rule" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a className="link-rule" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="link-rule" href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume (PDF)</a></li>
        </ul>

        <dl className="data space-y-1 text-mist md:col-span-2 md:text-right">
          <dt className="sr-only">Location</dt>
          <dd>{profile.location}</dd>
          <dt className="sr-only">Local time</dt>
          <dd><LocalTime /></dd>
        </dl>
      </div>

      <div className="gutter data flex flex-wrap items-center justify-between gap-3 border-t border-snow/15 py-5 text-mist">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className="link-rule text-snow">Back to top</a>
      </div>
    </footer>
  );
}
