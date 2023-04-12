import React from "react";

interface IProps {
  children: string;
}

const Title: React.FC<IProps> = ({ children }) => {
  return <h2 className="text-5xl font-semibold">{children}</h2>;
};

export default Title;
