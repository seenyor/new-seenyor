"use client";

import React from "react";
import Image from "next/image";
import hero from "@/assets/ai-care/heroImg.png";
import bg from "@/assets/ai-care/heroBg.png";
import bgmob from "@/assets/ai-care/herobgmob.png";
import logo from "@/assets/ai-care/logo.png";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AiHero = () => {
  return (
    <>
      <section
        className="relative tab:hidden w-full max-h-[805px] tab:max-h-[590px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex tab:flex-col items-center justify-between tab:justify-center w-full px-6 tab:px-3 mx-auto min-h-[905px] h-[500px] max-w-[1610px] tab:gap-14">
          {/* Text Section */}
          <div className="flex flex-col gap-8 w-[50%] tab:w-full items-center justify-center tab:text-center h-full">
            <div className="w-full flex justify-center items-center tab:hidden">
              {/* video */}
              <Image src={logo} alt="logo" width={130} height={110} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[3.75vw] tab:text-[40.5vw] sm:text-4xl text-[#10005B]">
                AI Care Guardian
              </h1>
              <h6 className="font-medium text-[1.667vw] tab:text-[1.458vw]">
                Keep Your Loved Ones Safe with the <br />
                <span className="font-bold">AI Guardian</span>
              </h6>
            </div>
          </div>

          {/* Image Section */}

          <div className="flex justify-center h-auto rounded-2xl overflow-hidden">
            {/* <Image src={hero} alt="AI Guardian" width={840} height={495} /> */}
            <ReactPlayer
              url="/assets/ai-care/video/aivideo.mp4"
              width="840px"
              height="495px"
              loop={true}
              playing={true} // Autoplay enabled
              muted={true}
            />
          </div>
        </div>
      </section>

      {/* for mobile */}

      <section className="relative w-full max-h-[805px] tab:max-h-[993px] sm:max-h-[700px] rounded-b-[60px] sm:rounded-b-[40px] hidden tab:block">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover tab:rounded-b-[60px] sm:rounded-b-[40px]"
        >
          <source src="/assets/ai-care/video/mobvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative flex tab:flex-col items-center justify-between tab:justify-center w-full px-6 tab:px-3 mx-auto min-h-[905px] h-[500px] max-w-[1610px] tab:gap-14">
          {/* Text Section */}
          <div className="flex flex-col gap-8 w-full items-center tab:py-28 sm:py-[9.958vh] justify-start tab:text-center h-full">
            <div className="w-full flex justify-center items-center tab:hidden">
              <Image src={logo} alt="logo" width={130} height={110} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-7xl tab:text-[8.469vw] sm:text-[8.646vw] text-[#10005B]">
                AI Care Guardian
              </h1>
              <h6 className="font-medium text-[32px] tab:text-[3.458vw] sm:text-[3.646vw]">
                Keep Your Loved Ones Safe with the <br />
                <span className="font-bold">AI Guardian</span>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiHero;
