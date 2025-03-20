import React from "react";
import msgbg from "@/assets/ai-care/msgBg1.png";
import arrow from "@/assets/ai-care/svg/arrow.svg";
import msgbgmob from "@/assets/ai-care/msgBg1mob.png";
import Image from "next/image";
import icon1 from "@/assets/ai-care/Icn/AiIcn1.png";
import icon2 from "@/assets/ai-care/Icn/AiIcn2.png";
import icon3 from "@/assets/ai-care/Icn/AiIcn3.png";

const challenges = [
  {
    icon: icon1,
    text: "Ensuring continuous safety and supervision can be difficult.",
  },
  {
    icon: icon2,
    text: "Delayed assistance can increase risks.",
  },
  {
    icon: icon3,
    text: "Wearable devices require frequent charging and maintenance.",
  },
];

const MsgBg1 = () => {
  return (
    <div className="px-20 tab:px-4">
      <div
        className="max-w-[1450px] w-full bg-cover bg-center p-4 pb-8 shadow-md rounded-3xl relative"
        // style={{ backgroundImage: `url(${msgbg.src})` }}
      >
        <Image
          src={arrow}
          alt={`arrow-bottom`}
          // width={80}
          // height={80}
          className="absolute left-[50%] -translate-x-[50%] -bottom-[27px] "
        />
        {/* <div class="w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-transparent border-b-8 border-b-white shadow-md"></div> */}
        <div className="text-center flex flex-col gap-10">
          <div>
            <h1 className="text-[48px] tab:text-[30px] sm:text-[25px] italic md:text-4xl">
              Common Challenges
            </h1>
            <h1 className="text-[30px] md:text-3xl tab:text-[26px] sm:text-[24px]">
              of Ageing Adults
            </h1>
          </div>
          <div className="flex px-10 justify-between gap-4 tab:flex-col items-center tab:gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="max-w-[390px] w-full flex flex-col gap-5 items-center justify-center"
              >
                <Image
                  src={challenge.icon}
                  alt={`icon${index + 1}`}
                  width={80}
                  height={80}
                />
                <h4 className="text-[22px] sm:text-[18px] text-center">
                  {challenge.text.split(" ").map((word, i) =>
                    word === "difficult." ||
                    word === "increase" ||
                    word === "risks." ||
                    word === "frequent" ||
                    word === "charging" ||
                    word === "maintenance." ? (
                      <span key={i} className="font-bold">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}

      {/* <div
        className="max-w-[687px] w-full h-[447px] sm:h-[350px] bg-cover bg-center p-4 py-8 sm:py-6 hidden tab:block"
        style={{ backgroundImage: `url(${msgbgmob.src})` }}
      >
        <div className="text-center flex flex-col gap-10">
          <div>
            <h1 className="text-[36px] sm:text-[24px] italic">
              Common Challenges
            </h1>
            <h1 className="text-[24px] sm:text-[20px]">of Ageing Adults</h1>
          </div>
          <div className="flex gap-4 justify-between">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="max-w-[390px] flex flex-col items-center"
              >
                <Image
                  src={challenge.icon}
                  alt={`icon${index + 1}`}
                  width={65}
                  height={65}
                  className="w-[65px] sm:w-[45px]"
                />
                <h4 className="text-[18px] sm:text-[14px] text-center">
                  {challenge.text.split(" ").map((word, i) =>
                    word === "difficult." ||
                    word === "increase" ||
                    word === "risks." ||
                    word === "frequent" ||
                    word === "charging" ||
                    word === "maintenance." ? (
                      <span key={i} className="font-bold">
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MsgBg1;
