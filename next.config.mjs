import { imageHosts } from "./image-hosts.config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // Pins the workspace root to this project folder so Next.js stops
  // guessing based on other lockfiles it finds elsewhere on the machine
  // (e.g. C:\Users\bala\package-lock.json).
  outputFileTracingRoot: import.meta.dirname,

  productionBrowserSourceMaps: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    qualities: [75, 85, 100],
  },
};

export default nextConfig;