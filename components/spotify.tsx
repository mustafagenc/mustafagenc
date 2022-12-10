'use client';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import IconSpotify from './icons/spotify';
import { StyleLink } from './link';

export function Spotify() {
	const [data, setData] = useState(null);

	const fetchData = async () => {
		const res = await fetch('/api/spotify');
		const data = await res.json();
		if (res.ok) {
			setData(data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="mb-8 flex w-full flex-row-reverse items-center space-x-0 sm:flex-row sm:space-x-2">
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
			<div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
				<p className="capsize font-medium text-gray-800 dark:text-gray-200">
					{data?.isPlaying ? (
						<StyleLink href={data.songUrl}>{data.title}</StyleLink>
					) : (
						'Not Playing'
					)}
				</p>
				<span className="capsize mx-2 hidden text-gray-500 dark:text-gray-300 sm:block"> – </span>
				<p className="capsize max-w-max truncate text-gray-500 dark:text-gray-300">
					{data?.isPlaying ? data.artist : 'Spotify'}
				</p>
			</div>
		</div>
	);
}
