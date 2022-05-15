import React, { FC } from 'react';
import cx from 'classnames';

import s from './style.module.scss';

interface IProps {
	type?: 'primary' | 'secondary';
	outlined?: boolean;
	size?: 'default' | 'large' | 'small';
	[key: string]: any;
}

const Button: FC<IProps> = ({ children, type, outlined, size, ...props }) => (
	<button
		className={cx(s.button, {
			[s.button__primary]: type === 'primary',
			[s.button__secondary]: type === 'secondary' || !type,
			[s.button__outlined]: outlined,
			[s['button__large-size']]: size === 'large',
			[s['button__small-size']]: size === 'small',
			[s['button__default-size']]: size === 'default' || !size,
		})}
		{...props}
	>
		{children}
	</button>
);

export default Button;
