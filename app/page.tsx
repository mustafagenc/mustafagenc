import Container from '@/components/container';
import { StyleLink } from '@/components/link';
import Social from '@/components/social';
import SubTitle from '@/components/subtitle';
import Title from '@/components/title';
import NextImage from 'next/image';

export default function Home() {
	return (
		<Container>
			<div className="flex flex-col-reverse items-start sm:flex-row">
				<div className="flex flex-col pr-8">
					<Title>Merhaba, Ben Mustafa 🖖</Title>
					<SubTitle>İstanbul&apos;da yaşayan İzmirli bir Geliştiriciyim.</SubTitle>
					<p className="mb-16 text-gray-600 dark:text-gray-400">
						Şu anda{' '}
						<StyleLink href="https://www.enkasystems.com/solutions/egem-global-equipment-management-system/">
							ENKA Systems
						</StyleLink>{' '}
						şirketinde Kıdemli Yazılım Geliştirici olarak çalışıyorum.
					</p>
				</div>
				<div className="relative mb-8 mr-auto sm:mb-0">
					<NextImage
						src="https://s.gravatar.com/avatar/4562fd5e379b39cd7eea97397d0a4442?s=400"
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
		</Container>
	);
}
