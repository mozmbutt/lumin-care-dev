/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',
  assetPrefix: './',
  images:{
    unoptimized: true,
    path: './assets/images'
  }
}

module.exports = nextConfig
