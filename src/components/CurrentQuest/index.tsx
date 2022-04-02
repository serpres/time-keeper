import React from "react";
import s from "./style.module.scss";

const CurrentQuest = () => {
  return (
    <div className="container" style={{ color: "white", textAlign: "center" }}>
      <div className={`${s.quest} ${s.quest__uncommon}`}>Игра на гитаре</div>
      Текущий квест
    </div>
  );
};

export default CurrentQuest;
