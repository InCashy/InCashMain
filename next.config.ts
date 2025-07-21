import type { NextConfig } from 'next';

const config: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/c15t/:path*',
				destination: `${process.env.NEXT_PUBLIC_C15T_URL}/:path*`,
			},
		];
	},
};

export default config;
