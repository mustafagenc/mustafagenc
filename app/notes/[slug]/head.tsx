import { getSinglePost } from '@/helpers/notion';
import { INote } from '@/types/index';
import { notFound } from 'next/navigation';

export default async function Head({ params }) {
	const { slug } = params;
	const post: INote = await getSinglePost(slug);

	if (!post) {
		notFound();
	}

	return (
		<>
			<title>{post.title}</title>
			<meta name={'description'} title={'description'} content={post.summary} />
			<meta name={'og:title'} title={'og:title'} content={post.title} />
			<meta name={'og:description'} title={'og:description'} content={post.summary} />
			{post.cover != '' ? <meta name={'og:image'} title={'og:image'} content={post.cover} /> : ''}
		</>
	);
}
