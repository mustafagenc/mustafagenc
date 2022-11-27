import BookmarkLayout from '@/components/bookmark-layout';
import bookmarkGroupByWeekNumber from '@/helpers/bookmarkGroupByWeekNumber';
import Raindrop from '@/helpers/raindrop';
import { ILink } from '@/types/index';
import { format, startOfWeek } from 'date-fns';

export const revalidate = 7200; // 60*60*2

async function fetchData() {
	const dateStartOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
	const date = format(dateStartOfWeek, 'yyyy-MM-dd');

	const raindrop = new Raindrop();
	const collections: ILink[] = await raindrop.multipleRaindrops({
		id: 29387288,
		search: `created:>${date}`
	});

	const data = bookmarkGroupByWeekNumber(collections);

	return {
		data,
		year: format(dateStartOfWeek, 'yyyy')
	};
}

export default async function Bookmark() {
	const { data, year } = await fetchData();

	return <BookmarkLayout data={data} year={year} onlyThisWeek />;
}
