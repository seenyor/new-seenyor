/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elderlycare2.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
