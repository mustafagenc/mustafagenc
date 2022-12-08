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
			'api.raindrop.io',
			'eu2-sensible-mollusk-31210.upstash.io',
			'v5.airtableusercontent.com',
			'api.airtable.com'
		]
	},
	staticPageGenerationTimeout: 10,
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['sentry']
	}
});
