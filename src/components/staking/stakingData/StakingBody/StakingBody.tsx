import { FC } from "react";

const StakingBody: FC = () => {
  return (
    <>
      <article className="mb-[30px] rounded-[20px] p-6 border border-primaryS stakingGradient">
        <h3 className="mb-[10px] font-semibold text-3xl">APR</h3>
        <div className="flex flex-col gap-[10px] text-2xl">
          <div className="flex justify-between">
            <span className="font-normal">Current APR(%)/day</span>
            <span className="font-semibold">4%</span>
          </div>
          <div className="flex justify-between">
            <div className="font-normal flex items-center gap-[15px]">
              <span className=" leading-[100%]">Referral link</span>
              <span className="flex w-[24px] h-[24px] mt-1 rounded-[50%] font-semibold text-[14px] bg-[#141820] items-center justify-center">
                !
              </span>
            </div>
            <span className="font-semibold">5%</span>
          </div>
        </div>
      </article>
      <article className=" rounded-[20px] bg-[#1B1E28] p-6 ">
        <span className="flex mb-[15px] w-[50px] h-[50px] rounded-[50%] font-semibold text-[35px] bg-[#141820] items-center justify-center">
          !
        </span>
        <p className="text-2xl max-w-[690px]">
          Users may get extra money through the referral program by promoting
          Allna Protocol to their friends and acquaintances. Users that sign up
          using their referral link will pay them 5% of their investment
        </p>
      </article>
    </>
  );
};

export default StakingBody;
