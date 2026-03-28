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
  title: "Midlife Engineering – Sound therapy for a harmonious mind",
  description:
    "A space where calm meets ambient clarity, inviting you to pause, breathe, and explore sound with harmony, and a slower rhythm.",
  keywords: [
    "ambient music",
    "sound therapy",
    "mindfulness",
    "relaxation",
    "stress relief",
    "sleep",
  ],
  authors: [{ name: "1042 Studio" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Midlife Engineering – Sound therapy for a harmonious mind",
    description:
      "A space where calm meets ambient clarity, inviting you to pause, breathe, and explore sound with harmony.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midlife Engineering – Sound therapy for a harmonious mind",
    description:
      "A space where calm meets ambient clarity, inviting you to pause, breathe, and explore sound with harmony.",
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
