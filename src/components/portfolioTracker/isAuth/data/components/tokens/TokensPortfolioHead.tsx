import React from "react";

type Props = {};

const TokensPortfolioHead = (props: Props) => {
  return (
    <div>
      <div className="flex gap-[30px] mb-6 items-end">
        <span className="text-6xl font-semibold">Actives</span>
        <span className="font-medium text-[30px]">261 240 496$</span>
        <span className="text-xl text-secondaryS">+2,5% (6 333 r $)</span>
      </div>
      <div className="flex gap-[30px] items-center text-20xl">
        <span>Reflexer</span>
        <span className="font-medium">261 240$</span>
        <span className="font-medium">100%</span>
      </div>
    </div>
  );
};

export default TokensPortfolioHead;
