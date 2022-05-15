import React, { FC } from 'react';

import s from './styles.module.scss';

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

interface IProps extends InputProps {
	placeholder?: string;
	[key: string]: any;
}

const Input: FC<IProps> = ({ placeholder }) => (
	<input placeholder={placeholder} type="text" className={s.input} />
);

export default Input;
