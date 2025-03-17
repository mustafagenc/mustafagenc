import { ILink } from '@/types/index';
import { format, parseISO } from 'date-fns';
import groupBy from 'lodash.groupby';

const bookmarkGroupByWeekNumber = (data: ILink[]) => {
	return groupBy(data, (bookmark: ILink) => format(parseISO(bookmark.created), 'w'));
};

const arrayOfYears = () => {
	var max: number = new Date().getFullYear();
	var min: number = 2020;
	var years: number[] = [];

	for (var year: number = min; year <= max; year++) {
		years.push(year);
	}
	return years;
};

export { bookmarkGroupByWeekNumber, arrayOfYears };
