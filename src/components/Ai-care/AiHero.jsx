import React from "react";
import Image from "next/image";
import hero from "@/assets/ai-care/heroImg.png";
import bg from "@/assets/ai-care/heroBg.png";
import bgmob from "@/assets/ai-care/herobgmob.png";
import logo from "@/assets/ai-care/logo.png";

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
              <Image src={logo} alt="logo" width={130} height={110} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-7xl tab:text-5xl sm:text-4xl text-[#10005B]">
                AI Care Guardian
              </h1>
              <h6 className="font-medium text-[32px] tab:text-[24px]">
                Keep Your Loved Ones Safe with the <br />
                <span className="font-bold">AI Guardian</span>
              </h6>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center h-auto">
            <Image src={hero} alt="AI Guardian" width={840} height={495} />
          </div>
        </div>
      </section>

      {/* for mobile */}

      <section
        className="relative w-full max-h-[805px] tab:max-h-[993px] sm:max-h-[700px] rounded-b-[60px] sm:rounded-b-[40px] bg-cover bg-center hidden tab:block"
        style={{ backgroundImage: `url(${bgmob.src})` }}
      >
        <div className="flex tab:flex-col items-center justify-between tab:justify-center w-full px-6 tab:px-3 mx-auto min-h-[905px] h-[500px] max-w-[1610px] tab:gap-14">
          {/* Text Section */}
          <div className="flex flex-col gap-8 w-full items-center py-28 sm:py-14 justify-start tab:text-center h-full">
            <div className="w-full flex justify-center items-center tab:hidden">
              <Image src={logo} alt="logo" width={130} height={110} />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-7xl tab:text-4xl sm:text-3xl text-[#10005B]">
                AI Care Guardian
              </h1>
              <h6 className="font-medium text-[32px] tab:text-[24px] sm:text-[20px]">
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
