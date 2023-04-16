import { images } from "@/assets/img";
import React from "react";
import PortfolioHeader from "./header/portfolioHeader";
import PortfolioData from "./data/PortfolioData";

type Props = {};

const PortfolioTrackerShow = (props: Props) => {
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
    </section>
  );
};

export default PortfolioTrackerShow;
