import { IQuests } from "@/common/types";
import { questsText } from "@/common/text";
import React from "react";
import Title from "@/common/components/Title";

type Props = {};

const QuestsData = (props: Props) => {
  return (
    <section className="grid grid-cols-2 gap-[30px]">
      {questsText.map((el: IQuests, i: number) => (
        <article className="grid grid-rows-[1fr_auto] gap-[30px] rounded-smR border-2 ">
          <div className="pt-6 px-8">
            <div className="flex justify-between mb-[30px]">
              <span className="text-[60px] leading-[73px]"></span>
              <Title size="large">{el.title}</Title>
              <button
                className="py-4 pl-8 pr-[84px] rounded-[60px] border-2  font-semibold text-2xl flex justify-center items-center h-fit
              relative after:absolute after:content-arrR after:top-1/2 after:-translate-y-1/2 after:right-7 after:w-10
              "
              >
                Read <br /> more
              </button>
            </div>
            <p className="text-3xl">{el.text}</p>
          </div>
          <img className="rounded-bl-smR rounded-br-smR" src={el.img} alt="" />
        </article>
      ))}
    </section>
  );
};

export default QuestsData;
