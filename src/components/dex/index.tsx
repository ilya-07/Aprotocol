import React from "react";
import DexHeader from "./components/header/DexHeader";

type Props = {};

const DexPage = (props: Props) => {
  return (
    <div className="pl-5 pr-6 pt-5">
      <div className="mb-6">
        <DexHeader />
      </div>
      <div></div>
    </div>
  );
};

export default DexPage;
