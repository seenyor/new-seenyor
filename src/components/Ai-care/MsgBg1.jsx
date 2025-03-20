import React from "react";
import msgbg from "@/assets/ai-care/msgBg1.png";
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
    <>
      <div
        className="max-w-[1450px] w-full h-[425px] bg-cover bg-center p-4 tab:hidden"
        style={{ backgroundImage: `url(${msgbg.src})` }}
      >
        <div className="text-center flex flex-col gap-10">
          <div>
            <h1 className="text-[48px] italic">Common Challenges</h1>
            <h1 className="text-[30px]">of Ageing Adults</h1>
          </div>
          <div className="flex px-10 justify-between">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="max-w-[390px] flex flex-col gap-5 items-center"
              >
                <Image
                  src={challenge.icon}
                  alt={`icon${index + 1}`}
                  width={80}
                  height={80}
                />
                <h4 className="text-[22px] text-center">
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

      <div
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
      </div>
    </>
  );
};

export default MsgBg1;
