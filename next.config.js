/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // The About page was merged into the homepage; send old links/bookmarks to the founder section.
  async redirects() {
    return [
      { source: '/about', destination: '/#founder', permanent: true },
    ]
  },
}

module.exports = nextConfig
