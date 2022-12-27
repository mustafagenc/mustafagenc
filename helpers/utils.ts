import { ILink } from '@/types/index';
import { format, parseISO } from 'date-fns';
import groupBy from 'lodash.groupby';

const bookmarkGroupByWeekNumber = (data: ILink[]) => {
	return groupBy(data, (bookmark: ILink) => {
		const dateISO = parseISO(bookmark.created);
		const week = format(dateISO, 'I'); // ISO Week of Year (1-53)
		const month = format(dateISO, 'M'); // Month (1-12)
		if (month === '1' && ['52', '53'].includes(week)) return 0;
		return week;
	});
};

const arrayOfYears = () => {
	var max = new Date().getFullYear();
	var min = 2020;
	var years = [];

	for (var i = min; i <= max; i++) {
		years.push(i);
	}
	return years;
};

export { bookmarkGroupByWeekNumber, arrayOfYears };
