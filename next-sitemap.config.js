/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || 'https://mustafagenc.info',
	generateRobotsTxt: true,
	generateIndexSitemap: false
};

module.exports = config;
