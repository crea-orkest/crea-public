import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    // typedRoutes: true,
    // serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },
  webpack: (config) => {
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
        })
      )
    }
    return config
  },
  env: {
    production: process.env.production,
  },
  rewrites: () =>
    Promise.resolve({
      beforeFiles: [
        {
          source: '/graphql',
          destination: `https://${process.env.production === 'true' ? 'current' : 'dev'}--crea-orkest.apollographos.net/graphql`,
        },
      ],
    }),
  headers: () =>
    Promise.resolve([
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value: 'fullscreen=(self)',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'unsafe-inline' 'self' ; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com; manifest-src https://www.creaorkest.org/manifest.json; img-src 'self' 'unsafe-inline' data: https://maps.gstatic.com https://maps.googleapis.com https://i.ytimg.com https://i.vimeocdn.com; connect-src 'self' https://maps.googleapis.com; script-src-elem https://static.cloudflareinsights.com https://maps.googleapis.com 'self' 'unsafe-inline'; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://www.youtube.com https://player.vimeo.com https://creaorkest.us5.list-manage.com`,
          },
        ],
      },
    ]),
}

export default nextConfig
