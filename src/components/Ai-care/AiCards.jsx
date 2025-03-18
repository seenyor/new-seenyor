import React from "react";
import Image from "next/image";
import product from "@/assets/ai-care/product2.png";
import img from "@/assets/ai-care/heroImg.png";
import RightMark from "@/assets/ai-care/svg/RightMark";
import stroke from "@/assets/ai-care/stroke.png";
import strokeR from "@/assets/ai-care/strokeR.png";
import cardimg1 from "@/assets/ai-care/cardImg/cardimg1.png";
import cardimg2 from "@/assets/ai-care/cardImg/cardimg2.png";
import cardimg3 from "@/assets/ai-care/cardImg/cardimg3.png";
import cardimg4 from "@/assets/ai-care/cardImg/cardimg4.png";
import cardimg5 from "@/assets/ai-care/cardImg/cardimg5.png";
import cardimg6 from "@/assets/ai-care/cardImg/cardimg6.png";
import cardimg7 from "@/assets/ai-care/cardImg/cardimg7.png";

const cardData = [
  {
    title: "Automated Fall Detection",
    description:
      "With every step they take, you can rest assured that Seenyor is there to catch them if they fall.",
    features: [
      "Precise fall detection location",
      "Immediate alarm triggering",
      "AI Fall analytics and confirmation",
    ],
    image: cardimg1,
  },
  {
    title: "Safety & Daily Insights",
    description:
      "Your loved one is safe, day and night. Their well-being is supported with continuous insights, so you can feel confident.",
    features: [
      "Pulse & Breathing Insights",
      "Sleep Insights",
      "Detection of Unusual Activity",
    ],
    image: cardimg2,
  },
  {
    title: "Sleep Insights",
    description:
      "Ensure your loved one's well-being while they rest. Seenyor provides insights into their sleep journey.",
    features: [
      "Insights into Different Sleep Stages",
      "Sleep Score with AI Evaluation",
      "Fall Detection & AI Validation",
    ],
    image: cardimg3,
  },
  {
    title: "Daily Activity Insights",
    description:
      "From morning walks to quiet moments, Seenyor provides valuable insights into their daily movements.",
    features: [
      "Indoor Activity Duration & Still Time",
      "Walking Speed and Distance",
      "Room Visits Count",
    ],
    image: cardimg4,
  },
  {
    title: "AI Insights",
    description:
      "Seenyor processes all data into simple, easy-to-understand updates, giving you a clearer view of your loved one's well-being.",
    features: [
      "Sleep Insights Powered by AI",
      "Activity Insights Powered by AI",
      "Well-being Insights Powered by AI",
    ],
    image: cardimg5,
  },
  {
    title: "Live Location",
    description:
      "Seenyor provides real-time location information, so you'll know if they're safe or in need of help.",
    features: [
      "Position within the Room",
      "Fall Location Detection",
      "AI Posture Insights",
    ],
    image: cardimg6,
  },
  {
    title: "Voice Communication",
    description:
      "Stay connected with your loved one through easy, real-time communication, whether it’s for a quick check-in or to stay in touch throughout the day.",
    features: ["Live Voice Communication", "Instant Calls"],
    image: cardimg7,
  },
];

const Card = ({ title, description, features, image, reverse }) => {
  return (
    <div
      className={`bg-white relative p-8 rounded-[30px] w-full flex items-center gap-[88px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={710}
        height={340}
        className="h-[17.708vw] rounded-[20px]"
      />
      <div
        className={`${
          reverse
            ? "absolute top-[-17%] left-[0%] max-w-[46vw] w-full h-[28.646vw] bg-[#ffffff]/70 rounded-[30px] z-0"
            : "absolute top-[-17%] right-[0%] max-w-[46vw] w-full h-[28.646vw] bg-[#ffffff]/70 rounded-[30px] z-0"
        }`}
      ></div>
      {/* text */}
      <div className={`max-w-[727px] relative ${reverse ? " ml-10" : ""}`}>
        <div className="z-10">
          <h3 className="text-[1.458vw] text-[#10005B] font-bold mb-2">
            {title}
          </h3>
          <p className="text-[1.458vw] font-light">
            {description} <br />
            <br />
          </p>
          <ul className="text-[1.458vw]">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <RightMark className="w-5 h-5" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const AiCards = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-[48px] text-[#F8E3EC]">
          We Offer <span className="font-bold">Peace of Mind</span>
        </h1>
        <h6 className="text-[30px]">No Wearables, Just Reliable Safety</h6>
        <div className="max-w-[1710px] w-full flex justify-between items-center mt-24 tab:mt-16 mb-10">
          <div className="min-w-[700px] tab:min-w-[300px] h-[50px] bg-transparent"></div>
          <p className="max-w-[860px] text-[28px] tab:text-lg text-start">
            Non-intrusive technology ensures comfort and ease while providing
            continuous Fall Detection and valuable insights into daily activity.
            <br />
            <br />
            Effortlessly stay informed about your loved one&apos;s well-being,
            whether they&apos;re resting or moving around the home, day or
            night.
          </p>
        </div>
      </div>
      <div className="bg-[#F8E3EC] flex justify-center w-full mx-auto min-h-screen py-20">
        <div className="max-w-[1710px] w-full relative">
          <div className="bg-white w-[626px] tab:w-[300px] h-[626px] tab:h-[300px] rounded-full flex justify-center items-center absolute top-[-530px] left-10 tab:top-[-300px]">
            <Image
              src={product}
              alt="product"
              width={557}
              height={557}
              className="w-[557px] tab:w-[288px]"
            />
          </div>

          {/* Cards Section */}
          <div>
            <div className="max-w-[1700px] w-full mx-auto p-6 flex flex-col justify-center items-center mt-[250px]">
              {cardData.map((card, index) => (
                <>
                  <Card key={index} {...card} reverse={index % 2 == 0} />
                  {/* stroke */}
                  {index < cardData.length - 1 && (
                    <>
                      {index % 2 === 0 ? (
                        <Image
                          src={stroke}
                          alt="stroke"
                          width={845}
                          height={117}
                          className="m-16"
                        />
                      ) : (
                        <Image
                          src={strokeR}
                          alt="stroke"
                          width={845}
                          height={117}
                          className="m-16"
                        />
                      )}
                    </>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCards;
