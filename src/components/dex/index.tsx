import React from "react";
import DexHeader from "./components/header/DexHeader";
import DexBody from "./components/body";
import DexSidebar from "./components/sidebar/DexSidebar";

type Props = {};

const DexPage = (props: Props) => {
  return (
    <div className="pl-5 pr-6 pt-5 pb-[70px]">
      <div className="mb-6">
        <DexHeader />
      </div>
      <div className="grid pr-5 w-full grid-cols-[77%_400px] gap-5">
        <div className="w-full">
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
