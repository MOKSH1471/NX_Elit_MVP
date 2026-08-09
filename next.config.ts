import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.t2online.in",
      },
      {
        protocol: "https",
        hostname: "apis.t2online.in",
      },
      {
        protocol: "https",
        hostname: "cms.t2online.in",
      },
    ],
  },
};

export default nextConfig;
