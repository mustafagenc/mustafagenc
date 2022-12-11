'use client';
import { IIzmirPhotos } from '@/types/index';
import NextImage from 'next/image';
import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function IzmirPhotos({ data }: { data: IIzmirPhotos[] }) {
	const [current, setCurrent] = useState(0);
	const length = data.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(data) || data.length <= 0) {
		return null;
	}

	return (
		<>
			<div className="relative mt-10 flex justify-center rounded">
				{data.map((izmir, index) => {
					return (
						<div
							key={index}
							className={index === current ? 'opacity-[1] duration-1000 ease-in' : 'opacity-0'}
						>
							<FaArrowCircleLeft
								onClick={prevSlide}
								className="absolute top-[50%] left-[30px] z-[2] cursor-pointer select-none text-teal-100/50"
								size={50}
							/>
							{index === current && (
								<NextImage
									className="rounded-lg"
									src={izmir.image[0].url}
									alt={izmir.name}
									width={izmir.image[0].width}
									height={izmir.image[0].height}
								/>
							)}
							<FaArrowCircleRight
								onClick={nextSlide}
								className="absolute top-[50%] right-[30px] z-[2] cursor-pointer select-none text-teal-100/50"
								size={50}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}
