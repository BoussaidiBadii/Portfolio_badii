import type { MetadataRoute } from "next";
import { profile, siteUrl } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}${profile.cv}`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
