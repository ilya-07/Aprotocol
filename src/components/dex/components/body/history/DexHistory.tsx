import { FC } from "react";

import DexHistoryHead from "./head/DexHistoryHead";
import DexHistoryTable from "./table/DexHistoryTable";

const DexHistory: FC = () => {
  return (
    <div className="w-full">
      <div className="mb-6 w-full">
        <DexHistoryHead />
      </div>
      <div>
        <DexHistoryTable />
      </div>
    </div>
  );
};
export default DexHistory;
