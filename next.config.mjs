/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
      // {
      //   protocol: 'https',
      //   hostname: process.env.NEXT_PUBLIC_IMAGE_URL
      //     ? `${process.env.NEXT_PUBLIC_IMAGE_URL.replace('https://', '')}`
      //     : '',
      // },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
  },
  trailingSlash: true,
};

export default {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: `${process.env.NEXT_PUBLIC_FRONT_URL.replace(
              'https://',
              'www.',
            )}`,
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_FRONT_URL}/:path*`,
        permanent: true, // Set to true for permanent redirects (301)
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: `${process.env.NEXT_PUBLIC_FRONT_URL.replace(
              'https://',
              'https://www.',
            )}`,
          },
        ],
        destination: `${process.env.NEXT_PUBLIC_FRONT_URL}/:path*`,
        permanent: true, // Set to true for permanent redirects (301)
      },
    ];
  },
};
