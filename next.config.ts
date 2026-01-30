import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Use repository name as base path for GitHub Pages
  basePath: isGithubActions ? '/ohdoughweb' : '',
  // Disable server-side image optimization for static export
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/ohdoughweb' : '',
  },
};

export default nextConfig;
