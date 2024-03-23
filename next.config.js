/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  distDir: "_next",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
