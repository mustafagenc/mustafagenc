const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */

module.exports = withContentlayer({
	reactStrictMode: true,
	images: {
		domains: [
			'images.unsplash.com',
			'dl.airtable.com',
			's.gravatar.com',
			'api.spotify.com',
			'accounts.spotify.com',
			'i.scdn.co',
			'api.raindrop.io'
		]
	},
	staticPageGenerationTimeout: 10,
	experimental: {
		appDir: true
	}
});
