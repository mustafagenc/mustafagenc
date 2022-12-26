import Container from '@/components/container';
import Title from '@/components/title';
import { getDatabase } from '@/helpers/notion';
import { compareDesc } from 'date-fns';
import NextLink from 'next/link';

async function getData() {
	const databases = await getDatabase(process.env.NOTION_DATABASE_ID);

	const posts = databases.sort((a, b) => {
		return compareDesc(new Date(a.last_edited_time), new Date(b.last_edited_time));
	});

	return posts;
}

export default async function NotesPage() {
	const posts = await getData();

	return (
		<>
			<Container className="mb-8">
				<Title>Kısa notlar</Title>
			</Container>

			<Container>
				<div className="mb-8 w-full">
					{posts.map((post) => {
						const date = new Date(post.last_edited_time).toLocaleString('tr-TR', {
							month: 'short',
							day: '2-digit',
							year: 'numeric'
						});

						console.log(post.properties.name);

						return (
							<NextLink
								key={`link-` + post.id}
								className="text-white"
								href={`/notes/${post.id}`}
							>
								<article key={`article-` + post.id} className="mb-6">
									<header className="flex flex-col justify-between md:flex-row">
										<h3 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
											{post.properties.name.title[0].plain_text}
										</h3>
										<span className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
											xx
										</span>
									</header>
									<time dateTime={date} className="hidden">
										{date}
									</time>
									<p className="text-gray-600 dark:text-gray-400">
										{post.properties.summary.rich_text[0].plain_text}
									</p>
								</article>
							</NextLink>
						);
					})}
				</div>
			</Container>
		</>
	);
}
