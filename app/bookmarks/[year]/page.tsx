import GoogleAnalytics from '@/components/analytics';
import BookmarkLayout from '@/components/bookmark-layout';
import Raindrop from '@/helpers/raindrop';
import { arrayOfYears, bookmarkGroupByWeekNumber } from '@/helpers/utils';
import { ILink } from '@/types/index';
import { addYears, format, startOfYear } from 'date-fns';
import { notFound } from 'next/navigation';

export const revalidate = 120;

export async function generateStaticParams() {
	return arrayOfYears().map((year) => ({
		year: year.toString()
	}));
}

async function fetchData(params: { year: string | number | Date }) {
	const dateStartOfYear = startOfYear(new Date(params.year));
	const dateEndOfYear = addYears(dateStartOfYear, 1);

	const startDateByFormat = format(dateStartOfYear, 'yyyy-MM-dd');
	const endDateByFormat = format(dateEndOfYear, 'yyyy-MM-dd');

	const raindrop = new Raindrop();
	const collections: ILink[] = await raindrop.multipleRaindrops({
		id: 29387288,
		search: `created:>${startDateByFormat} created:<${endDateByFormat}`,
		allData: true
	});

	const data = bookmarkGroupByWeekNumber(collections);

	return {
		data,
		year: params.year
	};
}

export default async function BookmarkByYear({ params }) {
	const { data, year } = await fetchData(params);

	if (!Object.keys(data).length) {
		notFound();
	}

	return (
		<>
			<BookmarkLayout data={data} year={year} />
			<GoogleAnalytics pageTitle={'Bookmark - ' + year} />
		</>
	);
}
