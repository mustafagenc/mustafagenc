'use client';
import '@/styles/globals.css';
import '@upstash/claps/style.css';

import Footer from '@/components/footer';
import Navigation from '@/components/nav';
import { Inconsolata } from '@next/font/google';
import mailgo from 'mailgo';

import GoogleAnalytics from '@/components/analytics';
import { useEffect } from 'react';
import AnalyticsWrapper from './analytics';

const mailgoConfig = {
	dark: true
};
const inconsolata = Inconsolata({
	variable: '--font-inconsolata',
	display: 'swap',
	style: 'normal',
	subsets: ['latin-ext']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		mailgo(mailgoConfig);
	}, []);

	return (
		<html lang="tr" className={`scroll-smooth ${inconsolata.variable} dark`}>
			<body className="bg-white text-sm text-white dark:bg-black dark:text-black md:text-lg">
				<div className="flex min-h-screen flex-col pt-10 pb-14">
					<Navigation />
					<main className="mt-10 flex-grow sm:mt-20">{children}</main>
					<Footer />
				</div>
				<AnalyticsWrapper />
				<GoogleAnalytics />
			</body>
		</html>
	);
}
