import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import IconArrowDropDown from './icons/arrow-drop-down';
import cx from 'classnames';
import Container from './container';

const MENU = {
	'/': 'Hakkımda'
};

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const router = useRouter();

	const { pathname } = useRouter();
	const clearSlash = pathname.split('/')[1];
	const pathName = clearSlash ? `/${clearSlash}` : '/';

	useEffect(() => {
		const handleRouteChangeStart = () => {
			setIsNavOpen(false);
		};

		router.events.on('routeChangeComplete', handleRouteChangeStart);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChangeStart);
		};
	}, []);

	return (
		<header className="">
			<Container>
				<div className="ml-[-0.63rem]">
					<nav
						className={cx(
							isNavOpen ? 'flex' : 'hidden',
							'flex-col gap-3 sm:!flex sm:flex-row'
						)}
					>
						{Object.keys(MENU).map((path) => {
							const isActive = path === pathName;
							return (
								<span key={path}>
									<NextLink
										href={path}
										className={cx(
											isActive ? 'text-sky-500' : '',
											'rounded-lg p-1 font-normal text-gray-600 transition-all hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
										)}
									>
										{MENU[path]}
									</NextLink>
								</span>
							);
						})}
					</nav>
				</div>

				{!isNavOpen && (
					<button
						type="button"
						className="flex select-none items-center sm:hidden"
						onClick={() => {
							setIsNavOpen(true);
						}}
					>
						<span>{MENU[pathName]}</span>
						<IconArrowDropDown className="opacity-50" />
					</button>
				)}
			</Container>
		</header>
	);
}

export default Header;
