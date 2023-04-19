import { poolInfo } from "@/common/text";
import React from "react";

type Props = {};

const DexPoolInfo = (props: Props) => {
  return (
    <div className="rounded-smR bg-[#1B1E28] px-[15px] flex flex-col items-center pt-8 pb-[18px]">
      <h3 className="mb-6 font-medium text-2xl">PancakeSwap V2 Pool Info</h3>
      <div className="w-full flex flex-col gap-4">
        {poolInfo.map((el, i) => (
          <article className="text-sm flex flex-col gap-2" key={i}>
            <div className="flex justify-between w-full bg-[#0B0E14] py-[7px] px-2 rounded-[10px]">
              <span>Total liquidity</span>
              <span className="font-medium">{el.price}</span>
            </div>
            <div className="flex justify-between w-full py-[7px] px-2">
              <span>Pool created</span>
              <span className="font-medium">{el.data}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default DexPoolInfo;
