/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  pageExtensions: ["tsx", "api.ts"],
  output: "standalone",
};

module.exports = nextConfig;
