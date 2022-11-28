import Container from '@/components/container';
import { StyleLink } from '@/components/link';
import Social from '@/components/social';
import Title from '@/components/title';
import NextImage from 'next/image';

export default function Home() {
	return (
		<Container>
			<div className="flex flex-col-reverse items-start sm:flex-row">
				<div className="flex flex-col space-y-6 pr-8">
					<Title>
						<b className="font-semibold">Merhaba, Ben Mustafa 🖖</b>
						<br />
						İstanbul&apos;da yaşayan İzmirli bir Geliştiriciyim.
					</Title>
					<p className="text-lg">
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

			<div className="mt-10">
				<Social />
			</div>
		</Container>
	);
}
