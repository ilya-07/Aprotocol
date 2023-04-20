import { FC } from "react";

interface IProps {
  className?: string;
  color?: string;
}

export const QuestsIcon: FC = ({ className, color }: IProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.6">
        <circle
          cx="12.5"
          cy="12.5"
          r="3.5"
          fill={color ? color : "currentColor"}
        />
        <circle
          cx="3.5"
          cy="3.5"
          r="3.5"
          fill={color ? color : "currentColor"}
        />
        <path
          d="M14.0532 2.05322L2.05322 14.0532"
          stroke={color ? color : "currentColor"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
