import React from "react";

type Props = {};
const AiAuditsForm = (props: Props) => {
  return (
    <div>
      <div>
        {/* ФОРМА ОТПРАВКИ ОПЕРАЦИИ */}
        <div className="blueFormGradient p-6 w-full h-[405px] flex flex-col justify-between rounded-smR border border-primaryS mb-[30px]">
          <textarea
            className="w-full h-1/2 bg-transparent placeholder:text-white resize-none"
            placeholder='pragma solidity ^0.8.0; contract MyToken { string public name; string public symbol; uint256 public totalSupply; mapping(address => uint256) public balances; constructor() { name = "TokenTest"; symbol = "TT"; totalSupply = 5000000; balances[msg.sender] = totalSupply; }'
          />
          <button
            className="self-end py-[18px] pl-6 pr-[57px] rounded-[60px] border-[2px] text-xl font-semibold
          relative after:absolute after:content-arrB after:top-1/2 after:-translate-y-1/3 after:right-6 
          "
          >
            Check Smart Contract
          </button>
        </div>
      </div>
      {/* ПОЛУЧЕНИЕ РЕЗУЛЬТАТА */}
      <div className="p-6 w-full h-[405px] border border-secondaryS greenFormGradient rounded-smR">
        <span>Audit results:</span>
        <span></span>
      </div>
    </div>
  );
};

export default AiAuditsForm;
