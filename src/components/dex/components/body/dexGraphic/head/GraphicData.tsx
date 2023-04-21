import { FC } from "react";
import DataType from "./currencyType/DataType";
import DataTab from "./currencyTab/DataTab";

const GraphicData: FC = () => {
  return (
    <article className="flex justify-between w-full items-start">
      <div>
        <DataType />
      </div>
      <div>
        <DataTab />
      </div>
    </article>
  );
};

export default GraphicData;
