import React from "react";

interface IProps {
  children: string;
  size?: "large";
}

const Title: React.FC<IProps> = ({ children, size }) => {
  return (
    <h2
      className={`${size === "large" ? "text-6xl" : ""} text-5xl font-semibold`}
    >
      {children}
    </h2>
  );
};

export default Title;
