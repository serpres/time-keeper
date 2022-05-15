import React from 'react';

import s from './style.module.scss';

const BottomNavigation = () => (
	<div className={s.container}>
		<nav className={s.nav}>
			<a href="#" className={`${s.nav__link}`}>
				<span className="nav__text">Текущий квест</span>
			</a>

			<a href="#" className={s.nav__link}>
				<span className="nav__text">Цели</span>
			</a>

			<a href="#" className={s.nav__link}>
				<span className="nav__text">Достижения</span>
			</a>

			<a href="#" className={s.nav__link}>
				<span className="nav__text">Статистика</span>
			</a>
		</nav>
	</div>
);

export default BottomNavigation;
