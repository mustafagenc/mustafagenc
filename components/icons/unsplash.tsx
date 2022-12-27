import type { ISVGProps } from '@/types/index';

function IconUnsplash({ size = 22, ...props }: ISVGProps) {
	return (
		<svg
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			{...props}
		>
			<g>
				<path fill="none" d="M0 0H24V24H0z" />
				<path
					fill="currentColor"
					d="M10 10v4h4v-4h7v11H3V10h7zm-2 2H5v7h14v-7h-3l-.001 4H8v-4zm8-9v6H8V3h8zm-2 2h-4v2h4V5z"
				/>
			</g>
		</svg>
	);
}

export default IconUnsplash;
