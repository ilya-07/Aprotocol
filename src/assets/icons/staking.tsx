import React from "react";
import { NavigationType } from "../types";

interface IProps {
  clicked: NavigationType;
}

const StakingSVG: React.FC<IProps> = ({ clicked }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.49998 7.50008C11.642 7.50008 14.9998 5.82113 14.9998 3.75004C14.9998 1.67895 11.642 0 7.49998 0C3.35794 0 0.000155525 1.67895 0.000155525 3.75004C0.000155525 5.82113 3.35794 7.50008 7.49998 7.50008ZM14.8475 6.74434C14.148 8.42675 11.1242 9.6923 7.5 9.6923C3.87548 9.6923 0.851468 8.42654 0.152286 6.74391C0.0524361 6.98797 0 7.24066 0 7.49947C0 9.57056 3.35778 11.2495 7.49982 11.2495C11.6419 11.2495 14.9996 9.57056 14.9996 7.49947C14.9996 7.24081 14.9473 6.98826 14.8475 6.74434ZM14.782 10.3489C13.9749 11.9595 11.0208 13.1538 7.5 13.1538C3.97898 13.1538 1.02467 11.9593 0.217832 10.3486C0.0755033 10.6371 0 10.9389 0 11.2495C0 13.3206 3.35778 14.9995 7.49982 14.9995C11.6419 14.9995 14.9996 13.3206 14.9996 11.2495C14.9996 10.939 14.9242 10.6374 14.782 10.3489Z"
        fill={clicked === NavigationType.Staking ? "#0050ff" : "white"}
      />
    </svg>
  );
};

export default StakingSVG;
