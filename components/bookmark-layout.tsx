import BookmarkCard from '@/components/bookmark-card';
import Container from '@/components/container';
import { ILink } from '@/types/index';
import { getYear } from 'date-fns';
import Link from 'next/link';
import SubTitle from './subtitle';
import Title from './title';

export default function BookmarkLayout({ data, year, onlyThisWeek = false }) {
	const sortedData = Object.keys(data).sort((a, b) => parseInt(b) - parseInt(a));

	return (
		<Container>
			<Title>Kategorisi olmayan karışık bağlantılar.</Title>

			{sortedData.map((date) => (
				<div key={date} className="mt-20">
					<SubTitle>
						{date}. Hafta, {year}
					</SubTitle>

					<div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
						{data[date].map((item: ILink) => {
							return <BookmarkCard key={item._id} bookmark={item} />;
						})}
					</div>
				</div>
			))}

			{onlyThisWeek && (
				<div className="mt-16">
					<Link
						href={`/bookmarks/${getYear(new Date())}`}
						className="rounded-lg bg-zinc-50 py-3 px-4 transition-all hover:bg-zinc-100 dark:bg-sky-900 dark:text-gray-200 dark:hover:bg-sky-900 dark:hover:bg-opacity-50"
					>
						Tüm listeyi görüntüle →
					</Link>
				</div>
			)}
		</Container>
	);
}
