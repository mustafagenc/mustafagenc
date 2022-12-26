import Container from '@/components/container';
import { getPage } from '@/helpers/notion';
import NextLink from 'next/link';

export default function NotePage({ params }) {
	// const post: Post = allPosts.find((post: Post) => post.slug === params.slug);

	// if (!post) {
	// 	notFound();
	// }

	const page = getPage(params.slug);

	console.log(page);

	return (
		<Container>
			<article className="post">
				<header>
					<h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
						Title
					</h1>
					<div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
						<div className="flex items-center">
							<p className="text-sm text-gray-700 dark:text-gray-300">
								<NextLink href="https://mustafagenc.info">Mustafa Genç</NextLink> / Date
							</p>
						</div>
						<p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">Test</p>
					</div>
				</header>

				<div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-zinc-200"></div>

				<div className="mt-20 flex justify-center">Claps</div>
			</article>
		</Container>
	);
}
