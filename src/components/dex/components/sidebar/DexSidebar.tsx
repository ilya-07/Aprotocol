import { FC, useState } from "react";

import Tabs from "./components/top/Tabs";
import DexPoolInfo from "./components/top/poolInfo/DexPoolInfo";
import DexWarning from "./components/warning/DexWarning";
import DexScrore from "./components/score/DexScrore";
import DexSwap from "./components/top/swap/DexSwap";

enum Tub {
  Swap = "Swap",
  PoolInfo = "PoolInfo",
}
const DexSidebar: FC = () => {
  const [tab, setTab] = useState(Tub.PoolInfo);
  return (
    <div className="w-full">
      <div className="mb-[10px]">
        <div className="mb-[10px]">
          <Tabs tab={tab} setTab={setTab} />
        </div>
        <div className="w-full">
          {tab === Tub.PoolInfo ? <DexPoolInfo /> : <DexSwap />}
        </div>
      </div>
      <div>
        <DexScrore />
      </div>
      <div>
        <DexWarning />
      </div>
    </div>
  );
};

export default DexSidebar;
