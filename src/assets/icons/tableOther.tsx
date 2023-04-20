import React, { FC } from "react";

interface IProps {
  color: "green" | "blue";
}

export const TableOtherIcon: FC<IProps> = ({ color }) => {
  if (color == "green") {
    return (
      <svg
        width="31"
        height="25"
        viewBox="0 0 31 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.99991 19.9999C0.895339 19.9999 -9.20296e-05 19.1045 -9.20296e-05 17.9999V1.99995C-9.20296e-05 0.895378 0.895338 -5.14984e-05 1.99991 -5.14984e-05H12.9999C14.1045 -5.14984e-05 14.9999 0.89538 14.9999 1.99995V2.50002H4.49981C3.39524 2.50002 2.49981 3.39545 2.49981 4.50002V19.9999H1.99991Z"
            fill="#0050FF"
          />
          <rect
            width="26"
            height="20"
            rx="2"
            transform="matrix(1 0 0 -1 4.99982 25)"
            fill="#0050FF"
          />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width="31"
        height="25"
        viewBox="0 0 31 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.99991 19.9999C0.895339 19.9999 -9.20296e-05 19.1045 -9.20296e-05 17.9999V1.99995C-9.20296e-05 0.895378 0.895338 -5.14984e-05 1.99991 -5.14984e-05H12.9999C14.1045 -5.14984e-05 14.9999 0.89538 14.9999 1.99995V2.50002H4.49981C3.39524 2.50002 2.49981 3.39545 2.49981 4.50002V19.9999H1.99991Z"
            fill="#ADFF00"
          />
          <rect
            width="26"
            height="20"
            rx="2"
            transform="matrix(1 0 0 -1 4.99982 25)"
            fill="#ADFF00"
          />
        </g>
      </svg>
    );
  }
};
