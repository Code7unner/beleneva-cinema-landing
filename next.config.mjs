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
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
      {
        source: '/ingest/flags',
        destination: 'https://eu.i.posthog.com/flags',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig
