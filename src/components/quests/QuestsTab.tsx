import { FC, useState } from "react";

enum Tub {
  Ongoing = "ongoing",
  Upgoing = "upgoing",
  Ended = "ended",
}
const QuestsTab: FC = () => {
  const [tab, setTab] = useState(Tub.Ongoing);
  return (
    <article className="flex py-[8px] px-2 text-2xl font-semibold rounded-smR w-fit gap-1 bg-[#1B1E28]">
      <button
        className={`${
          tab === Tub.Ongoing
            ? "bg-primaryS shadow-lg shadow-primaryS rounded-[10px]"
            : ""
        } py-3 px-7 duration-500`}
        onClick={() => setTab(Tub.Ongoing)}
      >
        Ongoing
      </button>
      <button
        className={`${
          tab === Tub.Upgoing
            ? "bg-primaryS shadow-lg shadow-primaryS rounded-[10px]"
            : ""
        } py-3 px-7 duration-500`}
        onClick={() => setTab(Tub.Upgoing)}
      >
        Upcoming
      </button>
      <button
        className={`${
          tab === Tub.Ended
            ? "bg-primaryS shadow-lg shadow-primaryS rounded-[10px]"
            : ""
        } py-3 px-7 duration-500`}
        onClick={() => setTab(Tub.Ended)}
      >
        Ended
      </button>
    </article>
  );
};
export default QuestsTab;
