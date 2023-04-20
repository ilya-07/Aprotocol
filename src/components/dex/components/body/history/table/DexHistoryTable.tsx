import { FC } from "react";

import { BtcIcon, TableArrIcon, TableOtherIcon } from "@/assets/icons";

import { dexHistoryTable } from "@/common/text";
import { IDexHistory } from "@/common/types";

const DexHistoryTable: FC = () => {
  return (
    <div className="w-full">
      <table className="w-full bg-[#1B1E28] rounded-smR ">
        <thead className="w-full">
          <tr className="w-full grid  grid-cols-[0.8fr_0.8fr_1.2fr_1.2fr_1.2fr_1fr_1fr_1fr_0.7fr] text-left text-lg text-[#575A64] py-[17px] px-[22px]">
            <th className="flex items-center gap-2">
              <span>Time</span> <TableArrIcon />{" "}
            </th>
            <th className="flex items-center gap-2">
              <span>Type</span> <TableArrIcon />{" "}
            </th>
            <th className="flex items-center gap-2">
              <span>Price USD</span> <TableArrIcon />{" "}
            </th>
            <th className="flex items-center gap-2">
              <span>Price WBNB</span> <TableArrIcon />{" "}
            </th>
            <th className="flex items-center gap-2">
              <span>Amount FWT</span> <TableArrIcon />{" "}
            </th>
            <th className="flex items-center gap-2">
              <span>Total BUSD</span> <TableArrIcon />{" "}
            </th>
            <th className="flex items-center gap-2">
              <span>Total WBNB</span> <TableArrIcon />{" "}
            </th>
            <th>Maker</th>
            <th>Others</th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col gap-[10px] pb-[10px] px-2">
          {dexHistoryTable.map((el: IDexHistory<number>, i) => (
            <tr
              key={i}
              className={`${
                el.color === "blue" ? "text-primaryS" : "text-secondaryS"
              }
            grid grid-cols-[0.8fr_0.8fr_1.2fr_1.2fr_1.2fr_1fr_1fr_1fr_0.7fr] text-left text-xl px-[22px] pt-[27px] pb-[24px] bg-[#151820] rounded-[10px]
            `}
            >
              <td className="text-[#9fa1a4]">{el.time} m</td>
              <td>{el.type}</td>
              <td>${el.priceUsd}</td>
              <td>{el.priceWbnb}</td>
              <td>{el.amount}</td>
              <td>{el.totalBusd}</td>
              <td>{el.totalWbnb}</td>
              <td className="text-[#9fa1a4]">{el.maker}</td>
              <td className="flex items-center gap-[7px] relative">
                <div className="w-[26px] h-[26px]">
                  <BtcIcon />
                </div>
                <span className="relative">
                  <TableOtherIcon color={el.color} />
                  <span className="absolute top-[2px] left-[8px] text-white text-base">
                    {el.others}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DexHistoryTable;
