import Container from '@/components/container';
import Title from '@/components/title';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import NextLink from 'next/link';

function getData() {
	const posts: Post[] = allPosts.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date));
	});

	return posts.map((post: Post) => {
		const { body, type, _raw, ...rest } = post;
		return rest;
	});
}

export default function PostsPage() {
	const posts: Partial<Post>[] = getData();

	return (
		<>
			<Container className="mb-8">
				<Title>Kısa notlar</Title>
			</Container>

			<Container>
				<div className="mb-8 w-full">
					{posts.map((post) => {
						return (
							<NextLink className="text-white" href={`/notes/${post.slug}`}>
								<article key={post._id} className="mb-6">
									<header className="flex flex-col justify-between md:flex-row">
										<h3 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
											{post.title}
										</h3>
										<span className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
											{post.readingTime.text}
										</span>
									</header>
									<time dateTime={post.date} className="hidden">
										{format(parseISO(post.date), 'd LLLL yyyy', {
											locale: tr
										})}
									</time>
									<p className="text-gray-600 dark:text-gray-400">{post.subtitle}</p>
								</article>
							</NextLink>
						);
					})}
				</div>
			</Container>
		</>
	);
}
