import BookmarkLayout from '@/components/bookmark-layout';
import bookmarkGroupByWeekNumber from '@/helpers/bookmarkGroupByWeekNumber';
import Raindrop from '@/helpers/raindrop';
import { ILink } from '@/types/index';
import { format, startOfYear } from 'date-fns';
import { notFound } from 'next/navigation';

export const revalidate = 7200; // 60*60*2

export async function generateStaticParams() {
	return ['2021', '2022'].map((year) => ({
		year: year.toString()
	}));
}

async function fetchData(params) {
	const dateStartOfYear = startOfYear(new Date(params.year));
	const date = format(dateStartOfYear, 'yyyy-MM-dd');

	const raindrop = new Raindrop();
	const collections: ILink[] = await raindrop.multipleRaindrops({
		id: 29387288,
		search: `created:>${date}`,
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

	return <BookmarkLayout data={data} year={year} />;
}