const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['i.imgur.com'],
	},
	transpilePackages: ['react-tweet'],
}
module.exports = withContentlayer(nextConfig)
