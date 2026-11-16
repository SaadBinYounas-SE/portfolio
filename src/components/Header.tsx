"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import Mark from "./Mark";
import Arrow from "./Arrow";

/**
 * Fixed header. Transparent over the light block every page opens with; once the
 * visitor scrolls it becomes a dark bar that tucks away on the way down and
 * returns on the way up. The red Contact control is always the last thing in it.
 */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 72);
      setHidden(y > 480 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu: lock the page behind it, close on Escape, move focus inside.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <>
      <a
        href="#main"
        className="data fixed left-2 top-2 z-[80] -translate-y-20 bg-ink px-3 py-2 text-snow focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color] duration-500 ease-out-expo ${
          dark ? "bg-granite text-snow" : "text-ink"
        } ${hidden && !open ? "-translate-y-full" : ""}`}
      >
        <div className={`gutter flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-14" : "h-[4.5rem] md:h-24"}`}>
          <Link href="/" className="group flex items-center gap-2.5" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
            <Mark className="h-6 w-6 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5" />
            <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">{profile.name}</span>
          </Link>

          <nav aria-label="Main" className="flex items-center gap-5 md:gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks
                .filter((l) => l.href !== "/contact")
                .map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                      className="link-rule pb-0.5 text-[0.9375rem] font-medium aria-[current=page]:bg-[length:100%_1px]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group flex h-9 items-center gap-2 bg-jacket px-3.5 text-[0.9375rem] font-medium text-ink transition-colors duration-300 hover:bg-snow"
            >
              Contact
              <Arrow className="h-3.5 w-3.5 rotate-90 transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5" />
            </a>

            <button
              type="button"
              className="flex h-9 items-center gap-2.5 md:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden className="relative block h-2.5 w-6">
                <span className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-transform duration-300 ${open ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-300 ${open ? "w-6 -translate-y-1 -rotate-45" : "w-4"}`} />
              </span>
              <span className="data">{open ? "Close" : "Menu"}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Small-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-granite text-snow transition-[clip-path] duration-700 ease-in-out-quart md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <ul className="gutter mt-28 flex flex-col">
          {[{ label: "Home", href: "/" }, ...navLinks].map((l, i) => (
            <li key={l.href} className="border-b border-snow/15">
              <Link
                ref={i === 0 ? firstLink : undefined}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display flex items-baseline justify-between py-4 text-[clamp(2.75rem,13vw,4.5rem)]"
              >
                {l.label}
                <span className="data text-mist">0{i + 1}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="gutter data flex flex-wrap gap-x-6 gap-y-2 pb-8 text-mist">
          <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume (PDF)</a>
        </div>
      </div>
    </>
  );
}
