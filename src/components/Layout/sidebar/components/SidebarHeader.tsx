import { DiscordIcon, TelegramIcon, TwitterIcon } from "@/assets/icons";

import { FC } from "react";

import { Link } from "react-router-dom";

const SidebarHeader: FC = () => {
  return (
    <div className="pl-5 2xl:pl-[33px] pr-10 2xl:pr-[69px]">
      <Link to="/">
        <img className="mb-[30px]" src="/mainLogo.svg" alt="" />
      </Link>
      <div className="flex w-full justify-between">
        <TelegramIcon />
        <DiscordIcon />
        <TelegramIcon />
      </div>
    </div>
  );
};

export default SidebarHeader;
