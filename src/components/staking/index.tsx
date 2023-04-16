import React from "react";
import StakingTab from "./stakingTab/StakingTab";
import StakingCulc from "./stakingData/StakingCulc/StakingCulc";
import StakingBody from "./stakingData/StakingBody/StakingBody";

type Props = {};

const StakingPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      {/* ТАБУЛЯЦИЯ ПО СТЕКИНГУ */}
      <div className="mb-6">
        <StakingTab />
      </div>
      <div className="">
        {/* ШАПКА В СТРАНИЦ Т.Е. БЛОК С КАЛЬКУЛЯТОРОМ */}
        <div className="mb-[30px]">
          <StakingCulc />
        </div>
        {/* НИЖНИЕ БЛОКИ С ТЕКСТОМ */}
        <StakingBody />
      </div>
    </div>
  );
};

export default StakingPage;
