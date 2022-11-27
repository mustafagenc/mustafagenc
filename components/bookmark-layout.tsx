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
			<Title>
				İnternette gezinirken beğendiğim ve beni takip edenlerin de beğeneceğini düşündüğüm, belli bir
				kategorisi olmayan karışık şeyler.
			</Title>

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
						className="rounded-lg bg-zinc-50 py-3 px-4 hover:bg-zinc-100
              dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
					>
						Tüm listeyi görüntüle →
					</Link>
				</div>
			)}
		</Container>
	);
}
