import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-badii.vercel.app"),
  title: "Boussaidi Badii | Software Engineer",
  description:
    "Boussaidi Badii, Software Engineer and Full Stack Developer specializing in React, Next.js, Node.js, Spring Boot, Symfony and Flutter.",
  openGraph: {
    title: "Boussaidi Badii | Software Engineer",
    description: "Full Stack Developer building fast, polished web & mobile products.",
    images: ["/profile.png"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#07080b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
