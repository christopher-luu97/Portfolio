/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  experimental: {
    /**https://stackoverflow.com/a/68062619 */ scrollRestoration: true,
  },
};
