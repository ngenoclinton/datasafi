import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn-icons-png.freepik.com',"img.freepik.com", "files.oaiusercontent.com","food.sasakonnect.net","i.bb.co", "ke.jumia.is","s.alicdn.com","via.placeholder.com", "placehold.co","www.w3.org","unsplash.com","images.unsplash.com","pelletsdata.co.ke"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
