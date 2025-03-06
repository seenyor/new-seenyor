import React from "react";
import Image from "next/image";
import Bgimg from "@/assets/app/IntelligentApp.png";
import BgimgMo from "@/assets/app/IntelligentAppMo.png";
import { CheckCircle } from "lucide-react";

const Intelligent = () => {
  const features = [
    "Real-Time Monitoring",
    "Intelligent Alerts",
    "Activity Tracking",
    "User-Friendly Interface",
    "Customizable Settings",
  ];

  return (
    <div className="w-full mt-[70px] md:mt-10 sm:mt-6 max-w-[1720px] xxl:py-7 md:py-6 tab:py-2 px-6 relative flex md:flex-col items-center justify-center font-poppins">
      <Image
        src={Bgimg}
        alt=""
        width={1720}
        height={700}
        className="absolute md:hidden px-6"
      />
      <Image
        src={BgimgMo}
        alt=""
        width={1720}
        height={700}
        className="absolute hidden md:block"
      />
      <div className=" w-full h-[500px] flex justify-center items-center z-10 rounded-3xl text-white">
        <div className="relative w-full md:text-center flex flex-col gap-6 z-10 px-[50px]">
          <h2 className="text-4xl font-bold">
            Elevate Elderly Monitoring <br /> With Our{" "}
            <span className="text-green-400">Intelligent App</span>
          </h2>
          <ul className="space-y-3 text-lg flex flex-col gap-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex md:items-center gap-3 md:justify-center"
              >
                <CheckCircle className="text-green-400" size={20} /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intelligent;
