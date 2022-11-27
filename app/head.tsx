import { META } from '@/data/meta';

export default function Head() {
	const meta = {
		title: `${META.name}`,
		description: `${META.description}`,
		url: `${META.url}`
	};

	return (
		<>
			<meta charSet="utf-8" />
			<meta name="robots" content="follow, index" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<title>{meta.title}</title>
			<meta name="description" content={meta.description} />
			<link rel="canonical" href={meta.url} />

			<meta property="og:type" content="website" />
			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:url" content={meta.url} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@{meta.username}" />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:url" content={meta.url} />

			<link href="/static/icons/site.webmanifest" rel="manifest" />
			<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
			<link rel="manifest" href="/static/icons/site.webmanifest" />
			<meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
			<meta name="msapplication-TileColor" content="#39A5E8" />
			<meta name="theme-color" content="#39A5E8" />
			<meta content="#39A5E8" name="theme-color" />
			<meta content="#39A5E8" name="msapplication-TileColor" />
		</>
	);
}
