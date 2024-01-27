/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.myanimelist.net',
			},
		],
	},
};

export default nextConfig;
