import { ILink } from '@/types/index';
import { format, parseISO } from 'date-fns';
import groupBy from 'lodash.groupby';

const bookmarkGroupByWeekNumber = (data: ILink[]) => {
	return groupBy(data, (bookmark: ILink) =>
    format(parseISO(bookmark.created), "w")
  );
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
