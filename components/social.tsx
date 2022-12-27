import IconGithub from '@/components/icons/github';
import IconInstagram from '@/components/icons/instagram';
import IconTwitter from '@/components/icons/twitter';
import Link from '@/components/link';
import { META } from '@/helpers/meta';

const className =
	'flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-sky-100 hover:text-sky-900 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-sky-500 dark:hover:text-sky-100';

function SocialButton({ href, children }) {
	return (
		<Link href={href} blank className={className}>
			{children}
		</Link>
	);
}

function Social() {
	const { twitter, github, instagram } = META.social;

	return (
		<div className="flex items-center space-x-3">
			<SocialButton href={instagram}>
				<IconInstagram />
			</SocialButton>

			<SocialButton href={twitter}>
				<IconTwitter />
			</SocialButton>

			<SocialButton href={github}>
				<IconGithub />
			</SocialButton>
		</div>
	);
}

export default Social;
