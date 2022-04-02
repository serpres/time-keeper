import React from "react";
import s from "./style.module.scss";

const BottomNavigation = () => {
  return (
    <div className={s.container}>
      <div className={s.nav}>
        <a href="#" className={s.nav__link}>
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
      </div>
    </div>
  );
};

export default BottomNavigation;
