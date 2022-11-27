'use client';

import cx from 'classnames';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from './container';
import IconArrowDropDown from './icons/arrow-drop-down';

const MENU = {
	'/': 'Hakkımda',
	'/blog': 'Yazılar',
	'/apps': 'Uygulamalar'
};

export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const pathname = usePathname();
	const clearSlash = pathname.split('/')[1];
	const path = clearSlash ? `/${clearSlash}` : '/';

	useEffect(() => {
		setIsNavOpen(false);
	}, [pathname]);

	return (
		<header className="">
			<Container>
				<nav className={cx(isNavOpen ? 'flex' : 'hidden', 'flex-col gap-3 sm:!flex sm:flex-row')}>
					{Object.keys(MENU).map((path) => {
						const isActive = path === path;
						return (
							<span key={path}>
								<NextLink href={path} className={cx(isActive ? 'shine' : '')}>
									{MENU[path]}
								</NextLink>
							</span>
						);
					})}
				</nav>

				{!isNavOpen && (
					<button
						type="button"
						className="flex select-none items-center sm:hidden"
						onClick={() => {
							setIsNavOpen(true);
						}}
					>
						<span>{MENU[path]}</span>
						<IconArrowDropDown className="opacity-50" />
					</button>
				)}
			</Container>
		</header>
	);
}
