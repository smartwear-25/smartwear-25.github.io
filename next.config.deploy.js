/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/smartwear2025',
  basePath: '/smartwear2025',
}

module.exports = nextConfig 