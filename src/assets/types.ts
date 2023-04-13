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
