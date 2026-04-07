import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/marketing-educacional",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
