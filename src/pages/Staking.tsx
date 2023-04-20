import { FC } from "react";

import StakingPage from "@/components/staking";

const Staking: FC = () => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow flex justify-center items-center">
      <StakingPage />
    </div>
  );
};

export default Staking;
