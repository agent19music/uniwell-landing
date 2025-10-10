import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-abe4a6405e724602a7fac9bf761e290c.r2.dev',
      },
    ],
  },
};

export default nextConfig;
