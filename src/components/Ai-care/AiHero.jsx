"use client";

import React from "react";
import Image from "next/image";
import hero from "@/assets/ai-care/heroImage.png";
import bg from "@/assets/ai-care/heroBg.png";
import mobbg from "@/assets/ai-care/mobbg.png";
import logo from "@/assets/ai-care/logo.png";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AiHero = () => {
  return (
    <>
      <section className="relative tab:hidden w-full max-h-[805px] tab:max-h-auto overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 -top-80">
          <Image
            src={bg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="flex tab:flex-col items-center justify-between tab:justify-center w-full px-6 tab:px-3 mx-auto min-h-[700px] h-[500px] max-w-[1610px] tab:gap-14 relative z-10">
          {/* Text Section */}
          <div className="flex flex-col gap-8 w-[50%] tab:w-full items-center justify-center tab:text-center h-full">
            <div className="w-full flex justify-center items-center tab:hidden">
              {/* video */}
              <Image src={logo} alt="logo" width={110} height={110} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[3.2vw] tab:text-[40.5vw] sm:text-4xl text-[#10005B]">
                AI Care Guardian
              </h1>
              <h6 className="font-medium text-[1.5vw] tab:text-[1.458vw]">
                Keep Your Loved Ones Safe with the <br />
                <span className="font-bold">AI Guardian</span>
              </h6>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center h-auto rounded-2xl overflow-hidden mt-4">
            <Image
              src={hero}
              alt="AI Guardian"
              width={840}
              height={495}
              className="w-[700px] h-[455px] object-cover tab:rounded-b-[60px] sm:rounded-b-[40px]"
            />
          </div>
        </div>
      </section>

      {/* for mobile */}

      <section className="relative w-full overflow-hidden hidden tab:block px-4 sm:px2 max-h-[700px] sm:max-h-[650px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={mobbg}
            alt="Mobile Background"
            width={800}
            height={600}
            className="h-[600px] sm:h-[600px] xss:h-[570px]"
          />
        </div>

        <div className="relative flex tab:flex-col tab:justify-center w-full px-6 tab:px-3 mx-auto min-h-[905px] h-[500px] max-w-[1610px] tab:gap-14 z-10">
          {/* Text Section */}
          <div className="flex flex-col gap-8 w-full items-center tab:pt-28 sm:pt-[19.958vh] justify-start tab:text-center h-full">
            <div className="w-full flex justify-center items-center tab:hidden">
              <Image src={logo} alt="logo" width={130} height={110} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-7xl tab:text-[8.469vw] sm:text-[8.646vw] text-[#10005B]">
                AI Care Guardian
              </h1>
              <h6 className="font-medium text-[32px] tab:text-[3.458vw] sm:text-[4.046vw]">
                Keep Your Loved Ones Safe with the <br />
                <span className="font-bold">AI Guardian</span>
              </h6>
            </div>
          </div>
          <Image
            src={hero}
            alt="AI Guardian"
            width={840}
            height={495}
            className="w-full h-auto object-cover tab:rounded-[40px] sm:rounded-[20px] absolute top-[30%] sm:top-[35%] left-0 mt-4"
          />
        </div>
      </section>
    </>
  );
};

export default AiHero;
