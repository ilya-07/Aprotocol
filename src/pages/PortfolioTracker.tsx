import { authState } from "@/atom/atomAuth";
import PortfolioTrackerHidden from "@/components/portfolioTracker/notAuth/PortfolioTrackerHidden";
import PortfolioTrackerShow from "@/components/portfolioTracker/isAuth/PortfolioTrackerShow";
import React from "react";
import { useRecoilState } from "recoil";

type Props = {};

const PortfolioTracker = (props: Props) => {
  const [auth, setAuth] = useRecoilState(authState);
  console.log(auth);
  return (
    <>
      {auth === true ? (
        <section className="flex-grow border-t border-l border-[#1b1e28] pr-10">
          <PortfolioTrackerShow />
        </section>
      ) : (
        <section className="border-t border-l border-[#1b1e28] flex-grow  flex justify-center items-center">
          <PortfolioTrackerHidden />
        </section>
      )}
    </>
  );
};

export default PortfolioTracker;
