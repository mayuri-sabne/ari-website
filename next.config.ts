import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    // 👇 Allow backend images served from your API
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**",
      },
      // ✅ Add production backend domain here later
      {
        protocol: "https",
        hostname: "api.aireviewinsider.com",
        pathname: "/uploads/**",
      },
    ],
  },};

export default nextConfig;
