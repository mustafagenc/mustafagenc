import Container from '@/components/container';
import Title from '@/components/title';

export const revalidate = 86400; // 60*60*24

async function fetchData() {
	const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Apps`, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
		}
	});
	return await res.json();
}

export default async function AppsPage() {
	const data = await fetchData();
	console.log(data.records);

	return (
		<Container>
			<Title>Kullandığım uygulamaların listesi.</Title>
		</Container>
	);
}
