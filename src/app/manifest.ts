import type { MetadataRoute } from "next";
import { profile, seo } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.title,
    short_name: profile.name,
    description: seo.shareDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#07080b",
    theme_color: "#07080b",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
