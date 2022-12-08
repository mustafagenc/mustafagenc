import Apps from '@/components/apps';
import Container from '@/components/container';
import Title from '@/components/title';
import { IApp } from '@/types/index';

export const revalidate = 86400; // 60*60*24

async function getData() {
	const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Apps`, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
		}
	});

	return await res.json();
}

export default async function AppsPage() {
	const data = await getData();

	const apps: IApp[] =
		data?.length &&
		data.records.map((r: any) => {
			return { id: r.id, createdTime: r.createdTime, ...r.fields };
		});

	return (
		<Container>
			<Title>Kullandığım uygulamaların listesi.</Title>
			<Apps data={apps || []} />
		</Container>
	);
}
