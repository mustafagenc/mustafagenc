import IconGithub from '@/components/icons/github';
import IconInstagram from '@/components/icons/instagram';
import IconTwitter from '@/components/icons/twitter';
import Link from '@/components/link';
import { META } from '@/helpers/meta';
import IconFacebook from './icons/facebook';
import IconUnsplash from './icons/unsplash';
import IconYoutube from './icons/youtube';

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
	const { twitter, github, instagram, facebook, youtube, unsplash } = META.social;

	return (
		<div className="flex items-center space-x-3">
			<SocialButton href={instagram}>
				<span className="hidden">{META.title}</span>
				<IconInstagram />
			</SocialButton>

			<SocialButton href={twitter}>
				<span className="hidden">{META.title}</span>
				<IconTwitter />
			</SocialButton>

			<SocialButton href={facebook}>
				<span className="hidden">{META.title}</span>
				<IconFacebook />
			</SocialButton>

			<SocialButton href={youtube}>
				<span className="hidden">{META.title}</span>
				<IconYoutube />
			</SocialButton>

			<SocialButton href={unsplash}>
				<span className="hidden">{META.title}</span>
				<IconUnsplash />
			</SocialButton>

			<SocialButton href={github}>
				<span className="hidden">{META.title}</span>
				<IconGithub />
			</SocialButton>
		</div>
	);
}

export default Social;
