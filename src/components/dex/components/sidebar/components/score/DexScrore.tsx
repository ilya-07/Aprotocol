import { FC } from "react";
const rows = [
  {
    width: 75,
    color: "blue",
    data: 66.3,
    hide: true,
  },
  {
    width: 75,
    color: "green",
    data: 20,
  },
  {
    width: 75,
    color: "green",
    data: 20,
  },
  {
    width: 75,
    color: "blue",
    data: 20,
  },
  {
    width: 75,
    color: "green",
    data: 20,
  },
  {
    width: 75,
    color: "blue",
    data: 20,
  },
];
const DexScrore: FC = () => {
  return (
    <div className="rounded-smR bg-[#1B1E28] mb-[10px] py-[22px] pl-5 pr-6 flex flex-col items-center">
      <h3 className="mb-5 text-2xl font-semibold">crypto market</h3>
      <div className="text-2xl font-semibold gap-4 flex flex-col mb-[30px]">
        {rows.map((el) => {
          return (
            <div className="flex items-center gap-[10px]">
              <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
                <span
                  className={`${
                    el.color === "green"
                      ? "bg-secondaryS greenShadow"
                      : "bg-primaryS blueShadow"
                  } h-5 w-[${el.width}%] inline-block rounded-[5px]`}
                ></span>
              </div>
              <span className="flex items-center gap-3">
                <span>{el.data}</span>{" "}
                <span
                  className={`${el.hide ? "hidden" : "block"}
                  w-6 h-6 rounded-[50%] flex justify-center items-center bg-[#141820] text-sm`}
                >
                  !
                </span>
              </span>
            </div>
          );
        })}
        {/* <div className="flex items-center gap-[10px]">
          <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
            <span className="h-5 w-[90%] bg-primaryS blueShadow inline-block rounded-[5px]"></span>
          </div>
          <span>66.30</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
            <span className="h-5 w-full bg-secondaryS greenShadow inline-block rounded-[5px]"></span>
          </div>
          <span className="flex items-center gap-3">
            <span>20</span>{" "}
            <span className="w-6 h-6 rounded-[50%] flex justify-center items-center bg-[#141820] text-sm">
              !
            </span>
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
            <span className="h-5 w-full bg-secondaryS greenShadow inline-block rounded-[5px]"></span>
          </div>
          <span className="flex items-center gap-3">
            <span>20</span>{" "}
            <span className="w-6 h-6 rounded-[50%] flex justify-center items-center bg-[#141820] text-sm">
              !
            </span>
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
            <span className="h-5 w-[75%] bg-primaryS blueShadow inline-block rounded-[5px]"></span>
          </div>
          <span className="flex items-center gap-3">
            <span>20</span>{" "}
            <span className="w-6 h-6 rounded-[50%] flex justify-center items-center bg-[#141820] text-sm">
              !
            </span>
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
            <span className="h-5 w-full bg-secondaryS greenShadow inline-block rounded-[5px]"></span>
          </div>
          <span className="flex items-center gap-3">
            <span>20</span>{" "}
            <span className="w-6 h-6 rounded-[50%] flex justify-center items-center bg-[#141820] text-sm">
              !
            </span>
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[246px] bg-[#151820] rounded-[10px] p-[5px] flex justify-start items-center">
            <span className="h-5 w-[75%] bg-primaryS blueShadow inline-block rounded-[5px]"></span>
          </div>
          <span className="flex items-center gap-3">
            <span>20</span>{" "}
            <span className="w-6 h-6 rounded-[50%] flex justify-center items-center bg-[#141820] text-sm">
              !
            </span>
          </span>
        </div> */}
      </div>
      <p className="text-lg">
        FreewayTokens (FWT) are the native utility tokens for Freeway - Freeway
        is on a mission to revolutionise the financial services industry by
        making finance more rewarding for everyone.
      </p>
    </div>
  );
};

export default DexScrore;
