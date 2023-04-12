import React from "react";

type Props = {};

const TransactionPortfolioHead = (props: Props) => {
  const [value, setValue] = React.useState<string>("");
  return (
    <input
      onChange={(el) => setValue(el.target.value)}
      value={value}
      placeholder="Search.."
      className="flex-grow py-5 px-6 rounded-smR bg-[#1B1E28] placeholder:text-white"
    />
  );
};

export default TransactionPortfolioHead;
