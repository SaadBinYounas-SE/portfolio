"use client";

import { usePathname } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { getProject, profile, splitTitle, WEB3FORMS_ACCESS_KEY } from "@/data/profile";
import Arrow from "./Arrow";

type Status = "idle" | "sending" | "sent" | "failed";

const topics = ["A new project", "A role on your team", "Automation or AI", "Something else"] as const;

/**
 * The red block every page ends with. It is rendered once, in the root layout,
 * so no route can finish anywhere else. On a case-study page it picks up the
 * project the visitor was just reading.
 */
export default function ContactBlock() {
  const pathname = usePathname();
  const uid = useId();
  const project = pathname.startsWith("/work/") ? getProject(pathname.split("/")[2] ?? "") : undefined;
  const projectName = project ? splitTitle(project.title)[0] : null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof topics)[number]>(topics[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      // multipart/form-data keeps this a CORS "simple" request, so the browser
      // sends no preflight (Web3Forms' edge rejects OPTIONS with 403).
      const data = new FormData();
      data.append("access_key", WEB3FORMS_ACCESS_KEY);
      data.append("name", name);
      data.append("email", email);
      data.append("topic", topic);
      data.append("message", message);
      data.append("sent_from", pathname);
      data.append("subject", `${topic} — ${name} (portfolio)`);
      data.append("from_name", "Saad Bin Younas — Portfolio");
      data.append("botcheck", "");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error("rejected");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <section id="contact" aria-labelledby={`${uid}-h`} className="relative -scroll-mt-14 bg-jacket text-ink">
      <div className="gutter grid gap-x-10 gap-y-12 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id={`${uid}-h`} className="display text-[clamp(3.75rem,11.5vw,11rem)]">
            Let’s talk<span aria-hidden>/</span>
          </h2>
          <p className="mt-8 max-w-[34ch] text-[1.375rem] font-medium leading-[1.25] tracking-[-0.015em] md:text-[1.625rem]">
            {projectName
              ? `Planning something like ${projectName}? Tell me where it stands and what it needs to do.`
              : "A platform to build, a workflow to automate, or a seat to fill on your team. Tell me what you need."}
          </p>

          <dl className="mt-12 max-w-md border-t border-ink/40 text-[0.9375rem]">
            {[
              { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
              { k: "Phone", v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { k: "LinkedIn", v: "saad-bin-younas", href: profile.socials.linkedin },
              { k: "GitHub", v: "SaadBinYounas-SE", href: profile.socials.github },
            ].map((row) => (
              <div key={row.k} className="flex items-baseline justify-between gap-6 border-b border-ink/40 py-3">
                <dt className="data">{row.k}</dt>
                <dd className="min-w-0">
                  <a
                    href={row.href}
                    className="link-rule break-all font-medium"
                    {...(row.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {row.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          {status === "sent" ? (
            <div role="status" className="flex h-full min-h-72 flex-col justify-between border-t-[1.5px] border-ink pt-6">
              <div>
                <p className="display text-[clamp(2.5rem,5vw,4rem)]">Message sent.</p>
                <p className="mt-5 max-w-sm text-lg">
                  It’s in my inbox. I’ll reply by email.
                </p>
              </div>
              <button type="button" onClick={() => setStatus("idle")} className="link-rule mt-10 self-start font-medium">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={send} className="space-y-8" aria-describedby={status === "failed" ? `${uid}-err` : undefined}>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-name`} className="data block">Your name</label>
                  <input
                    id={`${uid}-name`}
                    className="field"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor={`${uid}-email`} className="data block">Email</label>
                  <input
                    id={`${uid}-email`}
                    className="field"
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <fieldset>
                <legend className="data">What’s it about</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <label
                      key={t}
                      className="cursor-pointer border-[1.5px] border-ink px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200 hover:bg-ink/10 has-[:checked]:bg-ink has-[:checked]:text-jacket has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink"
                    >
                      <input
                        type="radio"
                        name="topic"
                        value={t}
                        checked={topic === t}
                        onChange={() => setTopic(t)}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor={`${uid}-msg`} className="data block">Message</label>
                <textarea
                  id={`${uid}-msg`}
                  className="field min-h-32 resize-y"
                  name="message"
                  rows={4}
                  required
                  placeholder={projectName ? `What you’re building, and how ${projectName} relates` : "What you’re building, timeline, anything useful"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* honeypot */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              {status === "failed" && (
                <p id={`${uid}-err`} role="alert" className="border-[1.5px] border-ink px-4 py-3 text-[0.9375rem] font-medium">
                  The message didn’t go through. Check your connection and send again, or email{" "}
                  <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-between bg-ink px-6 py-5 text-xl font-medium text-snow transition-colors duration-300 hover:bg-snow hover:text-ink disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <Arrow className="h-6 w-6 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
