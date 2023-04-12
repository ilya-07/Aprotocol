import React from "react";
import { NavigationType } from "../types";

interface IProps {
  clicked: NavigationType;
}

const BridgeSVG: React.FC<IProps> = ({ clicked }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M10.0531 10C12.3726 10 14.9712 11.8276 16.6742 13.2846C17.3674 13.8776 18.5384 13.3931 18.5384 12.4809L18.5384 6C18.5384 5.44772 18.0907 5 17.5384 5L15.9998 5L4.49985 5L2.56786 5C2.01557 5 1.56786 5.44772 1.56786 6L1.56786 12.4809C1.56786 13.3931 2.73891 13.8776 3.43206 13.2846C5.13513 11.8276 7.73368 10 10.0531 10Z"
          fill={clicked === NavigationType.Bridge ? "#0050ff" : "white"}
        />
        <path
          d="M1.56786 1.5L4.49985 1.5M18.5384 1.5L15.4998 1.5M4.49985 1.5L15.4998 1.5M4.49985 1.5L4.49985 4.5M15.4998 1.5L15.4998 4.5M10.0531 10C12.3726 10 14.9712 11.8276 16.6742 13.2846C17.3674 13.8776 18.5384 13.3931 18.5384 12.4809L18.5384 6C18.5384 5.44772 18.0907 5 17.5384 5L15.9998 5L4.49985 5L2.56786 5C2.01557 5 1.56786 5.44772 1.56786 6L1.56786 12.4809C1.56786 13.3931 2.73891 13.8776 3.43206 13.2846C5.13513 11.8276 7.73368 10 10.0531 10Z"
          stroke={clicked === NavigationType.Bridge ? "#0050ff" : "white"}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default BridgeSVG;
