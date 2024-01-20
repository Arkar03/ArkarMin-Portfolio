/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.alias.canvas = false;

    return config;
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
