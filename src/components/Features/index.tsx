"use client";

import React, { useState, useEffect } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { featuresData } from "@/data/staticData";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";

const inter = Inter({ subsets: ["latin"] });
const plusjakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Features() {
  const windowWith = useWindowWidth();
  const [isShort, setIsShort] = useState(false);
  const [isOpenArray, setIsOpenArray] = useState(featuresData.map(() => false));
  const changeIsOpen = (index: number) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  useEffect(() => {
    if (windowWith <= 1320) {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, [windowWith]);

  return (
    <section className="w-full bg-white bg-review bg-center pt-[140px] pb-14 px-20">
      <div className="layout">
        <div className="flex justify-between gap-[clamp(2.5rem,-3.192rem+8.894vw,4.813rem)]">
          <h1 className="font-semibold text-[#101010] text-2xl min-w-max">
            <span className="text-[#FF8A00]">/ </span>superior features
          </h1>
          <div className="grid gap-16 max-w-[980px]">
            <div className="grid gap-4">
              <p className="font-medium leading-none text-[32px] text-[#101010]">
                Immerse yourself in the unparalleled experience of enjoying the
                inherent advantages seamlessly{" "}
                <span className="text-[#667085]">
                  integrated into our exceptional products, designed to enhance
                  and elevate every aspect of your use.
                </span>
              </p>
              <p className={`${inter.className} text-[#667085] font-medium`}>
                Embark on Superiority: Explore and Experience the Inherent
                Benefits Woven into Our Exceptional Products, Elevating Your
                Every Interaction.
              </p>
            </div>
            <div className="grid border-b border-[#EDEDED]">
              {featuresData.map((data, idx) => {
                const isOpen = isOpenArray[idx];
                return (
                  <div
                    key={idx}
                    className={`py-10 grid border-t ${
                      isOpen ? "border-[#101010]" : "border-[#EDEDED]"
                    }`}
                    onClick={() => changeIsOpen(idx)}
                  >
                    <div
                      className={`flex justify-between gap-3  ${
                        isShort ? "flex-col items-start" : "items-center"
                      } ${isOpen ? "text-[#101010]" : "text-[#5E626E]"}`}
                    >
                      <div className="flex items-center gap-3">
                        <p className={`${plusjakarta.className} font-bold`}>
                          {data.number}
                        </p>
                        <p className="font-bold text-[28px] min-w-max">
                          {data.title}
                        </p>
                      </div>
                      <p
                        className={`${inter.className} ${
                          !isShort && "max-w-[476px]"
                        } text-lg`}
                      >
                        {data.desc}
                      </p>
                    </div>
                    <Image
                      src={data.imgPath}
                      alt=""
                      width={980}
                      height={375}
                      className={`rounded-2xl ${
                        isOpen ? "mt-16" : "opacity-0 invisible w-0 h-0"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
