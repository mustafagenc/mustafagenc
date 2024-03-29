import GoogleAnalytics from '@/components/analytics';
import BookmarkLayout from '@/components/bookmark-layout';
import Raindrop from '@/helpers/raindrop';
import { bookmarkGroupByWeekNumber } from '@/helpers/utils';
import { ILink } from '@/types/index';
import { format, startOfWeek } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Suspense } from 'react';

export const revalidate = 120;

async function fetchData() {
	const dateStartOfWeek = startOfWeek(new Date(), { locale: tr });
	const date = format(dateStartOfWeek, 'yyyy-MM-dd', { locale: tr });

	const raindrop = new Raindrop();
	const collections: ILink[] = await raindrop.multipleRaindrops({
		id: 29387288,
		search: `created:>${date}`,
		allData: true
	});

	const data = bookmarkGroupByWeekNumber(collections);

	return {
		data,
		year: format(dateStartOfWeek, 'yyyy')
	};
}

export default async function Bookmark() {
	const { data, year } = await fetchData();

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BookmarkLayout data={data} year={year} onlyThisWeek />
			<GoogleAnalytics pageTitle="Boomarks" />
		</Suspense>
	);
}
