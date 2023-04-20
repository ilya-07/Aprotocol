import { FC } from "react";

import Modal from "@/common/components/Modal";

interface IProps {
  setColor: (el: boolean) => void;
}
const BridgeNetwork: FC<IProps> = ({ setColor }) => {
  return (
    <div className="w-full">
      <div className="flex blueModal justify-between w-full pl-[64px] py-[35px] pr-[22px] border border-primaryS rounded-[20px] mb-[30px]">
        <div className="flex gap-5">
          <span className="text-3xl">From:</span>
          <span className="text-[24px]">100.0</span>
        </div>
        <div>
          <h3 className="mb-[30px] text-3xl mr-12">Select a network</h3>
          <Modal setColor={setColor} />
        </div>
      </div>
      <div className="flex greenModal justify-between w-full  pl-[64px] py-[35px] pr-[22px] border border-secondaryS rounded-[20px]">
        <div className="flex gap-5">
          <span className="text-3xl">To:</span>
          <span className="text-[24px]">99.0</span>
        </div>
        <div>
          <h3 className="mb-[30px] text-3xl mr-12">Select a network</h3>
          <Modal setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default BridgeNetwork;
