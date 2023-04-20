import { FC } from "react";

import DexHeader from "./components/header/DexHeader";
import DexBody from "./components/body";
import DexSidebar from "./components/sidebar/DexSidebar";

const DexPage: FC = () => {
  return (
    <div className="pl-2 2xl:pl-5 pr-2 2xl:pr-6 pt-5 pb-[70px] w-full">
      <div className="mb-6 w-full pr-2">
        <DexHeader />
      </div>
      <div className="grid w-full pr-5 xlg:pr-0 grid-cols-[58%_369px] xl:grid-cols-[63%_369px] 2xl:grid-cols-[70%_369px] xlg:grid-cols-[73%_400px] gap-5">
        <div className="w-full flex-shrink">
          <DexBody />
        </div>
        <div className="flex justify-end w-full">
          <DexSidebar />
        </div>
      </div>
    </div>
  );
};

export default DexPage;
