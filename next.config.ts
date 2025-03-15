import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.*"
      }
      // "cdn-icons-png.flaticon.com",
      // "wallpapershome.com"
    ]
  }
};

export default nextConfig;
