import { FC } from "react";
import Modal from "@/common/components/Modal";

interface IProps {
  setColor: (el: boolean) => void;
}

const BridgeCurrency: FC<IProps> = ({ setColor }) => {
  return (
    <div className="flex justify-between font-semibold w-full gap-[164px]">
      <div>
        <h3 className="text-3xl mb-[30px]">Amount of Token</h3>
        <input
          placeholder="0"
          className="w-[206px] text-2xl bg-transparent py-[18px] rounded-[60px] border-2 placeholder:text-white px-6"
          type="text"
        />
      </div>
      <div className="pr-7">
        <h3 className="text-3xl mb-[30px]">Select a currency</h3>
        <Modal setColor={setColor} />
      </div>
    </div>
  );
};

export default BridgeCurrency;
