import { FC, useState } from "react";

import BridgeCurrency from "./components/BridgeCurrency";
import BridgeNetwork from "./components/BridgeNetwork";

import ConnectBtn from "@/common/components/ConnectBtn";

const BridgePage: FC = () => {
  const [color, setColor] = useState(false);
  return (
    <div
      className={`${
        color ? "text-[#9d9fa1]" : "text-white"
      } flex flex-col items-center py-[10px] 
      relative after:absolute after:content-arrB after:top-1/2 after:translate-y-[-50%] after:right-[-100px] after:w-20 after:h-20 after:flex after:justify-center after:items-center after:rounded-[50%] after:border
      `}
    >
      <div className="mb-[50px]">
        {/* ФИЛЬТРАЦИЯ И ПОДБОР ДАННЫХ С ВАЛЮТОЙ */}
        <BridgeCurrency setColor={setColor} />
      </div>
      <div className="mb-10 w-full">
        {/* ВЫБОР ПО НЕТВОРКУ */}
        <BridgeNetwork setColor={setColor} />
      </div>
      {/* ПОДКЛЮЧЕНИЕ К КОШЕЛЬКУ */}
      <ConnectBtn />
    </div>
  );
};

export default BridgePage;
