import type { ISVGProps } from '@/types/index';

function IconNotes({ size = 18, ...props }: ISVGProps) {
	return (
		<svg
			width={size}
			height={size}
			{...props}
			viewBox="0 0 385 385"
			version="1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<polygon fill="#FF9811" points="77.326,355 83.327,385 233.318,355 157.5,355 	" />
			<polygon
				fill="#FF9811"
				points="307.5,340.163 377.5,326.162 318.663,31.988 203.612,55 307.5,55 	"
			/>
			<path
				fill="#FFE98F"
				d="M157.5,150c-24.813,0-45-20.186-45-45V85h30v20c0,8.271,6.729,15,15,15V55h-15h-30
                H7.5v300h69.826H157.5V150z"
			/>
			<path
				fill="#FFDA44"
				d="M307.5,340.163V55H203.612H202.5v50c0,24.814-20.187,45-45,45v205h75.818H307.5
                V340.163z"
			/>
			<path fill="#FFDA44" d="M172.5,105V55h-15v65C165.771,120,172.5,113.271,172.5,105z" />
			<path
				fill="#565659"
				d="M142.5,45c0-8.271,6.729-15,15-15s15,6.729,15,15v10v50c0,8.271-6.729,15-15,15
                s-15-6.729-15-15V85h-30v20c0,24.814,20.187,45,45,45s45-20.186,45-45V55V45c0-24.813-20.187-45-45-45s-45,20.187-45,45v10h30V45z"
			/>
		</svg>
	);
}

export default IconNotes;
