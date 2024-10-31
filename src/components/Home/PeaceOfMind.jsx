import React from "react";
import { ClockIcon } from "@radix-ui/react-icons";
import { Img } from "..";
import Image from "next/image";

const PeaceOfMind = () => {
  return (
    <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl px-16 md:p-5">
      <p className="text-[1.4rem] font-semibold text-center py-2">
        Peace of Mind Made Easy – No fuss, no wearables
      </p>
      <p className="text-center">
        Effortless Peace of Mind with 24/7 Protection – No Wearables, Just
        Reliable Safety
      </p>

      <div className="flex md:flex-col gap-7">
        <div className="w-1/2 sm:w-full bg-[#EAEAEA]">
          <div className="text-center">
            <ClockIcon className="mx-auto mt-5" height={35} width={35} />
            <h3 className="text-2xl font-semibold pt-2">24/7 Protection</h3>
            <p className="text-lg ">
              Non-intrusive, without the hassle of wearable devices.
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-full bg-[#EAEAEA]"></div>
      </div>
    </div>
  );
};

export default PeaceOfMind;
