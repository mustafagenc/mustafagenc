import Container from '@/components/container';
import { Spotify } from './spotify';

export default function Footer() {
	return (
		<footer className="mt-40">
			<Container>
				<p className="text-sm"></p>
				<div className="mt-10">
					<Spotify />
				</div>
			</Container>
		</footer>
	);
}
