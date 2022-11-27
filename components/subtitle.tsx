import cx from 'classnames';
import React from 'react';

export interface ISubTitleProps extends React.HTMLAttributes<HTMLHeadElement> {
	children: React.ReactNode;
}

const SubTitle: React.FC<ISubTitleProps> = ({ className, ...props }: ISubTitleProps) => {
	return <h3 className={cx('text-2xl leading-snug opacity-60', className)} {...props} />;
};

export default SubTitle;
