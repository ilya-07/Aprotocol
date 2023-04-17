import React from "react";
import DexMarque from "./DexMarque";
import FairSVG from "@/assets/icons/fair";
import BtcSVG from "@/assets/icons/Btc";

type Props = {};

const DexHeader = (props: Props) => {
  return (
    <div className="grid grid-cols-[12%_69.8%_19.2%] items-center bg-[#1b1e28] py-[5px] px-[6px] rounded-smR">
      <div className="flex gap-3 items-center px-6 py-4 rounded-[10px] bg-[#0b0e14]">
        <FairSVG />
        <span className="text-2xl">Hot pairs</span>
      </div>
      <DexMarque />
      <div className="flex items-center gap-2">
        <div className="flex gap-[10px] items-center bg-[#0B0E14] rounded-[10px] p-[14px] font-semibold text-2xl">
          <div className="w-[30px] h-[30px]">
            <BtcSVG />
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
