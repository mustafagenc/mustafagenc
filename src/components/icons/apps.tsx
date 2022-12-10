import type { ISVGProps } from '@/types/index';

function IconApps({ size = 18, ...props }: ISVGProps) {
	return (
		<svg
			width={size}
			height={size}
			{...props}
			viewBox="0 0 55 55"
			version="1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="#EFCE4A"
				d="M21.66,24H2.34C1.048,24,0,22.952,0,21.66V2.34C0,1.048,1.048,0,2.34,0h19.32
	C22.952,0,24,1.048,24,2.34v19.32C24,22.952,22.952,24,21.66,24z"
			/>
			<path
				fill="#7FABDA"
				d="M51.66,24H32.34C31.048,24,30,22.952,30,21.66V2.34C30,1.048,31.048,0,32.34,0h19.32
	C52.952,0,54,1.048,54,2.34v19.32C54,22.952,52.952,24,51.66,24z"
			/>
			<path
				fill="#D75A4A"
				d="M21.66,54H2.34C1.048,54,0,52.952,0,51.66V32.34C0,31.048,1.048,30,2.34,30h19.32
	c1.292,0,2.34,1.048,2.34,2.34v19.32C24,52.952,22.952,54,21.66,54z"
			/>
			<line
				fill="none"
				stroke="23A24D"
				strokeWidth={2}
				strokeLinecap="round"
				strokeMiterlimit={10}
				x1="42"
				y1="30"
				x2="42"
				y2="54"
			/>
			<line
				fill="none"
				stroke="23A24D"
				strokeWidth={2}
				strokeLinecap="round"
				strokeMiterlimit={10}
				x1="30"
				y1="42"
				x2="54"
				y2="42"
			/>
		</svg>
	);
}

export default IconApps;
