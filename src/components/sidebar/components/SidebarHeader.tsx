import React from "react";
import mainLogo from "../../../../public/mainLogo.svg";
import TelegramSVG from "@/assets/icons/telegram";
import DiscordSVG from "@/assets/icons/discord";
import TwitterSVG from "@/assets/icons/twitter";
import { Link } from "react-router-dom";

type Props = {};

const SidebarHeader = (props: Props) => {
  return (
    <div className="pl-[33px] pr-[69px]">
      <Link to="/">
        <img className="mb-[30px]" src={mainLogo} alt="" />
      </Link>
      <div className="flex w-full justify-between">
        <TelegramSVG />
        <DiscordSVG />
        <TwitterSVG />
      </div>
    </div>
  );
};

export default SidebarHeader;
