import Container from '@/components/container';
import { Spotify } from './spotify';

export default function Footer() {
	return (
		<footer className="mt-10">
			<Container>
				<hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
				<p className="text-sm"></p>
				<div className="mt-10">
					<Spotify />
				</div>
			</Container>
		</footer>
	);
}
