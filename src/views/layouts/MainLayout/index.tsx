import React from 'react';

import BottomNavigation from '@components/BottomNavBar';
import CurrentQuest from '@components/CurrentQuest';
import ExperienceBar from '@components/ExperienceBar';
import Header from '@components/Header';
import { QuestsMenu } from '@components/QuestsMenu';
import Timer from '@components/Timer';

import s from './style.module.scss';

const MainLayout = () => (
	<div className={s.appContainer}>
		<Header />
		<Timer />
		<CurrentQuest />
		<BottomNavigation />
		<QuestsMenu />
	</div>
);

export default MainLayout;
