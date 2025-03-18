import cx from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

export default function Segmented({
	data = [],
	selected,
	onChange = () => {},
	className = '',
	fullWidth = false,
	buttonProps = {}
}: {
	data: string[];
	selected: string;
	onChange: (value: string) => void;
	className?: string;
	fullWidth?: boolean;
	buttonProps?: React.HTMLAttributes<HTMLButtonElement>;
}) {
	if (!data.length) return null;

	return (
		<div
			className={cx(
				'items-center rounded-lg p-1 dark:bg-sky-900 dark:bg-opacity-50 dark:text-gray-200',
				fullWidth ? 'flex' : 'inline-flex',
				className
			)}
		>
			{data.map((item) => {
				const isActive = item === selected;

				return (
					<button
						key={item}
						onClick={() => onChange(item)}
						{...buttonProps}
						className={cx(
							'relative grow rounded-lg bg-transparent py-1 px-4 transition-all',
							buttonProps?.className
						)}
					>
						{isActive && (
							<motion.span
								layoutId="bg"
								className="absolute left-0 top-0 h-full w-full rounded-lg bg-white dark:bg-sky-900  dark:text-gray-100"
								initial={false}
								transition={{
									type: 'spring',
									stiffness: 500,
									damping: 50,
									mass: 2
								}}
							/>
						)}

						<span className={cx('relative z-10', isActive ? 'shine' : '')}>{item}</span>
					</button>
				);
			})}
		</div>
	);
}
