import DexPage from "@/components/dex";
import React from "react";

type Props = {};

const Dex = (props: Props) => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow">
      <DexPage />
    </div>
  );
};

export default Dex;
