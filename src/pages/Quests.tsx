import { FC } from "react";

import QuestsData from "@/components/quests/QuestsData";
import QuestsTab from "@/components/quests/QuestsTab";

const Quests: FC = () => {
  return (
    <div className="border-t border-l border-[#1b1e28] flex-grow">
      <div className="pt-10 pl-12 pr-5 pb-11">
        <div className="mb-[30px]">
          <QuestsTab />
        </div>
        <QuestsData />
      </div>
    </div>
  );
};

export default Quests;
