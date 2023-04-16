import { images } from "@/assets/img";
import { authState } from "@/atom/atomAuth";
import Title from "@/common/components/Title";
import ConnectBtn from "@/common/components/ConnectBtn";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};

const PortfolioTrackerHidden = (props: Props) => {
  const [auth, setAuth] = useRecoilState(authState);
  console.log(auth);
  return (
    <div className=" pt-[139px] pb-40">
      <div className="px-[215px] py-[130px] flex flex-col items-center bgRect">
        {/* КАРТИНКА КУВШИНА */}
        <img className="mb-12" src={images.subtract} alt="" />
        {/* ЗАГОЛОВОК */}
        <div className="mb-9">
          <Title>No Connected Wallet</Title>
        </div>
        {/* КОНПКА ПОДКЛЮЧЕНИЯ */}
        <ConnectBtn />
      </div>
    </div>
  );
};

export default PortfolioTrackerHidden;
