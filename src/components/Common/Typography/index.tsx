import React, { ElementType, FC, HTMLAttributes } from 'react';
import cx from 'classnames';

import s from './styles.module.scss';

interface IProps extends HTMLAttributes<HTMLOrSVGElement> {
	as?: ElementType;
	paragraph?: boolean;
}

const Typography: FC<IProps> = ({
	as: Tag = 'p',
	paragraph = false,
	children,
	...props
}) => (
	<Tag
		className={cx(s.typography, {
			[s[Tag.toString()]]: Tag,
			[s.paragraph]: paragraph,
		})}
		{...props}
	>
		{children}
	</Tag>
);

export default Typography;
