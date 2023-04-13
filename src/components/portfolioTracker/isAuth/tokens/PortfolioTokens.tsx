import EthSVG from "@/assets/icons/eth";
import { IProfileTokensData } from "@/assets/types";
import { profileTokensData } from "@/common/text";
import React from "react";

type Props = {};

const PortfolioTokens = (props: Props) => {
  return (
    <div>
      <article className="border border-[#FFF3F3] w-full pr-10 pl-4 flex pb-[65px] pt-5 flex-col gap-4">
        {profileTokensData.map((el: IProfileTokensData, i: number) => (
          <table key={i} className="bg-[#1B1E28] w-full rounded-smR">
            <thead className="w-full  block pl-[50px] pr-24 pt-[35px] mb-4">
              <tr className="grid grid-cols-[27%_25%_33%_15%] text-left text-xl text-[#575A64]">
                <th className="font-normal">Assets</th>
                <th className="font-normal">Price</th>
                <th className="font-normal">Balance</th>
                <th className="font-normal">Value</th>
              </tr>
            </thead>
            <tbody className="w-full block pl-[50px] pr-24 pb-[28px]">
              <tr className="grid grid-cols-[27%_25%_33%_15%]">
                <td>
                  <div className="flex gap-4 items-center mb-3">
                    <div className="w-[34px] h-[34px]">
                      <EthSVG />
                    </div>
                    <span>{el.name}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-5 h-5">
                      <EthSVG />
                    </div>
                    <span>{el.name}</span>
                  </div>
                  <div></div>
                </td>
                <td>{el.price.toFixed(8)}$</td>
                <td>{el.wallet}$</td>
                <td className="flex flex-col">
                  <span className="mb-4">{el.value}$</span>
                  <span
                    className={
                      el.gain[0] === "+" ? "text-secondaryS" : "text-red-300"
                    }
                  >
                    {el.gain}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </article>
    </div>
  );
};

export default PortfolioTokens;
