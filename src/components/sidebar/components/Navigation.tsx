import AiAuditSVG from "@/assets/icons/aiAudit";
import BridgeSVG from "@/assets/icons/bridge";
import DexSVG from "@/assets/icons/dex";
import { PersonSVG } from "@/assets/icons/person";
import QuestsSVG from "@/assets/icons/quests";
import StakingSVG from "@/assets/icons/staking";
import { NavigationType } from "@/common/types";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Navigation = (props: Props) => {
  const [clicked, setClicked] = React.useState(NavigationType.PortfolioTracker);
  const activeLink = `flex  gap-3 duration-500 group py-5 px-6 items-center bg-[#101319] rounded-tr-[60px] 
  rounded-br-[60px] border text-primaryS border-[#1B1E28] w-full
  relative after:absolute after:left-7 after:bg-transparent after:top-1/2 after:-translate-y-1/2 after:w-2 after:h-2 shadSidebar
  `;
  const normalLink = `flex gap-3 duration-500 py-5 px-6 items-center bg-transparent rounded-[60px] border border-transparent w-full `;
  return (
    <nav>
      <ul className="flex flex-col text-[18px] font-medium duration-500 ">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to="/"
            onClick={() => setClicked(NavigationType.PortfolioTracker)}
          >
            <PersonSVG clicked={clicked} />
            <span>Porfolio Tracker</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={`/${NavigationType.Dex}`}
            onClick={() => setClicked(NavigationType.Dex)}
          >
            <DexSVG clicked={clicked} />
            <span>DEX</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={`/${NavigationType.Bridge}`}
            onClick={() => setClicked(NavigationType.Bridge)}
          >
            <BridgeSVG clicked={clicked} />
            <span>Bridge</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={`/${NavigationType.Staking}`}
            onClick={() => setClicked(NavigationType.Staking)}
          >
            <StakingSVG clicked={clicked} />
            <span>Staking</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={`/${NavigationType.AiAudit}`}
            onClick={() => setClicked(NavigationType.AiAudit)}
          >
            <AiAuditSVG clicked={clicked} />
            <span>AI Audit</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={`/${NavigationType.Quests}`}
            onClick={() => setClicked(NavigationType.Quests)}
          >
            <QuestsSVG clicked={clicked} />
            <span>Quests</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
