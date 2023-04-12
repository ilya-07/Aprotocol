import React from "react";

type Props = {};

const NftPortfolioHead = (props: Props) => {
  return (
    <div className="flex gap-6 font-bold items-end">
      <span className="text-[30px]">261 240 496$</span>
      <span className="text-xl text-secondaryS">+2,5% (6 333 222 $)</span>
    </div>
  );
};

export default NftPortfolioHead;
