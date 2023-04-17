import React from "react";
import { NavigationType } from "../../common/types";

interface IProps {
  clicked: NavigationType;
}

export const PersonSVG: React.FC<IProps> = ({ clicked }) => {
  return (
    <svg
      width="18"
      height="29"
      viewBox="0 0 18 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.8125"
        cy="4.8125"
        r="4.8125"
        fill={clicked === NavigationType.PortfolioTracker ? "#0050ff" : "white"}
      />
      <path
        d="M18 20C18 18.8181 17.7672 17.6478 17.3149 16.5558C16.8626 15.4639 16.1997 14.4718 15.364 13.636C14.5282 12.8003 13.5361 12.1374 12.4442 11.6851C11.3522 11.2328 10.1819 11 9 11C7.8181 11 6.64778 11.2328 5.55585 11.6851C4.46392 12.1374 3.47177 12.8003 2.63604 13.636C1.80031 14.4718 1.13738 15.4639 0.685084 16.5558C0.232792 17.6478 -1.03325e-07 18.8181 0 20L9 20H18Z"
        fill={clicked === NavigationType.PortfolioTracker ? "#0050ff" : "white"}
      />
    </svg>
  );
};
