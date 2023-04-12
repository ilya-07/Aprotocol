import { authState } from "@/atom/atomAuth";
import React from "react";
import { useRecoilState } from "recoil";
type Props = {};

const Exit = (props: Props) => {
  const [auth, setAuth] = useRecoilState(authState);
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => setAuth(false)}
        className="py-[18px] px-[62px] flex justify-center items-center border border-[#1B1E28] rounded-[15px]"
      >
        Exit
      </button>
    </div>
  );
};

export default Exit;
