/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.hashnode.com" },
      { hostname: "media2.dev.to" },
      { hostname: "dev-to-uploads.s3.us-east-2.amazonaws.com" },
      { hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
