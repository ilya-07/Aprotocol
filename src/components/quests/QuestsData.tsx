import { FC } from "react";

import { IQuests } from "@/common/types";
import { questsText } from "@/common/text";

import Title from "@/common/components/Title";

const QuestsData: FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      {questsText.map((el: IQuests, i: number) => (
        <article
          key={i}
          className="grid grid-rows-[1fr_auto] gap-[30px] rounded-smR border-2 "
        >
          <div className="pt-6 px-8">
            <div className="flex justify-between mb-[30px]">
              <span className="lg:max-w-[270px] 2xl:max-w-[360px]">
                <Title size="large">{el.title}</Title>
              </span>
              <button
                className="py-4 pl-6 2xl:pl-8 pr-6 2xl:pr-[84px] rounded-[60px] border-2  font-semibold text-lg 2xl:text-2xl flex justify-center items-center h-fit
              relative after:absolute after:content-arrR after:top-1/2 after:-translate-y-1/2 after:right-7 after:w-10
              "
              >
                Read <br className="hidden 2xl:block" /> more
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
