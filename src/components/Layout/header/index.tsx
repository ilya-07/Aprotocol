import { useRecoilState } from "recoil";
import { authState } from "@/atom/atomAuth";

import { BnbIcon, BtcIcon, EthIcon } from "@/assets/icons";

type Props = {};
const headerText = [
  {
    text: "Bitcoin BTC",
    price: 28.39,
    icon: <BtcIcon />,
    white: false,
  },
  {
    text: "Ethereum ETH",
    price: 1.81,
    icon: <EthIcon />,
    white: true,
  },
  {
    text: "BNB BNB",
    price: 315.2,
    icon: <BnbIcon />,
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
            className="flex justify-between flex-[33%] py-3 bg-[#1b1e28] rounded-[15px] pl-[14px] pr-5 font-medium text-sm 2xl:text-lg items-center"
          >
            <div className="flex gap-3 2xl:gap-4 items-center">
              <div className="xl:w-10 w-8 xl:h-10 h-8">{el.icon}</div>
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
        className="py-3 2xl:py-5 px-5 2xl:px-[35px] rounded-[15px] headerBtn text-black text-xl font-semibold"
      >
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
