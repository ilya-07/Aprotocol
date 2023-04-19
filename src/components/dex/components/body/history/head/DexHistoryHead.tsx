import Title from "@/common/components/Title";
import React from "react";

type Props = {};

const DexHistoryHead = (props: Props) => {
  return (
    <div className="flex items-center gap-[70px]">
      <Title size="large">Trade History</Title>
      <input
        type="text"
        className="flex-grow py-5 px-6 bg-[#1B1E28] rounded-smR text-lg placeholder:text-white"
        placeholder="Search..."
      />
    </div>
  );
};

export default DexHistoryHead;
