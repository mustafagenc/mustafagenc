import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import cx from 'classnames';

export default class MyDocument extends NextDocument {
	static getInitialProps(ctx) {
		return NextDocument.getInitialProps(ctx);
	}

	render() {
		return (
			<Html lang="tr">
				<Head>
					<link
						rel="preload"
						href="/fonts/TiemposTextWeb-Regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/TiemposTextWeb-RegularItalic.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>

					<meta charSet="utf-8" />
					<meta name="robots" content="follow, index" />

					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/icons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/icons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/icons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/static/icons/site.webmanifest" />
					<meta
						name="msapplication-config"
						content="/static/icons/browserconfig.xml"
					/>
					<meta name="msapplication-TileColor" content="#39A5E8" />
					<meta name="theme-color" content="#39A5E8" />
				</Head>

				<body
					className={cx(
						'bg-white text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400 '
					)}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
