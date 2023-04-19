import React from "react";

type Props = {};

const DexWarning = (props: Props) => {
  return (
    <div className="py-5 pl-6 pr-9 rounded-smR bg-[#1B1E28]">
      <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#141820] font-medium text-[35px] mb-[10px] rounded-[50%]">
        !
      </span>
      <p className="text-lg">
        Allna Protocol uses TradingView technology to display trading data on
        charts. TradingView is a global charting platform and a social network
        for traders and investors, offering state-of-the-art charts supplied
        with high-performance data covering all possible assets. Track top
        symbols, e.g. <span className="underline">BTCUSD</span>, or dive into an
        advanced market analysis with more sophisticated data like{" "}
        <span className="underline">crypto market</span> cap to always stay on
        top of where the markets are moving and be prepared for a next trade.
      </p>
    </div>
  );
};

export default DexWarning;
