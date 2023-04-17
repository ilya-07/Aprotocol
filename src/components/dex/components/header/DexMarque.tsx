import { modalCUrrency } from "@/common/text";
import { IModalCurrency } from "@/common/types";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const DexMarque = (props: Props) => {
  return (
    <div>
      <Marquee gradient={false} className="gap-5 flex  ">
        {modalCUrrency.map((el: IModalCurrency, i: number) => (
          <div className="flex items-center gap-[10px] mx-[10px]">
            <div className="w-[34px] h-[34px]">{<el.icon />}</div>
            <span className="font-medium text-lg">
              #{i + 1} {el.type}
            </span>
          </div>
        ))}

        {modalCUrrency.map((el: IModalCurrency, i: number) => (
          <div className="flex items-center gap-[10px] mx-[10px]">
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
