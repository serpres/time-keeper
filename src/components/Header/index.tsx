import React from "react";
import s from "./style.module.scss";
import { ReactComponent as Clock } from "../../images/svg/clock.svg";

const Header = () => {
  return (
    <header className={s.AppHeader}>
      <Clock className={s.logotypeSvg} />
      <h1 className={s.title}>Time Keeper</h1>
    </header>
  );
};

export default Header;
