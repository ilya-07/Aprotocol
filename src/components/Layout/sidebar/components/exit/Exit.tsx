import { FC } from "react";

import { authState } from "@/atom/atomAuth";

import { useSetRecoilState } from "recoil";

const Exit: FC = () => {
  const setAuth = useSetRecoilState(authState);
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
