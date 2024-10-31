import React from "react";
import { ClockIcon } from "@radix-ui/react-icons";
import { Img } from "..";
import Image from "next/image";

const PeaceOfMind = () => {
  return (
    <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl  md:p-5">
      <p className="text-[2rem] font-semibold text-center py-2">
        Peace of Mind Made Easy – No fuss, no wearables
      </p>
      <p className="text-center text-xl">
        Effortless Peace of Mind with 24/7 Protection – No Wearables, Just
        Reliable Safety
      </p>

      <div className="flex justify-between md:flex-col gap-7 py-10">
        <div className="w-1/2 sm:w-full bg-[#EAEAEA]">
          <div className="text-center">
            <ClockIcon className="mx-auto mt-5" height={35} width={35} />
            <h3 className="text-2xl font-semibold pt-2">24/7 Protection</h3>
            <p className="text-lg ">
              Non-intrusive, without the hassle of wearable devices.
            </p>
          </div>
          <div className="h-96 w-full relative">
            <Image
              src="/images/test 223.png"
              height={200}
              width={200}
              alt="patience"
              className="h-full w-full"
            />
            <div className="absolute top-5 px-3 flex justify-between md:grid md:grid-cols-2 md:gap-4 w-full ">
              <div className="bg-white p-2 text-center w-[6.2rem]">
                <Img
                  src="breath.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 p-3 mx-auto  object-contain"
                />
                <p className="font-semibold text-[10px]">Breathing Rate</p>
                <p className="text-[10px]">Monitoring</p>
              </div>
              <div className="bg-white p-2 text-center w-[6.2rem]">
                <Img
                  src="heart.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 p-3 mx-auto  object-contain"
                />
                <p className="font-semibold text-[10px]">Heart Rate</p>
                <p className="text-[10px]">Monitoring</p>
              </div>
              <div className="bg-white p-2 text-center w-[6.2rem]">
                <Img
                  src="fall.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 p-3 mx-auto  object-contain"
                />
                <p className="font-semibold text-[10px]">Fall</p>
                <p className="text-[10px]">Monitoring</p>
              </div>
              <div className="bg-white p-2 text-center w-[6.2rem]">
                <Img
                  src="breath.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 p-3 mx-auto  object-contain"
                />
                <p className="font-semibold text-[10px]">Breathing Rate</p>
                <p className="text-[10px]">Monitoring</p>
              </div>
              <div className="bg-white p-2 text-center w-[6.2rem]">
                <Img
                  src="breath.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 p-3 mx-auto  object-contain"
                />
                <p className="font-semibold text-[10px]">Breathing Rate</p>
                <p className="text-[10px]">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-full bg-[#EAEAEA]">
          <div className="text-center">
            <ClockIcon className="mx-auto mt-5" height={35} width={35} />
            <h3 className="text-2xl font-semibold pt-2">24/7 Monitoring</h3>
            <p className="text-lg ">
              with AI-driven insights for smarter protection.
            </p>
          </div>
          <div className="h-96 w-full px-5">
            <div className="flex justify-between gap-3 py-5">
              <div className="w-1/2 flex flex-col gap-2">
                <Image
                  src="/images/monitoring1.png"
                  height={200}
                  width={300}
                  alt="patience"
                  className="h-36 w-96"
                />
                <Image
                  src="/images/monitoring3.png"
                  height={200}
                  width={300}
                  alt="patience"
                  className="h-36 w-96"
                />
              </div>
              <Image
                src="/images/monitoring2.png"
                height={300}
                width={300}
                alt="patience"
                className="h-[18.5rem] !w-auto"
              />
            </div>
            <p className="text-xs text-center">*This is NOT a Medical device</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeaceOfMind;
