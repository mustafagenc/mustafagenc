const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	//prefix: 'mg-',
	//important: true,
	darkMode: 'media', // "class",
	content: ['./components/**/*.tsx', './app/**/*.tsx'],
	safelist: [
		{
			pattern: /grid-cols-(2|3|4|5|6)/, // this config for blog post photo grid
			variants: ['sm', 'md', 'lg', 'xl']
		}
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans]
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
