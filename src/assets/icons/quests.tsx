import React from "react";
import { NavigationType } from "../types";

interface IProps {
  clicked: NavigationType;
}

const QuestsSVG: React.FC<IProps> = ({ clicked }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <circle
          cx="12.5"
          cy="12.5"
          r="3.5"
          fill={clicked === NavigationType.Quests ? "#0050ff" : "white"}
        />
        <circle
          cx="3.5"
          cy="3.5"
          r="3.5"
          fill={clicked === NavigationType.Quests ? "#0050ff" : "white"}
        />
        <path
          d="M14.0532 2.05322L2.05322 14.0532"
          stroke={clicked === NavigationType.Quests ? "#0050ff" : "white"}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default QuestsSVG;
