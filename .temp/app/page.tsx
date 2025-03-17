import GoogleAnalytics from '@/components/analytics';
import Container from '@/components/container';
import IzmirPhotos from '@/components/izmir';
import { StyleLink } from '@/components/link';
import Social from '@/components/social';
import SubTitle from '@/components/subtitle';
import Title from '@/components/title';
import { getIzmirPhotos } from '@/helpers/airtable';
import { META } from '@/helpers/meta';
import NextImage from 'next/image';

export default async function Home() {
	const izmirPhotos = await getIzmirPhotos();

	return (
		<Container>
			<div className="flex flex-col-reverse items-start sm:flex-row">
				<div className="flex flex-col md:pr-8">
					<Title>Merhaba, Ben Mustafa 🖖</Title>
					<SubTitle>İstanbul&apos;da yaşayan İzmirli bir Geliştiriciyim.</SubTitle>
					<p className="mb-2 text-gray-600 dark:text-gray-400">
						Şu anda{' '}
						<StyleLink href="https://www.enkasystems.com/solutions/egem-global-equipment-management-system/">
							ENKA Systems
						</StyleLink>{' '}
						şirketinde Kıdemli Yazılım Geliştirici olarak çalışıyorum.
					</p>
					<p className="mb-16 text-gray-600 dark:text-gray-400">
						Her hangi bir konuda bana{' '}
						<StyleLink href="#mailgo" data-address="ben" data-domain="mstf.dev">
							ben@mstf.dev
						</StyleLink>{' '}
						adresinden ulaşabilirsiniz.
					</p>
				</div>
				<div className="relative mb-8 flex w-full justify-center md:mr-auto md:w-fit">
					<NextImage
						src="/photos/mustafa-genc.jpg"
						alt={'Mustafa Genç'}
						width={150}
						height={150}
						quality={100}
						className="rounded-full"
					/>
				</div>
			</div>
			<div className="mt-2">
				<Social />
			</div>
			<div className="mt-6">
				<IzmirPhotos data={izmirPhotos} />
			</div>
			<div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
				Bu web sitesinin kaynak kodlarına{' '}
				<StyleLink href="https://github.com/mustafagenc/mustafagenc">Github</StyleLink> üzerinden
				ulaşabilirsiniz.
			</div>
			<GoogleAnalytics pageTitle={META.title} />
		</Container>
	);
}
