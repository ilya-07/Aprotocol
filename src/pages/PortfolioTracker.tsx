import { images } from "@/assets/img";
import Title from "@/common/components/Title";
import React from "react";

type Props = {};

const PortfolioTracker = (props: Props) => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow  flex justify-center items-center pt-[139px] pb-40">
      <div className="px-[215px] py-[130px] flex flex-col items-center bgRect">
        {/* КАРТИНКА КУВШИНА */}
        <img className="mb-12" src={images.subtract} alt="" />
        {/* ЗАГОЛОВОК */}
        <div className="mb-9">
          <Title>No Connected Wallet</Title>
        </div>
        {/* КОНПКА ПОДКЛЮЧЕНИЯ */}
        <button className="py-[18px] pl-8 flex justify-center items-center pr-[89px] rounded-casualR border-2 border-white relative after:absolute after:content-arrR after:top-1/2 after:translate-y-[-38%] after:right-[30px]">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default PortfolioTracker;
