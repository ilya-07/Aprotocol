import React from "react";
import DexHistoryHead from "./head/DexHistoryHead";
import DexHistoryTable from "./table/DexHistoryTable";

type Props = {};

const DexHistory = (props: Props) => {
  return (
    <div>
      <div className="mb-6">
        <DexHistoryHead />
      </div>
      <div>
        <DexHistoryTable />
      </div>
    </div>
  );
};
export default DexHistory;
