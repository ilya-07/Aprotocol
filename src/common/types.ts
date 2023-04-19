import BnbSVG from "../assets/icons/bnb";

export enum NavigationType {
  PortfolioTracker = "portfolioTracker",
  Dex = "dex",
  Bridge = "bridge",
  Staking = "staking",
  AiAudit = "aiaudit",
  Quests = "quests",
}

export enum Tabs {
  Tokens = "tokens",
  Nft = "nft",
  Transaction = "transaction",
}
export interface IProfileTokensData {
  name: string;
  wallet: string;
  price: number;
  value: number;
  gain: string;
}
export interface IQuests {
  title: string;
  text: string;
  img: string;
}
export interface IModalCurrency {
  type: string;
  icon: typeof BnbSVG;
}
export interface IPoolInfo {
  price: string;
  data: string;
}
