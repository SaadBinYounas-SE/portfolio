import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Bin Younas — Full-Stack Engineer & Automation Engineer",
  description:
    "Software engineer working across full-stack development, automation engineering, and AI integrations — owning systems end-to-end, from database architecture and design documentation through production code, deployment, and team review.",
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
    title: "Saad Bin Younas — Full-Stack Engineer & Automation Engineer",
    description:
      "I own systems end-to-end — from database architecture and design docs to production code, deployment, and team review.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Paper grain over everything — pointer-transparent, very low opacity */}
        <div aria-hidden className="noise pointer-events-none fixed inset-0 z-[70] opacity-[0.16]" />
      </body>
    </html>
  );
}
