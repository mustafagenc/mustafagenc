import cx from 'classnames';
import React from 'react';

export interface ITitleProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: string;
	children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ as = 'h2', children, className, ...props }: ITitleProps) => {
	return React.createElement(
		as,
		{
			className: cx(
				'font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white',
				className
			),
			...props
		},
		children
	);
};

export default Title;
