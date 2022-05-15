import React from 'react';

import Typography from '@components/Common/Typography';

import s from './style.module.scss';

const CurrentQuest = () => (
	<div className={s.container}>
		<div className={`${s.quest} ${s.quest__epic}`}>Чтение</div>
		<Typography as="h2">Текущий квест</Typography>
	</div>
);

export default CurrentQuest;
