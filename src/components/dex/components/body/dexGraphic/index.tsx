import { FC } from "react";

import GraphicData from "./head/GraphicData";
import Graphic from "./graphic";

const DexGraphic: FC = () => {
  return (
    <div>
      <div className="mb-4">
        <GraphicData />
      </div>
      <div>
        <Graphic />
      </div>
    </div>
  );
};

export default DexGraphic;
