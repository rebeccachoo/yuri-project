import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { serverActions: { bodySizeLimit: "3mb" } },
  images: {
    remotePatterns: process.env.NEXT_PUBLIC_SUPABASE_URL
      ? [new URL("/storage/v1/object/public/partner-logos/**", process.env.NEXT_PUBLIC_SUPABASE_URL)]
      : [],
  },
};

export default nextConfig;
