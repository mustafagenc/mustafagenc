import Container from '@/components/container';
import { getSinglePost } from '@/helpers/notion';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default async function NotePage({ params }) {
	const { slug } = params;
	const post = await getSinglePost(slug);

	if (!post) {
		notFound();
	}

	return (
		<Container>
			<article className="post">
				<header>
					<h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
						{post.title}
					</h1>
					<div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
						<div className="flex items-center">
							<p className="text-sm text-gray-700 dark:text-gray-300">
								<NextLink href="https://mustafagenc.info">Mustafa Genç</NextLink> /{' '}
								{post.date}
							</p>
						</div>
						<p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
							{post.readingTime} dk okuma süresi
						</p>
					</div>
				</header>

				<div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-zinc-200">
					<ReactMarkdown>{post.content}</ReactMarkdown>
				</div>

				<div className="mt-20 flex justify-center">Claps</div>
			</article>
		</Container>
	);
}
