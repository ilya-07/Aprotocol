import { BnbIcon } from "@/assets/icons";

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
  icon: typeof BnbIcon;
}
export interface IPoolInfo {
  price: string;
  data: string;
}
export interface IDexHistory<T> {
  time: number;
  type: string;
  priceUsd: number;
  priceWbnb: number;
  amount: string;
  totalBusd: number;
  totalWbnb: number;
  maker: string;
  others: T;
  color: "green" | "blue";
}
export enum GraphicTub {
  Minute = "5m",
  OneHours = "1h",
  SixHour = "6h",
  Day = "24h",
  Week = "7d",
}
