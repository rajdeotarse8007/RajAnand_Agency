/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kunshmasale.com",
      },
      {
        protocol: "https",
        hostname: "zofffoods.com",
      },
      {
        protocol: "https",
        hostname: "everestspices.com",
      },
    ],
  },
};

module.exports = nextConfig;
