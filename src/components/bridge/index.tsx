import React from "react";
import BridgeCurrency from "./components/BridgeCurrency";
import BridgeNetwork from "./components/BridgeNetwork";
import ConnectBtn from "@/common/components/ConnectBtn";

type Props = {};

const BridgePage = (props: Props) => {
  const [color, setColor] = React.useState(false);
  return (
    <div
      className={`${
        color ? "text-[#9d9fa1]" : "text-white"
      } flex flex-col items-center py-[10px]`}
    >
      <div className="mb-[50px]">
        {/* ФИЛЬТРАЦИЯ И ПОДБОР ДАННЫХ С ВАЛЮТОЙ */}
        <BridgeCurrency setColor={setColor} />
      </div>
      <div className="mb-10 w-full">
        {/* ВЫБОР ПО НЕТВОРКУ */}
        <BridgeNetwork />
      </div>
      {/* ПОДКЛЮЧЕНИЕ К КОШЕЛЬКУ */}
      <ConnectBtn />
    </div>
  );
};

export default BridgePage;
