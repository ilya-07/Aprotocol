import { Tabs } from "@/common/types";
import { atom } from "recoil";
export const tabState = atom({
  key: "tabState",
  default: Tabs.Tokens,
});
