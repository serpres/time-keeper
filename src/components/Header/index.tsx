import React from 'react';
import { ReactComponent as Clock } from '@images/svg/clock.svg';

import s from './style.module.scss';

const Header = () => (
	<header className={s.AppHeader}>
		<Clock className={s.logotypeSvg} />
		<h1 className={s.title}>Time Keeper</h1>
	</header>
);

export default Header;
