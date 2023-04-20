import { FC, useState } from "react";

enum Tub {
  Stake = "Stake",
  Unstake = "Unstake",
}
const StakingTab: FC = () => {
  const [tab, setTab] = useState(Tub.Stake);
  return (
    <article className="flex py-[8px] px-2 rounded-smR w-fit text-2xl font-semibold gap-1 bg-[#1B1E28]">
      <button
        className={`${
          tab === Tub.Stake
            ? "bg-primaryS rounded-[10px] shadow-lg shadow-primaryS"
            : ""
        } py-3 px-[55px] w-[187px] flex items-center justify-center`}
        onClick={() => setTab(Tub.Stake)}
      >
        Stake
      </button>
      <button
        className={`${
          tab === Tub.Unstake
            ? "bg-primaryS rounded-[10px] shadow-lg shadow-primaryS"
            : ""
        } py-3 px-[55px] w-[187px] flex items-center justify-center`}
        onClick={() => setTab(Tub.Unstake)}
      >
        Upcoming
      </button>
    </article>
  );
};

export default StakingTab;
