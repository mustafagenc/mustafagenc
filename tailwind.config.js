const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	//prefix: 'mg-',
	//important: true,
	darkMode: 'class', // "class",
	mode: 'jit',
	content: [
		'./public/**/*.html',
		'./public/**/*.{js,jsx,ts,tsx,vue}',
		'./src/app/**/*.{js,jsx,ts,tsx,vue}',
		'./src/pages/**/*.{js,jsx,ts,tsx,vue}',
		'./src/components/**/*.{js,jsx,ts,tsx,vue}',
		'./src/data/**/*.{md,mdx}'		
	],
	safelist: [
		{
			pattern: /grid-cols-(2|3|4|5|6)/, // this config for blog post photo grid
			variants: ['sm', 'md', 'lg', 'xl']
		}
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inconsolata)', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp')
	]
};
