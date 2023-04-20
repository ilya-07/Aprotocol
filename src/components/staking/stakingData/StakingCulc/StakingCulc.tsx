import { FC, useState } from "react";

import ConnectBtn from "@/common/components/ConnectBtn";

const StakingCulc: FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <article>
      <div className="flex items-center mb-9 font-semibold justify-between">
        <span className=" text-3xl">Enter the amount</span>
        <div className="py-3 pr-4 pl-7 rounded-[30px] border flex gap-[35px]">
          <span className="text-[17px]">Amoun able</span>
          <span className="text-[15px]">100 APR</span>
        </div>
      </div>
      <div className="flex ">
        <div className="flex rounded-[60px] border-2 pl-6 pr-5 ">
          <input
            value={value}
            onChange={(el) => setValue(el.target.value)}
            placeholder="0.0"
            className="bg-transparent placeholder:text-white flex-shrink pr-4 text-2xl font-semibold placehplder:text-2xl placehplder:font-semibold"
            type="text"
          />
          <div className="gap-4 flex items-center">
            <span className="text-2xl font-semibold">≈ $0.0</span>
            <button className="font-semibold text-[15px] py-[10px] px-4 bg-primaryS rounded-[20px]">
              MAX
            </button>
          </div>
        </div>
        <div className="ml-4">
          <ConnectBtn />
        </div>
      </div>
    </article>
  );
};

export default StakingCulc;
