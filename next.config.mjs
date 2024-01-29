/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.myanimelist.net',
			},
			{
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
};

export default nextConfig;
