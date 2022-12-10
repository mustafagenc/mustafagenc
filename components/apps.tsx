'use client';

import AppCard from '@/components/app-card';
import Segmented from '@/components/segmented';
import { IApp } from '@/types/index';
import { useState } from 'react';

export default function Apps({ data }: { data: IApp[] }) {
	const [selectedTab, setSelectedTab] = useState('macOS');

	const os = [
		...new Set(data?.flatMap((tool: IApp) => tool.os).sort((a, b) => a.localeCompare(b)) as string[])
	];

	return (
		<>
			<Segmented
				className="mt-10"
				fullWidth
				data={os}
				onChange={setSelectedTab}
				selected={selectedTab}
			/>
			<div className="mt-10 divide-y divide-zinc-100 dark:divide-zinc-800">
				{data
					.filter((app) => app.os === selectedTab)
					.map((app) => (
						<AppCard key={app.id} app={app} />
					))}
			</div>
		</>
	);
}
