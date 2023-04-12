import { Tabs } from "@/assets/types";
import { tabState } from "@/atom/atomTab";
import React from "react";
import { useRecoilState } from "recoil";
import TokensPortfolioHead from "../tokens/TokensPortfolioHead";
import NftPortfolioHead from "../nft/NftPortfolioHead";
import TransactionPortfolioHead from "../transaction/TransactionPortfolioHead";
import PortfolioTokens from "../tokens/PortfolioTokens";
import NftPortfolio from "../nft/NftPortfolio";
import PortfolioTransaction from "../transaction/PortfolioTransaction";
import PortfolioTabs from "../tabs/PortfolioTabs";

type Props = {};

const PortfolioData = (props: Props) => {
  const [tab, setTab] = useRecoilState(tabState);
  const ShowHead = () => {
    if (tab === Tabs.Tokens) {
      return <TokensPortfolioHead />;
    } else if (tab === Tabs.Nft) {
      return <NftPortfolioHead />;
    } else if (tab === Tabs.Transaction) {
      return <TransactionPortfolioHead />;
    }
    {
      return <></>;
    }
  };
  const ShowBody = () => {
    if (tab === Tabs.Tokens) {
      return <PortfolioTokens />;
    } else if (tab === Tabs.Nft) {
      return <NftPortfolio />;
    } else if (tab === Tabs.Transaction) {
      return <PortfolioTransaction />;
    }
    {
      return <></>;
    }
  };
  return (
    <div>
      <div
        className={`flex justify-between gap-[14px] pb-3 pl-3  mb-4 pr-11 items-end ${
          tab === Tabs.Tokens ? "border  border-[#F9EBEB]" : ""
        }`}
      >
        <ShowHead />
        <PortfolioTabs />
      </div>
      <ShowBody />
    </div>
  );
};

export default PortfolioData;
