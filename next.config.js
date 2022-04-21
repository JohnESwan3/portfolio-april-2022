/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  images: {
    domains: ['kitwind.io', 'cdn.sanity.io', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}
