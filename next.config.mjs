/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/app/:path*',
          destination: 'https://app.toolbird.io/app/:path*',
        },
      ],
    }
  }
};

export default nextConfig;
