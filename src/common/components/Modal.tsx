import React from "react";
import CloseSVG from "@/assets/icons/close";
import { images } from "@/assets/img";
import { IModalCurrency } from "@/common/types";
import { modalCUrrency } from "@/common/text";

interface IProps {
  setColor: (el: boolean) => void;
}
const Modal: React.FC<IProps> = ({ setColor }) => {
  const [select, setSelect] = React.useState(modalCUrrency[0]);
  const [show, setShow] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState("");
  const handleSelected = (el: IModalCurrency): void => {
    setSelect(el);
    setShow(false);
    setColor(false);
    setSearch("");
  };
  return (
    <div className="relative text-2xl">
      <span
        className="cursor-pointer bg-transparent py-[18px] rounded-[60px] border-2 pl-4 pr-6 w-[360px] flex justify-between items-center gap-5"
        onClick={() => {
          setShow(!show);
          setColor(!show);
          setSearch("");
        }}
      >
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 relative  block">
            <select.icon />
          </span>
          <span>{select.type}</span>
        </div>
        <span>
          <img src={images.arrM} />
        </span>
      </span>
      <div
        className={`
  ${show ? "block" : "hidden"}
    absolute top-0 left-0 gap-3 bg-[#0b0e14] z-30 rounded-[40px] border-2 w-[360px] pl-4 py-[18px] pr-6
   `}
      >
        <div className="mb-8 flex justify-between items-center">
          <h4 className="text-white">Select a currency</h4>
          <div
            className="cursor-pointer"
            onClick={() => {
              setShow(false);
              setColor(false);
              setSearch("");
            }}
          >
            <CloseSVG />
          </div>
        </div>
        <input
          value={search}
          onChange={(el) => setSearch(el.target.value)}
          placeholder="Search.."
          className="mb-5 pr-5 bg-[#1B1E28] py-5 px-6 rounded-smR w-full text-lg font-normal text-white placeholder:text-white"
          type="text"
        />
        <div className="h-[350px] overflow-y-scroll scrollbar scrollbar-track-[#0b0e14] scrollbar-thumb-white flex-col flex gap-5">
          {modalCUrrency
            .filter((el) =>
              el.type.toLowerCase().includes(search.toLowerCase())
            )
            .map((el, i) => (
              <span
                className="cursor-pointer flex gap-5"
                onClick={handleSelected.bind("", el)}
                key={i}
              >
                <span className="w-9 h-9">
                  <el.icon />
                </span>
                <span className="text-white">{el.type}</span>

                <span />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
