import { cnb } from 'cnbuilder';
import { ReactNode } from 'react';

export type BaseLinkProps = {
	href: string;
	children?: ReactNode;
	blank?: boolean;
	className?: string;
};

export default function BaseLink({ children, href, blank = true, className, ...props }: BaseLinkProps) {
	const isBlank = blank
		? {
				rel: 'noopener noreferrer',
				target: '_blank'
		  }
		: {};
	return (
		<a href={href} className={cnb(className)} {...isBlank} {...props}>
			{children}
		</a>
	);
}

export function StyleLink({ className, ...props }: BaseLinkProps) {
	return (
		<BaseLink
			className={cnb(
				'decoration-2 underline-offset-2',
				'dark:hover:text-zinc-50 dark:hover:decoration-sky-500',
				'underline decoration-zinc-500 hover:text-zinc-900 dark:decoration-zinc-600',
				className
			)}
			{...props}
		/>
	);
}
