"use client";

import { useState, type FormEvent } from "react";
import { profile, WEB3FORMS_ACCESS_KEY } from "@/data/profile";
import Reveal from "./ui/Reveal";
import {
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "./ui/icons";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[15px] text-paper placeholder-white/30 outline-none transition-all duration-300 focus:border-mint-400/70 focus:bg-white/[0.09]";

type Status = "idle" | "submitting" | "success" | "error";

const KEY_IS_PLACEHOLDER = WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Until a Web3Forms key is set, fall back to opening the visitor's mail app.
    if (KEY_IS_PLACEHOLDER) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || "your website"}`);
      const body = encodeURIComponent(`Hi Saad,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      // Submit as FormData (multipart) rather than JSON. multipart/form-data is a
      // CORS "simple" request, so the browser skips the preflight OPTIONS — which
      // Cloudflare (in front of Web3Forms) rejects with 403.
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("subject", `Portfolio inquiry from ${name}`);
      formData.append("from_name", "Saad Bin Younas — Portfolio");
      formData.append("botcheck", ""); // honeypot — bots fill this, humans don't

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-[4.5rem] pb-10 pt-10 md:pt-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-inkgreen px-6 py-14 text-paper sm:px-10 md:p-16">
            {/* ambient glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint-500/15 blur-[100px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-mint-700/20 blur-[110px]"
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left — pitch + details */}
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-mint-300">
                  <span aria-hidden>{"//"}</span> contact
                </span>
                <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-balance sm:text-4xl md:text-5xl">
                  Have a project in mind? Let’s build it — end to end.
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/60">
                  From the architecture docs to the production deploy — whether it’s a full-stack
                  platform, an automation pipeline, or an AI integration, I’d love to hear what
                  you’re building.
                </p>

                <ul className="mt-9 space-y-4">
                  <li>
                    <a href={`mailto:${profile.email}`} className="group flex items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-mint-300 transition-colors duration-300 group-hover:bg-mint-400 group-hover:text-inkgreen">
                        <MailIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-paper/40">
                          Email
                        </span>
                        <span className="text-[15px] font-semibold transition-colors group-hover:text-mint-300">
                          {profile.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-mint-300 transition-colors duration-300 group-hover:bg-mint-400 group-hover:text-inkgreen">
                        <PhoneIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-paper/40">
                          Phone
                        </span>
                        <span className="text-[15px] font-semibold transition-colors group-hover:text-mint-300">
                          {profile.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-mint-300">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-paper/40">
                        Location
                      </span>
                      <span className="text-[15px] font-semibold">{profile.location}</span>
                    </span>
                  </li>
                </ul>

                <div className="mt-9 flex gap-3">
                  {[
                    { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
                    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint-400 hover:bg-mint-400 hover:text-inkgreen"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right — form / success state */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
                {status === "success" ? (
                  <div className="flex h-full min-h-[19rem] flex-col items-center justify-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-mint-400 text-inkgreen">
                      <CheckIcon className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold">Message sent!</h3>
                    <p className="mt-2 max-w-xs text-[15px] text-paper/60">
                      Thanks for reaching out, {name || "there"} — it landed in my inbox and I’ll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-sm font-semibold text-mint-300 underline decoration-mint-400/50 underline-offset-4 transition-colors hover:text-mint-200"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper/50">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe"
                          className={inputClasses}
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper/50">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className={inputClasses}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper/50">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell me about your project…"
                          className={`${inputClasses} resize-none`}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-mint-400 py-3.5 font-display text-[15px] font-bold text-inkgreen transition-all duration-300 hover:bg-mint-300 hover:shadow-[0_14px_35px_-12px_rgba(92,183,143,0.6)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-inkgreen/30 border-t-inkgreen" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="mt-3 text-center text-sm text-red-300">
                        Something went wrong. Please email me directly at {profile.email}.
                      </p>
                    )}
                    <p className="mt-3.5 text-center text-xs text-paper/40">
                      {KEY_IS_PLACEHOLDER
                        ? "Opens your mail app — or add a Web3Forms key to receive messages in your inbox."
                        : "Your message is delivered straight to my inbox."}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
