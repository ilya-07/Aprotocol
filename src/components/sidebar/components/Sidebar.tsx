import React from "react";
import SidebarHeader from "./SidebarHeader";
import Navigation from "./Navigation";
import Exit from "./exit/Exit";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-blueGradient fixed top-0 left-0 h-screen w-[250px] bgBlack pt-[30px] pb-[49px] flex flex-col justify-between">
      {/* ШАПКА SIDEBAR */}
      <div>
        <SidebarHeader />
      </div>
      {/* НАВИГАЦИЯ */}
      <div className="pr-[18px]">
        <Navigation />
      </div>
      {/* КНОПКА ВЫХОДА */}
      <div>
        <Exit />
      </div>
    </div>
  );
};

export default Sidebar;
