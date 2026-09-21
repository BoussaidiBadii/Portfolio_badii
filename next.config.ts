import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the user folder otherwise makes Next guess the wrong workspace root.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
