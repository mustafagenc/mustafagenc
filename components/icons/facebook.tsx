import type { ISVGProps } from '@/types/index';

function IconFacebook({ size = 22, ...props }: ISVGProps) {
	return (
		<svg
			role="img"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			id="meteor-icon-kit__regular-facebook"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Facebook icon</title>
			<path
				d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default IconFacebook;
