import React from "react";
import StakingPage from "@/components/staking";
type Props = {};

const Staking = (props: Props) => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow flex justify-center items-center">
      <StakingPage />
    </div>
  );
};

export default Staking;
