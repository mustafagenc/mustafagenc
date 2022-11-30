import Link from '@/components/link';
import { ILink } from '@/types/index';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

function BookmarkCard({ bookmark }: { bookmark: ILink }) {
	return (
		<article className="py-4">
			<h3 className="font-semibold">
				<Link href={bookmark.link}>{bookmark.title}</Link>
			</h3>

			<div className="mt-1 flex items-center space-x-2">
				<span>{bookmark.domain}</span>
				<span>•</span>
				<span>
					{formatDistanceToNowStrict(parseISO(bookmark.created), {
						addSuffix: true,
						locale: tr
					})}
				</span>
				{bookmark.tags.length > 0 ? <span>•</span> : ''}
				{bookmark.tags.map((tag) => (
					<span
						key={tag}
						className="rounded-full bg-sky-50 px-2 py-1 text-xs font-medium leading-none text-sky-600 dark:bg-sky-900 dark:bg-opacity-20 dark:text-sky-700"
					>
						{tag}
					</span>
				))}
			</div>
		</article>
	);
}

export default BookmarkCard;
