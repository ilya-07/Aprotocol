import { images } from "@/assets/img";
import { authState } from "@/atom/atomAuth";
import Title from "@/common/components/Title";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};

const PortfolioTrackerHidden = (props: Props) => {
  const [auth, setAuth] = useRecoilState(authState);
  console.log(auth);
  return (
    <div className="px-[215px] py-[130px] flex flex-col items-center bgRect pt-[139px] pb-40">
      {/* КАРТИНКА КУВШИНА */}
      <img className="mb-12" src={images.subtract} alt="" />
      {/* ЗАГОЛОВОК */}
      <div className="mb-9">
        <Title>No Connected Wallet</Title>
      </div>
      {/* КОНПКА ПОДКЛЮЧЕНИЯ */}
      <button
        onClick={() => setAuth(true)}
        className="py-[18px] pl-8 flex justify-center items-center pr-[89px] rounded-casualR border-2 border-white relative after:absolute after:content-arrR after:top-1/2 after:translate-y-[-38%] after:right-[30px]"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default PortfolioTrackerHidden;
