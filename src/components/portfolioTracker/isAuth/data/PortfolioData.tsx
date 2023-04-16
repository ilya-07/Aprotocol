import { Tabs } from "@/assets/types";
import { tabState } from "@/atom/atomTab";
import React from "react";
import { useRecoilState } from "recoil";
import TokensPortfolioHead from "./components/tokens/TokensPortfolioHead";
import NftPortfolioHead from "./components/nft/NftPortfolioHead";
import TransactionPortfolioHead from "./components/transaction/TransactionPortfolioHead";
import PortfolioTokens from "./components/tokens/PortfolioTokens";
import NftPortfolio from "./components/nft/PortfolioNft";
import PortfolioTransaction from "./components/transaction/PortfolioTransaction";
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
        className={`flex justify-between gap-[14px] pb-3 pl-3  mb-4 items-end `}
      >
        {/* ЛЕВАЯ ЧАСТЬ ОТ ТАБОВ, МЕНЯЕТСЯ В ЗАВИСИМОСТИ ОТ ПЕРЕКЛЮЧЕНИЯ */}
        <ShowHead />
        {/* ТАБЫ */}
        <PortfolioTabs />
      </div>
      {/* ИНЫЕ ДАННЫЕ НИЖЕ, ЯВЛЯЮТСЯ КЛЮЧЕВЫМИ И МЕНЯЮТСЯ ОТ ПЕРЕКЛЮЧЕНИЯ */}
      <ShowBody />
    </div>
  );
};

export default PortfolioData;
