import { FC } from "react";

import DexHistoryHead from "./head/DexHistoryHead";
import DexHistoryTable from "./table/DexHistoryTable";

const DexHistory: FC = () => {
  return (
    <div className="w-full">
      {/* ШАПКА: ЗАГОЛОВОК И INPUT */}
      <div className="mb-6 w-full">
        <DexHistoryHead />
      </div>
      {/* ТАБЛИЦА */}
      <div>
        <DexHistoryTable />
      </div>
    </div>
  );
};
export default DexHistory;
