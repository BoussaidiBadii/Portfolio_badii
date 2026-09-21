import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { siteUrl } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...Object.keys(caseStudies).map((slug) => ({
      url: `${siteUrl}/work/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
