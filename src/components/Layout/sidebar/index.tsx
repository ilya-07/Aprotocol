import { FC } from "react";

import SidebarHeader from "./components/SidebarHeader";
import Navigation from "./components/Navigator";
import Exit from "./components/exit/Exit";

const Sidebar: FC = () => {
  return (
    <div className="bg-blueGradient fixed top-0 left-0 h-screen w-[200px] 2xl:w-[250px] bgBlack pt-[30px] pb-[49px] flex flex-col justify-between">
      {/* ШАПКА SIDEBAR */}
      <div>
        <SidebarHeader />
      </div>
      {/* НАВИГАЦИЯ */}
      <div className="pr-2 2xl:pr-[18px]">
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
