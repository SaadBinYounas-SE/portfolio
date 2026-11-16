import type { Metadata } from "next";
import LocalTime from "@/components/LocalTime";
import PageIntro from "@/components/PageIntro";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Saad Bin Younas about a platform, an automation pipeline or a role on your team.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact" lead="The form below lands in my inbox. A few things that make the first reply useful." />

      <section aria-label="Before you write" className="grid bg-ice md:grid-cols-3">
        {[
          {
            h: "What to include",
            p: "What you’re building, where it stands today, and what it needs to do. A rough timeline helps. A finished spec doesn’t have to exist yet.",
          },
          {
            h: "What happens next",
            p: "I reply by email, usually within a day or two, with questions or a time to talk. If it’s a fit, I write up scope and approach before any work starts.",
          },
        ].map((b) => (
          <div key={b.h} className="gutter border-b border-ink/25 py-9 md:border-b-0 md:border-r md:px-9 md:py-12">
            <h2 className="text-xl font-medium tracking-[-0.02em]">{b.h}</h2>
            <p className="mt-3 max-w-[44ch] text-[0.9375rem]">{b.p}</p>
          </div>
        ))}
        <div className="gutter py-9 md:px-9 md:py-12">
          <h2 className="text-xl font-medium tracking-[-0.02em]">Where I am</h2>
          <p className="mt-3 text-[0.9375rem]">
            {profile.location}. It’s <LocalTime /> here now. I work with clients across time zones and overlap with US and
            European hours.
          </p>
        </div>
      </section>
    </>
  );
}
