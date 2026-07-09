"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "@/data/profile";
import { DownloadIcon } from "./ui/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.65, 0.28, 0.99] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-ink/5 bg-paper/85 shadow-[0_8px_30px_-18px_rgba(16,19,17,0.25)] backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem]">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mint-500 font-display text-lg font-black text-paper transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            S
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            saad<span className="text-mint-500">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-mint-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV — Sewood's black pill */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-mint-600 hover:shadow-[0_10px_25px_-10px_rgba(15,133,96,0.7)] sm:inline-flex"
          >
            Download CV
            <DownloadIcon className="h-4 w-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-paper md:hidden"
          >
            <span
              className={`absolute h-[2px] w-4.5 rounded-full bg-ink transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-4.5 rounded-full bg-ink transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mb-4 rounded-2xl border border-ink/8 bg-paper p-5 shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink-2 transition-colors hover:bg-mint-50 hover:text-mint-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
            >
              Download CV
              <DownloadIcon className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
