import { FC } from "react";

import Title from "@/common/components/Title";

const DexHistoryHead: FC = () => {
  return (
    <div className="flex w-full items-center gap-[70px]">
      <Title size="large">Trade History</Title>
      <input
        type="text"
        className="flex-grow flex-shrink py-5 px-6 bg-[#1B1E28] rounded-smR text-lg placeholder:text-white"
        placeholder="Search..."
      />
    </div>
  );
};

export default DexHistoryHead;
