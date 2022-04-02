import React, { FC } from "react";
import s from "./style.module.scss";

const Button: FC = ({ children }) => {
  return <button className={s.button}>{children}</button>;
};

export default Button;
