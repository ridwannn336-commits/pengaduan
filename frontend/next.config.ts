import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
   
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
      {
        protocol: "https",
        hostname: "*.onrender.com", // Jika pakai Render (ganti sesuai domain backend Anda jika berbeda)
      },
    ],
  },
};

export default nextConfig;