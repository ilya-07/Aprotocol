import { Tabs } from "@/assets/types";
import { atom } from "recoil";
export const tabState = atom({
  key: "tabState",
  default: Tabs.Tokens,
});
