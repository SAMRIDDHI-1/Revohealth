// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'standalone',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add exportPathMap for static export
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      // Add more routes as necessary
    };
  },
};

module.exports = nextConfig;

