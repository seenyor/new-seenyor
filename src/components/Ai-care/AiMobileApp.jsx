import React from "react";
import Image from "next/image";
import mob1 from "@/assets/ai-care/mobileapp/mob1.png";
import mob2 from "@/assets/ai-care/mobileapp/mob2.png";
import mob3 from "@/assets/ai-care/mobileapp/mob3.png";
import mob4 from "@/assets/ai-care/mobileapp/mob4.png";
import mob5 from "@/assets/ai-care/mobileapp/mob5.png";
import mob6 from "@/assets/ai-care/mobileapp/mob6.png";
import mob7 from "@/assets/ai-care/mobileapp/mob7.png";
import mob8 from "@/assets/ai-care/mobileapp/mob8.png";

const appScreens = [
  { title: "Overview Page", image: mob1 },
  { title: "Location", image: mob2 },
  { title: "Sleep Insights", image: mob3 },
  { title: "Sleep Events", image: mob4 },
  { title: "Pulse Rate", image: mob5 },
  { title: "Wellness Score", image: mob6 },
  { title: "Breathing Rate", image: mob7 },
  { title: "Daytime Activity", image: mob8 },
];

const AiMobileApp = () => {
  return (
    <section className="w-full flex justify-center items-center px-6 tab:px-3 py-16 mx-auto bg-[#E4E3F8] overflow-hidden">
      <div className="w-full max-w-[1710px] flex flex-col gap-[98px] tab:gap-[60px] sm:gap-[30px]">
        {/* text */}
        <div className="flex flex-col text-center w-full">
          <h1 className="text-5xl sm:text-4xl font-bold text-[#16065F]">
            Mobile App
          </h1>
          <p className="text-[30px] sm:text-[24px]">for Full Control</p>
        </div>
        {/* app screens */}
        <div className="grid grid-cols-4 gap-20 tab:gap-14 sm:gap-5">
          {appScreens.map((screen, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[22px] tab:gap-[18px] sm:gap-[10px]"
            >
              <h2 className="text-2xl tab:text-base sm:text-[10px] font-light italic">
                {screen.title}
              </h2>
              <Image
                src={screen.image}
                alt={screen.title}
                width={300}
                height={650}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiMobileApp;
