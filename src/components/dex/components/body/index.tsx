import { FC } from "react";

import DexHistory from "./history";
import DexGraphic from "./dexGraphic";

const DexBody: FC = () => {
  return (
    <>
      {/* БЛОК С ГРАФИКОМ */}
      <div className="rounded-smR py-8 px-9 bg-[#1b1e28] w-full mb-[62px]">
        <DexGraphic />
      </div>
      {/* БЛОК TRADE HISTORY Т.Е ТАБЛИЦА НА СРКОЛЛЕ */}
      <div>
        <DexHistory />
      </div>
    </>
  );
};

export default DexBody;
