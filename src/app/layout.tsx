import type { Metadata } from "next";
import { Manrope, Fragment_Mono, Fira_Mono } from "next/font/google";
import { NoiseDriftBackground } from "@/components/NoiseDriftBackground";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Skill Flow – Universal AI Agent Skills Management",
  description:
    "Install, manage, and share skills across every major coding agent — Claude Code, Cursor, Copilot, and more. Unified skill management for professional developers.",
  keywords: [
    "AI coding agents",
    "skill management",
    "Claude Code",
    "Cursor",
    "GitHub Copilot",
    "developer tools",
    "AI agents",
    "coding assistant",
  ],
  authors: [{ name: "VintLin" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Skill Flow – Universal AI Agent Skills Management",
    description:
      "Install, manage, and share skills across every major coding agent. Unified skill management for professional developers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Flow – Universal AI Agent Skills Management",
    description:
      "Install, manage, and share skills across every major coding agent. Unified skill management for professional developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${fragmentMono.variable} ${firaMono.variable} min-h-full flex flex-col antialiased`}
      >
        <NoiseDriftBackground />
        {children}
      </body>
    </html>
  );
}
