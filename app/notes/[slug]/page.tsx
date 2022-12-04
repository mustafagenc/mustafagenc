import ClapsButton from '@/components/claps';
import Container from '@/components/container';
import MDXComponents from '@/components/mdx-components';
import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import { useMDXComponent } from 'next-contentlayer/hooks';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
	return allPosts.map((post: Post) => ({ slug: post.slug }));
}

export default function PostPage({ params }) {
	const post: Post = allPosts.find((post: Post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	const Component = useMDXComponent(post.body.code);

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
								{format(parseISO(post.date), 'd LLLL yyyy', {
									locale: tr
								})}
							</p>
						</div>
						<p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
							{post.readingTime.text}
						</p>
					</div>
				</header>

				<div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-zinc-200">
					<Component
						components={{
							...MDXComponents
						}}
					/>
				</div>

				<div className="mt-20 flex justify-center">
					<ClapsButton url={post.tweetUrl} />
				</div>
			</article>
		</Container>
	);
}
