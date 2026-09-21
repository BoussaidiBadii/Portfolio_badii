import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the user folder otherwise makes Next guess the wrong workspace root.
  turbopack: { root: process.cwd() },

  // The old Vercel URL is still served by the project; send it (and its SEO signals) to the real domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio-badii.vercel.app" }],
        destination: "https://badii.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
