import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Use repository name as base path for GitHub Pages
  basePath: isProd ? '/ohdoughweb' : '',
  // Disable server-side image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
