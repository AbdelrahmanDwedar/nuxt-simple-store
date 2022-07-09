/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
}
