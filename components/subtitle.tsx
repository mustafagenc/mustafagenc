import cx from 'classnames';
import React from 'react';

export interface ISubTitleProps extends React.HTMLAttributes<HTMLHeadElement> {
	children: React.ReactNode;
}

const SubTitle: React.FC<ISubTitleProps> = ({ className, ...props }: ISubTitleProps) => {
	return <h3 className={cx('mb-4 text-gray-700 dark:text-gray-200', className)} {...props} />;
};

export default SubTitle;
