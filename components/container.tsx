import cx from 'classnames';
import React from 'react';

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	as?: string;
	size?: 'default' | 'small';
	children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({
	as = 'div',
	size = 'default',
	children,
	className,
	...props
}: IContainerProps) => {
	const sizes = {
		small: 'max-w-screen-sm mx-auto px-6',
		default: 'max-w-screen-md mx-auto px-10'
	};

	return React.createElement(as, { className: cx(sizes[size], className), ...props }, children);
};

export default Container;
