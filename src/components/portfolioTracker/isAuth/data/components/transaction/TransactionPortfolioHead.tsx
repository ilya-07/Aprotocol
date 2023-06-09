import { FC, useState } from "react";

const TransactionPortfolioHead: FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <input
      onChange={(el) => setValue(el.target.value)}
      value={value}
      placeholder="Search.."
      className="flex-grow py-6 px-6 rounded-smR bg-[#1B1E28] placeholder:text-white"
    />
  );
};

export default TransactionPortfolioHead;
