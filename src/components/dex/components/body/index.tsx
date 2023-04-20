import { FC } from "react";

import DexHistory from "./history/DexHistory";

const DexBody: FC = () => {
  return (
    <>
      <div className="rounded-smR py-8 px-9 bg-[#1b1e28] w-full mb-[62px]"></div>
      <div>
        <DexHistory />
      </div>
    </>
  );
};

export default DexBody;
