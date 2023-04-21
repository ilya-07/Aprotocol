import { FC } from "react";

interface IProps {
  tab: Tub;
  setTab: (el: Tub) => void;
}
enum Tub {
  Swap = "Swap",
  PoolInfo = "PoolInfo",
}

const Tabs: FC<IProps> = ({ tab, setTab }) => {
  return (
    <article className="flex py-[8px] px-2 rounded-smR w-fit text-2xl font-semibold gap-1 bg-[#1B1E28]">
      <button
        className={`${
          tab === Tub.Swap
            ? "bg-primaryS rounded-[10px] shadow-lg shadow-primaryS"
            : ""
        } py-3 px-10 xlg:px-[55px]  flex items-center justify-center duration-500`}
        onClick={() => setTab(Tub.Swap)}
      >
        Swap
      </button>
      <button
        className={`${
          tab === Tub.PoolInfo
            ? "bg-primaryS rounded-[10px] shadow-lg shadow-primaryS"
            : ""
        } py-3 px-[55px]  flex items-center justify-center duration-500`}
        onClick={() => setTab(Tub.PoolInfo)}
      >
        Pool info
      </button>
    </article>
  );
};

export default Tabs;
