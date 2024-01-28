/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite-react/lib/**/*.js',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				main: {
					primary: '#EEEEEE',
					accent: '#FFC639',
					secondary: '#393E46',
					dark: '#222831',
				},
			},
			keyframes: {
				animationPing: {
					'0%, 100%': {
						opacity: 1,
					},
					'50%': {
						opacity: 0.5,
					},
				},
			},
			animation: {
				ping: 'animationPing 1s ease-in-out infinite',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
};
