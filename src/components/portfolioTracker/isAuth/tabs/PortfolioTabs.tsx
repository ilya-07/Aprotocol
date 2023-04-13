import { Tabs } from "@/assets/types";
import { tabState } from "@/atom/atomTab";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};

const PortfolioTabs = (props: Props) => {
  const [tab, setTab] = useRecoilState(tabState);
  return (
    <article className="flex py-[8px] px-2 rounded-smR gap-1 bg-[#1B1E28]">
      <button
        className={`${
          tab === Tabs.Tokens ? "bg-primaryS rounded-[10px]" : ""
        } py-3 px-7`}
        onClick={() => setTab(Tabs.Tokens)}
      >
        Tokens
      </button>
      <button
        className={`${
          tab === Tabs.Nft ? "bg-primaryS rounded-[10px]" : ""
        } py-3 px-7`}
        onClick={() => setTab(Tabs.Nft)}
      >
        NFTs
      </button>
      <button
        className={`${
          tab === Tabs.Transaction ? "bg-primaryS rounded-[10px]" : ""
        } py-3 px-7`}
        onClick={() => setTab(Tabs.Transaction)}
      >
        Transactions
      </button>
    </article>
  );
};

export default PortfolioTabs;