'use client';

import '@/styles/globals.css';
import '@upstash/claps/style.css';

import Footer from '@/components/footer';
import Navigation from '@/components/nav';
import { Inter } from '@next/font/google';
import mailgo from 'mailgo';
import { useEffect } from 'react';
import AnalyticsWrapper from './analytics';

const mailgoConfig = {
	dark: true
};
const inter = Inter({
	variable: '--font-inter',
	display: 'swap',
	style: 'normal',
	subsets: ['latin-ext']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		mailgo(mailgoConfig);
	}, []);

	return (
		<html lang="tr" className={`scroll-smooth ${inter.variable} dark`}>
			<body className="bg-white text-white dark:bg-black dark:text-black">
				<div className="flex min-h-screen flex-col pt-10 pb-14">
					<Navigation />
					<main className="mt-10 flex-grow sm:mt-20">{children}</main>
					<Footer />
				</div>
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
