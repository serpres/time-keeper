import React from "react";
import BottomNavigation from "../../../components/BottomNavBar";
import CurrentQuest from "../../../components/CurrentQuest";
import ExperienceBar from "../../../components/ExperienceBar";
import Header from "../../../components/Header";
import { QuestsMenu } from "../../../components/QuestsMenu";
import Timer from "../../../components/Timer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Timer />
      <CurrentQuest />
      <BottomNavigation />
      <ExperienceBar />
      <QuestsMenu />
    </div>
  );
};

export default MainLayout;
