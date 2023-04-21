import { TableArrIcon } from "@/assets/icons";
import { GraphicTub } from "@/common/types";
import { FC, useState } from "react";
const getTime = ["5m", "1h", "6h", "24h", "7d"];
const DataTab: FC = () => {
  const [time, setTime] = useState(getTime[0]);
  return (
    <div className="flex flex-col items-end">
      <span className="text-primaryS inline-flex gap-[10px] items-center py-1 pr-2 pl-2 mb-6 rounded-[10px] bg-[#151820] w-fit font-medium text-lg">
        <span>
          <TableArrIcon color="#0050FF" />
        </span>
        <span>-2.35%</span>
      </span>
      <span className="text-[40px] mb-[9px] font-semibold">$0.002814</span>
      <span className="text-secondaryS font-medium text-xl mb-3 flex items-center gap-[10px]">
        <span>
          <TableArrIcon color="#ADFF00" />
        </span>
        <span>$0.00006768</span>
      </span>
      <div className="font-medium text-lg">
        <div className="grid grid-cols-5 grid-rows-[auto_1fr] rounded-[10px] bg-[#151820] gap-1 px-3 py-1 mb-[2px]">
          {getTime.map((el: string, i: number) => (
            <span
              onClick={() => setTime(el)}
              className={`${
                el === time ? "bg-primaryS" : "bg-[#151820]"
              } rounded-[10px] flex items-center justify-center cursor-pointer duration-500`}
              key={i}
            >
              {el}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-5 grid-rows-[auto_1fr] gap-1 px-3 py-1">
          <div className="flex items-center justify-center flex-col">
            <div className="text-[#8d8e93]">Txs</div>
            <div>9</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="text-[#8d8e93]">Buys</div>
            <div>9</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="text-[#8d8e93]">Sells</div>
            <div>9</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="text-[#8d8e93]">Vol.</div>
            <div>2.5K</div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="text-[#8d8e93]">% Var.</div>
            <div className="text-primaryS">-2.35%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTab;
