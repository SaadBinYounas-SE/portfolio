import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import ContactBlock from "@/components/ContactBlock";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import "./globals.css";

const grotesk = localFont({
  src: "./fonts/HostGrotesk.woff2",
  variable: "--font-grotesk",
  weight: "300 800",
  display: "swap",
});

const martian = localFont({
  src: "./fonts/MartianMono.woff2",
  variable: "--font-martian",
  weight: "100 800",
  display: "swap",
});

const title = "Saad Bin Younas — Full-Stack & Automation Engineer";
const description =
  "Software engineer working across full-stack development, automation engineering, and AI integrations — owning systems end-to-end, from database architecture and design documentation through production code, deployment, and team review.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Saad Bin Younas" },
  description,
  keywords: [
    "Saad Bin Younas",
    "Full-Stack Engineer",
    "Automation Engineer",
    "React",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Airtable",
    "N8N",
    "Make.com",
    "Retell AI",
    "Lahore",
  ],
  openGraph: {
    title,
    description:
      "I own systems end-to-end — from database architecture and design docs to production code, deployment, and team review.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#eef0ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${martian.variable} antialiased`}>
      <body id="top" className="flex min-h-dvh flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Motion>{children}</Motion>
        </main>
        {/* Every route ends here. */}
        <ContactBlock />
        <Footer />
        <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.11]" />
      </body>
    </html>
  );
}
