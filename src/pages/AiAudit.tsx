import Title from "@/common/components/Title";
import AiAuditsForm from "@/components/aiAudits/AiAuditsForm";
import React from "react";

type Props = {};

const AiAudit = (props: Props) => {
  return (
    <section className="border-t border-l border-[#1b1e28] flex-grow">
      <div className="pt-10 pl-12 pr-5 pb-7">
        {/* ЗАГОЛОВОК */}
        <div className="text-center mb-[30px]">
          <Title>Try our Smart Contract Auditor!</Title>
        </div>
        {/* ОБЕ ФОРМЫ, ДЛЯ ОТПРАВКИ И ПОЛУЧЕНИЯ РЕЗУЛЬТАТА */}
        <AiAuditsForm />
      </div>
    </section>
  );
};

export default AiAudit;
