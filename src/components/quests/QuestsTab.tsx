import React from "react";

type Props = {};
enum Tub {
  Ongoing = "ongoing",
  Upgoing = "upgoing",
  Ended = "ended",
}
const QuestsTab = (props: Props) => {
  const [tab, setTab] = React.useState(Tub.Ongoing);
  return (
    <article className="flex py-[8px] px-2 rounded-smR w-fit gap-1 bg-[#1B1E28]">
      <button
        className={`${
          tab === Tub.Ongoing ? "bg-primaryS rounded-[10px]" : ""
        } py-3 px-7`}
        onClick={() => setTab(Tub.Ongoing)}
      >
        Ongoing
      </button>
      <button
        className={`${
          tab === Tub.Upgoing ? "bg-primaryS rounded-[10px]" : ""
        } py-3 px-7`}
        onClick={() => setTab(Tub.Upgoing)}
      >
        Upcoming
      </button>
      <button
        className={`${
          tab === Tub.Ended ? "bg-primaryS rounded-[10px]" : ""
        } py-3 px-7`}
        onClick={() => setTab(Tub.Ended)}
      >
        Ended
      </button>
    </article>
  );
};
export default QuestsTab;
