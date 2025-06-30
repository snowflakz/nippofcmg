/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  // Required for hosting on a subdirectory in cPanel
  basePath: process.env.NODE_ENV === 'production' ? '/nippon-site' : '',
  // Disable image optimization since cPanel doesn't support it
  images: {
    unoptimized: true,
  },
}

export default nextConfig
