import { FC } from "react";

import { BtcIcon, TwitterIcon } from "@/assets/icons";

interface IWallet {
  wallet: string;
  currency?: string;
  payer?: string;
}

const wallets: Array<IWallet> = [
  { wallet: "0x90...66c7", currency: "FWT" },
  { wallet: "0x90...66c7", currency: "BUSD" },
  { wallet: "0x90...66c7", payer: "Pair" },
];
const DataType: FC = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center font-medium mb-5">
        <div className="w-[50px] h-[50px]">
          <BtcIcon />
        </div>
        <span className="text-3xl ml-[25px]">FWT</span>
        <span className="text-lg ml-[10px]">BUSD</span>
      </div>
      <div className="text-[#8d8e93] text-base xlg:text-lg font-medium flex items-center 2xl:gap-[10px] xlg:gap-[30px] mb-5">
        <span>FreewayToken</span>
        <div className="flex items-center 2xl:gap-[10px] xlg:gap-[30px]">
          {wallets.map((el: IWallet, i: number) => (
            <div key={i} className="flex items-center gap-[5px]">
              <span>{el.currency || el.payer}</span>
              <span>{el.wallet}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <TwitterIcon />
        <TwitterIcon />
        <TwitterIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};
export default DataType;
