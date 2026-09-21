import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile, seo, siteUrl } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

// Share images come from app/opengraph-image.tsx and app/twitter-image.tsx (file conventions).
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Boussaidi Badii",
    "Badii Boussaidi",
    "Full Stack Developer Tunisia",
    "Software Engineer Tunisia",
    "Next.js developer",
    "React developer",
    "Flutter developer",
    "freelance web developer Tunis",
    "website development Tunisia",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    title: seo.title,
    description: seo.shareDescription,
    firstName: "Badii",
    lastName: "Boussaidi",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.shareDescription,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#07080b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
