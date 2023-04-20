import { FC } from "react";

import { nftTable } from "@/common/text";

const NftPortfolio: FC = () => {
  return (
    <div className="flex flex-wrap gap-[30px]">
      {nftTable.map((el: string, i: number) => (
        <img
          key={i}
          className="flex-[17%] w-[282px] h-[282px] rounded-smR"
          src={el}
          alt=""
        />
      ))}
    </div>
  );
};

export default NftPortfolio;
