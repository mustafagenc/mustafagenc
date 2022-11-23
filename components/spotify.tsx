import { ReactNode } from 'react';
import NextImage from 'next/image';
import useSWR from 'swr';
import IconSpotify from './icons/spotify';
import { StyleLink } from './link';

export function Spotify() {
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data } = useSWR('/api/spotify', fetcher);

	return (
		<div className="mb-8 flex w-full flex-row-reverse items-center space-x-0 sm:flex-row sm:space-x-2">
			<div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
				{data?.isPlaying ? (
					<NextImage
						className="rounded-full"
						src={data?.albumImageUrl}
						alt={data?.album}
						width={22}
						height={22}
					/>
				) : (
					<IconSpotify />
				)}

				<p className="capsize mx-2 font-medium text-gray-800 dark:text-gray-200">
					{data?.isPlaying ? (
						<StyleLink href={data.songUrl}>{data.title}</StyleLink>
					) : (
						'Not Playing'
					)}
				</p>
				<span className="capsize mx-2 hidden text-gray-500 dark:text-gray-300 sm:block">
					{' '}
					–{' '}
				</span>
				<p className="capsize max-w-max truncate text-gray-500 dark:text-gray-300">
					{data?.isPlaying ? data.artist : 'Spotify'}
				</p>
			</div>
		</div>
	);
}
