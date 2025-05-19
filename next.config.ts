import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "@/styles/main.scss";',
  },
  /* config options here */
};

export default nextConfig;
