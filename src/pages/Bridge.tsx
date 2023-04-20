import { FC } from "react";

import BridgePage from "@/components/bridge";

const Bridge: FC = () => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow flex items-center justify-center py-[100px] pb-[130px] overflow-y-hidden">
      <BridgePage />
    </div>
  );
};

export default Bridge;
