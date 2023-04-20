import { FC } from "react";

import { modalCUrrency } from "@/common/text";
import { IModalCurrency } from "@/common/types";

import Marquee from "react-fast-marquee";

const DexMarque: FC = () => {
  return (
    <div className="w-full">
      <Marquee gradient={false} className="gap-5 flex  flex-grow flex-shrink">
        {modalCUrrency.map((el: IModalCurrency, i: number) => (
          <div key={i} className="flex items-center gap-[10px] mx-[10px]">
            <div className="w-[34px] h-[34px]">{<el.icon />}</div>
            <span className="font-medium text-lg">
              #{i + 1} {el.type}
            </span>
          </div>
        ))}

        {modalCUrrency.map((el: IModalCurrency, i: number) => (
          <div key={i} className="flex items-center gap-[10px] mx-[10px]">
            <div className="w-[34px] h-[34px]">{<el.icon />}</div>
            <span className="font-medium text-lg">
              #{i + 1} {el.type}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default DexMarque;
