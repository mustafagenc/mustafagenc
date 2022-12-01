'use client';

import cx from 'classnames';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FcBiohazard, FcBriefcase, FcLike, FcShare } from 'react-icons/fc';
import Container from './container';

const MENU = {
	'/': 'Hakkımda',
	'/notes': 'Notlar',
	'/bookmarks': 'Yer İmleri',
	'/apps': 'Uygulamalar'
};

//https://react-icons.github.io/react-icons/icons?name=fc

export default function Navigation() {
	const pathname = usePathname();
	const clearSlash = pathname.split('/')[1];
	const path = clearSlash ? `/${clearSlash}` : '/';
	return (
		<header className="">
			<Container>
				<div className="ml-[-0.60rem]">
					<nav className={'relative flex w-full items-start'}>
						{Object.entries(MENU).map(([key, value]) => {
							const isActive = key === path;
							return (
								<span key={key}>
									<NextLink
										href={key}
										className={cx(
											'rounded-lg p-1 transition-all hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-sky-900 dark:hover:bg-opacity-50 sm:px-3 sm:py-2 md:inline-block',
											isActive
												? 'font-semibold text-gray-800'
												: 'font-normal text-gray-600'
										)}
									>
										{key == '/' ? <FcBiohazard /> : null}
										{key == '/notes' ? <FcBriefcase /> : null}
										{key == '/bookmarks' ? <FcLike /> : null}
										{key == '/apps' ? <FcShare /> : null}
										{value}
									</NextLink>
								</span>
							);
						})}
					</nav>
				</div>
			</Container>
		</header>
	);
}
