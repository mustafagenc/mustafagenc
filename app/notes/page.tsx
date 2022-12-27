import GoogleAnalytics from '@/components/analytics';
import Container from '@/components/container';
import Title from '@/components/title';
import { getAllPublished } from '@/helpers/notion';
import NextLink from 'next/link';

export default async function NotesPage() {
	const posts = await getAllPublished();

	return (
		<>
			<Container className="mb-8">
				<Title>Kısa notlar</Title>
			</Container>

			<Container>
				<div className="mb-8 w-full">
					{posts.map((post) => {
						return (
							<NextLink
								key={`link-` + post.id}
								className="text-white"
								href={`/notes/${post.slug}`}
							>
								<article key={`article-` + post.id} className="mb-6">
									<header className="flex flex-col justify-between md:flex-row">
										<h3 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
											{post.title}
										</h3>
										<span className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
											{post.date}
										</span>
									</header>
									<time dateTime={post.date} className="hidden">
										{post.date}
									</time>
									<p className="text-gray-600 dark:text-gray-400">{post.summary}</p>
								</article>
							</NextLink>
						);
					})}
				</div>
			</Container>
			<GoogleAnalytics pageTitle="Notes" />
		</>
	);
}
