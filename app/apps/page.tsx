import GoogleAnalytics from '@/components/analytics';
import Apps from '@/components/apps';
import Container from '@/components/container';
import Title from '@/components/title';
import { getApps } from '@/helpers/airtable';

export default async function AppsPage() {
	const apps = await getApps();
	return (
		<Container>
			<Title>Kullandığım uygulamaların listesi.</Title>
			{Apps != null ? <Apps data={apps} /> : 'Yükleniyor...'}
			<GoogleAnalytics pageTitle="Apps" />
		</Container>
	);
}
