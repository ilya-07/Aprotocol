import { FC } from "react";

import StakingTab from "./stakingTab/StakingTab";
import StakingCulc from "./stakingData/StakingCulc/StakingCulc";
import StakingBody from "./stakingData/StakingBody/StakingBody";

const StakingPage: FC = () => {
  return (
    <div className="flex flex-col items-center py-[100px]">
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
