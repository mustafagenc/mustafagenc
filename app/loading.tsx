import Container from '@/components/container';
import Loading from '@/components/icons/loading';

export default function LoadingPage() {
	return (
		<Container>
			<div className="flex justify-center">
				<Loading />
			</div>
		</Container>
	);
}
