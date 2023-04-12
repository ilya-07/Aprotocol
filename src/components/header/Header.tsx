import BtcSVG from "@/assets/icons/Btc";
import BnbSVG from "@/assets/icons/bnb";
import EthSVG from "@/assets/icons/eth";
import { authState } from "@/atom/atomAuth";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};
const headerText = [
  {
    text: "Bitcoin BTC",
    price: 28.39,
    icon: <BtcSVG />,
    white: false,
  },
  {
    text: "Ethereum ETH",
    price: 1.81,
    icon: <EthSVG />,
    white: true,
  },
  {
    text: "BNB BNB",
    price: 315.2,
    icon: <BnbSVG />,
    white: false,
  },
];
const Header = (props: Props) => {
  const [auth, setAuth] = useRecoilState(authState);
  return (
    <header className="py-5 px-6 flex items-center gap-[55px]">
      <div className="flex justify-between flex-grow gap-[40px]">
        {/* СТОЛБЦЫ С ПОКАЗОМ ВАЛЮТЫ И ЦЕНЫ  */}
        {headerText.map((el, i: number) => (
          <article
            key={i}
            className="flex justify-between flex-[33%] py-3 bg-[#1b1e28] rounded-[15px] pl-[14px] pr-5 font-medium text-lg items-center"
          >
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10">{el.icon}</div>
              <span>{el.text}</span>
            </div>
            <span className={`${el.white ? "text-white" : "text-primaryS"}`}>
              {el.price}$
            </span>
          </article>
        ))}
      </div>
      {/* КОНПКА ПОДКЛЮЧЕНИЯ */}
      <button
        onClick={() => setAuth(true)}
        className="w-[230px] py-5 px-[35px] rounded-[15px] headerBtn text-black text-xl font-semibold"
      >
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
