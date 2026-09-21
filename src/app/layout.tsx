import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const title = "Boussaidi Badii | Software Engineer";
const description =
  "Boussaidi Badii, Software Engineer and Full Stack Developer specializing in React, Next.js, Node.js, Spring Boot, Symfony and Flutter.";
const shareDescription = "Full Stack Developer building fast, polished web & mobile products.";
const shareImage = { url: "/profile.png", alt: profile.name };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    title,
    description: shareDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
    images: [shareImage],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#07080b" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Manouba", addressCountry: "TN" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: profile.stack,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
