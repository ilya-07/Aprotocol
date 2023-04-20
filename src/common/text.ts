import { BnbIcon, BtcIcon, EthIcon } from "@/assets/icons";

import { images } from "@/assets/img";

import {
  IModalCurrency,
  IPoolInfo,
  IProfileTokensData,
  IQuests,
} from "@/common/types";

export const profileTokensData: Array<IProfileTokensData> = [
  {
    wallet: "450 066 600 000 000 000 000 000..",
    price: 0.00000055,
    value: 261_240_496,
    gain: "+2,5% (6 333 222$)",
    name: "Ethereum",
  },
  {
    wallet: "450 066 600 000 000 000 000 000..",
    price: 0.00000055,
    value: 261_240_496,
    gain: "-2,5% (6 333 222$)",
    name: "Ethereum",
  },
  {
    wallet: "450 066 600 000 000 000 000 000..",
    price: 0.00000055,
    value: 261_240_496,
    gain: "+2,5% (6 333 222$)",
    name: "Ethereum",
  },
  {
    wallet: "450 066 600 000 000 000 000 000..",
    price: 0.00000055,
    value: 261_240_496,
    gain: "+2,5% (6 333 222$)",
    name: "Ethereum",
  },
  {
    wallet: "450 066 600 000 000 000 000 000..",
    price: 0.00000055,
    value: 261_240_496,
    gain: "+2,5% (6 333 222$)",
    name: "Ethereum",
  },
];
export const nftTable: string[] = [
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
  images.nftTable,
];
export const questsText: Array<IQuests> = [
  {
    title: "THE MOST ACTIVE USER",
    text: "Be an active user in Telegram chat and get a chance to win 15, 50, 100 USDT prizes!",
    img: images.quests1,
  },
  {
    title: "+20% BONUS!",
    text: "Early investors who are with us until the cap reaches 100BNB will receive a +20% bonus to the initial investment!",
    img: images.quests2,
  },
  {
    title: "THE BIGGEST CONTRIBUTOR",
    text: "Invest the most BNB in one transaction during the Presale. You will be the winner of 3 BNB from the Allna Protocol team.",
    img: images.quests3,
  },
  {
    title: "TWITTER POST",
    text: "Like the tweet, retweet it, tag three friends, and win a $100 reward!",
    img: images.quests4,
  },
];
export const modalCUrrency: Array<IModalCurrency> = [
  { type: "USDT", icon: BnbIcon },
  { type: "BTC", icon: BtcIcon },
  { type: "ETH", icon: EthIcon },
  { type: "BNB", icon: BnbIcon },
  { type: "USDT", icon: BnbIcon },
  { type: "BTC", icon: BtcIcon },
  { type: "ETH", icon: EthIcon },
  { type: "BNB", icon: BnbIcon },
  { type: "BNB", icon: BtcIcon },
  { type: "CARDANO", icon: EthIcon },
  { type: "USDT", icon: BnbIcon },
];
export const poolInfo: Array<IPoolInfo> = [
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
  {
    price: "$105.31K",
    data: "16.07.2022, 17:25",
  },
];
