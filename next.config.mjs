/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/app/:path*',
          destination: 'https://app.toolbird.io/a/:path*',
        },
      ],
    }
  }
};

export default nextConfig;
