import { nftTable } from "@/common/text";
import React from "react";

type Props = {};

const NftPortfolio = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-[30px]">
      {nftTable.map((el: string, i: number) => (
        <img
          className="flex-[17%] w-[282px] h-[282px] rounded-smR"
          src={el}
          alt=""
        />
      ))}
    </div>
  );
};

export default NftPortfolio;
