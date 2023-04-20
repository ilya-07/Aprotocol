import { FC } from "react";

import { BnbIcon, EthIcon } from "@/assets/icons";

const PortfolioTransaction: FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <h2 className="text-[30px] text-[#575A64] mb-5">11 марта 2023</h2>
        <div className="bg-[#1b1e28] py-2 px-3 rounded-smR flex flex-col gap-[10px]">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-4 text-xl items-center bg-[#151820] rounded-[10px] py-7 px-10"
            >
              <div className="flex gap-[30px]">
                <span>19:24</span>
                <span>Receive</span>
                <span className="flex gap-[10px]">
                  <span className="max-w-[34px] max-h-[34px]">
                    <BnbIcon />
                  </span>
                  <span>BSC</span>
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span>0,11 $</span>
                <span className="text-secondaryS">+0.000077 WETH</span>
              </div>
              <div className="flex gap-[10px]">
                <span>From</span>
                <span className="w-[34px] h-[34px]">
                  <EthIcon />
                </span>
                <span className="text-[#a1a3a6]">0xd8da..6045</span>
              </div>
              <div className="flex gap-[10px]">
                <span>Transaction ID</span>
                <span className="text-[#a1a3a6]">0xd8da..6045</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[30px] text-[#575A64] mb-5">11 марта 2023</h2>
        <div className="bg-[#1b1e28] py-2 px-3 rounded-smR flex flex-col gap-[10px]">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-4 text-xl items-center bg-[#151820] rounded-[10px] py-7 px-10"
            >
              <div className="flex gap-[30px]">
                <span>19:24</span>
                <span>Receive</span>
                <span className="flex gap-[10px]">
                  <span className="max-w-[34px] max-h-[34px]">
                    <BnbIcon />
                  </span>
                  <span>BSC</span>
                </span>
              </div>
              <div className="flex gap-[10px]">
                <span>0,11 $</span>
                <span className="text-secondaryS">+0.000077 WETH</span>
              </div>
              <div className="flex gap-[10px]">
                <span>From</span>
                <span className="w-[34px] h-[34px]">
                  <EthIcon />
                </span>
                <span className="text-[#a1a3a6]">0xd8da..6045</span>
              </div>
              <div className="flex gap-[10px]">
                <span>Transaction ID</span>
                <span className="text-[#a1a3a6]">0xd8da..6045</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioTransaction;
