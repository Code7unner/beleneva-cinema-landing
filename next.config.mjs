/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/beleneva-cinema-landing',
  assetPrefix: '/beleneva-cinema-landing/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
