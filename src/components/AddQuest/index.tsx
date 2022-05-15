import React from 'react';

import Input from '@components/Common/Input';
import Typography from '@components/Common/Typography';

import s from './style.module.scss';

const AddQuest = () => (
	<div className={s.container}>
		<Typography>Новый квест:</Typography>
		<Input placeholder="Название квеста" />
	</div>
);

export default AddQuest;
