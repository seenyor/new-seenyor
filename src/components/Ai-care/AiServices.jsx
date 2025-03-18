import React from "react";
import Image from "next/image";
import act1 from "@/assets/ai-care/ser1.png";
import act2 from "@/assets/ai-care/ser2.png";

const AiServices = () => {
  const cardsData = [
    {
      id: 1,
      image: act1, // Replace with actual image path
      title: "Professional Installation",
      description:
        "Ensure a seamless setup of your monitoring system with our expert installation service, tailored to fit your home and needs.",
      footerText: "Safety starts with the right setup.",
    },
    {
      id: 2,
      image: act2, // Replace with actual image path
      title: "Professional Monitoring",
      description:
        "Enjoy peace of mind with our 24/7 monitoring by trained professionals, delivering immediate and rapid responses for continuous safety.",
      footerText: "24/7 monitoring for ultimate safety.",
    },
  ];
  return (
    <section className="w-full flex justify-center items-center px-6 tab:px-3 mx-auto overflow-hidden">
      <div className="w-full max-w-[1710px] flex flex-col gap-[98px]">
        {/* text */}
        <div className="w-full text-center">
          <h1 className="text-5xl text-[#16065F] font-bold">Peace of Mind</h1>
          <h1 className="text-[30px]">Services</h1>
        </div>
        {/* cards */}
        <div className="flex tab:flex-col items-center justify-center gap-[60px]">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-[#ECECEC] rounded-[30px] max-w-[825px] w-full text-[24px] h-[685px]"
            >
              <Image
                src={card.image}
                alt="card"
                width={824}
                height={335}
                className="h-[348px] w-auto rounded-t-[30px] bg-cover bg-center bg-no-repeat"
              />
              <div className="p-5 flex flex-col justify-between  h-[45%]">
                <h1 className="font-bold mt-4 text-[#10005B]">{card.title}</h1>
                <p className="font-light mt-2">{card.description}</p>
                <p className="mt-4">{card.footerText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServices;
