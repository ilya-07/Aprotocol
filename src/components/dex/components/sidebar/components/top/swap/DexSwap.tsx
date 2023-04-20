import { BtcIcon, FilterArrIcon, JugIcon } from "@/assets/icons";
import { FC } from "react";

const DexSwap: FC = () => {
  return (
    <div className="bg-[#1B1E28] rounded-smR px-[15px] pt-8 pb-5 flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-6">Swap</h3>
      <div className="mb-[15px] w-full">
        <div className="flex flex-col mb-6 font-medium text-2xl items-center justify-between bg-[#141820]  px-3 py-[10px] rounded-[10px]">
          <div className="flex justify-between w-full mb-1">
            <span className="">Max</span>
            <span className="flex">
              <JugIcon /> 0
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>1</span>
            <div className="flex items-center gap-[10px]">
              <span>~0.00$</span>
              <div className="flex gap-[5px] items-center px-[9px] py-[7px] rounded-[10px] bg-[#0B0E14]">
                <span className="w-5 h-5">
                  <BtcIcon />
                </span>
                <span>FWT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 flex justify-between items-center w-full">
          <div className="flex items-center gap-7">
            <span>9</span>
            <span className="text-sm ml-3 font-medium flex items-center gap-[10px]">
              <span>1 FWT = 0.004266433231 BUSD</span>
              <FilterArrIcon />
            </span>
          </div>
          <div className="w-9 h-9 rounded-[50%] rotate-90 scale-125 bg-[#141820] flex items-center justify-center">
            <FilterArrIcon />
          </div>
        </div>
        {/* /vgbf */}
        <div className="flex flex-col font-medium text-2xl items-center justify-between bg-[#141820]  px-3 py-[10px] rounded-[10px]">
          <div className="flex justify-end w-full mb-1">
            <span className="flex">
              <JugIcon /> 0
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>1</span>
            <div className="flex items-center gap-[10px]">
              <span>~0.00$</span>
              <div className="flex gap-[5px] items-center px-[9px] py-[7px] rounded-[10px] bg-[#0B0E14]">
                <span className="w-5 h-5">
                  <BtcIcon />
                </span>
                <span>FWT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-7 py-3 rounded-[10px] bg-[#141820] mb-3">
        <div className="mb-[30px] text-[30px] font-semibold">
          More information
        </div>
        <div className="flex flex-col gap-[25px] pb-[55px]">
          <div className="flex flex-col gap-[10px]">
            <span className="text-2xl text-[#a1a3a6] flex gap-3 items-center">
              <span>Minimum received</span>
              <span className="w-5 h-5 bg-[#0B0E14] rounded-[50%] flex items-center justify-center text-sm font-semibold">
                !
              </span>
            </span>
            <span className="text-2xl font-medium">0.004266433231 BUSD</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-2xl text-[#a1a3a6] flex gap-3 items-center">
              <span>Gas fee</span>
              <span className="w-5 h-5 bg-[#0B0E14] rounded-[50%] flex items-center justify-center text-sm font-semibold">
                !
              </span>
            </span>
            <span className="text-2xl font-medium">0.3424$</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-2xl text-[#a1a3a6] flex gap-3 items-center">
              <span>Price imoact</span>
              <span className="w-5 h-5 bg-[#0B0E14] rounded-[50%] flex items-center justify-center text-sm font-semibold">
                !
              </span>
            </span>
            <span className="text-2xl font-medium">0.01%</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-7 py-3 rounded-[10px] bg-[#141820]">
        <span className="text-2xl font-semibold">Insufficient balance</span>
        <span className="w-[38px] h-[38px] bg-primaryS flex items-center justify-center rounded-[50%] text-[26px] font-semibold">
          !
        </span>
      </div>
    </div>
  );
};

export default DexSwap;
