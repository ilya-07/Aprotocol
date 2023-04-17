import BridgePage from "@/components/bridge";
import React from "react";

type Props = {};

const Bridge = (props: Props) => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow flex items-center justify-center py-[100px] pb-[130px] overflow-y-hidden">
      <BridgePage />
    </div>
  );
};

export default Bridge;
