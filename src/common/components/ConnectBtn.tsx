import { authState } from "@/atom/atomAuth";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};

const ConnectBtn = (props: Props) => {
  const [auth, setAuth] = useRecoilState(authState);
  return (
    <button
      onClick={() => setAuth(true)}
      className="py-[18px] text-white pl-8 flex justify-center items-center pr-[89px] rounded-casualR border-2 border-white relative after:absolute after:content-arrR after:top-1/2 after:translate-y-[-38%] after:right-[30px]"
    >
      Connect Wallet
    </button>
  );
};

export default ConnectBtn;
