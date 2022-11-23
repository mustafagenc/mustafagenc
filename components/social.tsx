import { META } from '@/lib/helper';
import Link from '@/components/link';
import IconTwitter from '@/components/icons/twitter';
import IconGithub from '@/components/icons/github';
import IconInstagram from '@/components/icons/instagram';

function SocialButton({ href, children }) {
	return (
		<Link
			href={href}
			blank
			className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors
      hover:bg-sky-100 hover:text-sky-900
      dark:bg-zinc-700 dark:text-zinc-200
      dark:hover:bg-sky-500 dark:hover:text-sky-100"
		>
			{children}
		</Link>
	);
}

function Social() {
	const { twitter, github, instagram } = META.social;

	return (
		<div className="flex items-center space-x-3">
			<SocialButton href={`mailto:${META.email}`}>
				<span className="mx-2 font-medium">E-mail</span>
			</SocialButton>

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
