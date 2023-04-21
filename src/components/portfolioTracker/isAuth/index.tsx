import { FC } from "react";

import PortfolioHeader from "./header/portfolioHeader";
import PortfolioData from "./data/PortfolioData";
import { PaginatedItems } from "./pagination";

const PortfolioTrackerShow: FC = () => {
  return (
    <section className="pt-10 pl-14">
      <div className="mb-10">
        <div className="mb-10">
          {/* ШАПКА СТРАНИЦЫ ПОРТФОЛИО */}
          <PortfolioHeader />
        </div>
        {/* ВСЕ ИНЫЕ ДАННЫЕ, ВКЛЮЧАЯ ТАБЫ */}
        <PortfolioData />
      </div>
      <PaginatedItems />
    </section>
  );
};

export default PortfolioTrackerShow;
