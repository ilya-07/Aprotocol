import { FC } from "react";

import DexMarque from "./DexMarque";

import { FairIcon } from "@/assets/icons";
import { BtcIcon } from "@/assets/icons";

const DexHeader: FC = () => {
  return (
    <div className="grid grid-cols-[12%_52%_19.2%] xl:grid-cols-[12%_57%_19.2%] 2xl:grid-cols-[12%_63%_19.2%] xlg:grid-cols-[12%_69%_19.2%] w-full items-center bg-[#1b1e28] py-[5px] px-[6px] rounded-smR">
      <div className="flex gap-3 items-center px-3 xl:px-6 py-4 xl:py-4  rounded-[10px] bg-[#0b0e14] w-[150px] xl:w-[200px] z-10">
        <FairIcon />
        <span className="text-xl xl:text-2xl">Hot pairs</span>
      </div>
      <div>
        <DexMarque />
      </div>
      <div className="flex items-center gap-2 w-[320px]">
        <div className="flex gap-[10px] items-center bg-[#0B0E14] rounded-[10px] p-[14px] font-semibold text-2xl">
          <div className="w-[30px] h-[30px]">
            <BtcIcon />
          </div>
          <span>FLN</span>
        </div>
        <button className="py-3 px-6 bg-secondaryS rounded-[10px] text-black font-semibold text-2xl greenShadow">
          Live trading
        </button>
      </div>
    </div>
  );
};

export default DexHeader;
