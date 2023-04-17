import { images } from "@/assets/img";
import Title from "@/common/components/Title";
import React from "react";

type Props = {};

const PortfolioHeader = (props: Props) => {
  return (
    <article className="flex gap-[70px] py-5 pl-7 bg-[#1B1E28] rounded-[15px] items-center">
      {/* КАРТИНКА АВАТАРА */}
      <img
        className="w-[160px] h-[160px] rounded-[50%]"
        src={images.nftAvatar}
        alt=""
      />
      {/* ДАННЫЕ ОК КОШЕЛЬКЕ ПОЛЬЗОВАТЕЛЯ */}
      <div className="flex gap-10 flex-grow items-end">
        <Title size="large">261 240 496$</Title>
        <span className="text-xl text-secondaryS">+2,5% (6 333 222 $)</span>
        <span className="text-xl text-greyS">0xd8da..6045</span>
      </div>
    </article>
  );
};

export default PortfolioHeader;
