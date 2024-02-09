/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.licdn.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
      {
        protocol: "https",
        hostname: "zenprospect-production.s3.amazonaws.com",
      },
    ],
  },
  async rewrites() {

    return [
      {
        source: "/api2/:match*",
        destination: `${process.env["API_BASE_URL"]}/v1/:match*`,
      },
      {
        source: "/api/:match*",
        destination: `${process.env["API_BASE_URL"]}/v1/:match*`,
      },
    ];
  },
  reactStrictMode: true,
  // swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
