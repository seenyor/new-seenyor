import bgImg from "@/assets/caregiver/imgs/Step.png";
import Image from "next/image";

const StepPage = () => {
  const cards = [
    {
      id: 1,
      title: "Certified Training Programs",
      text: "Become Seenyor certified and stand out as a trusted provider.",
    },
    {
      id: 1,
      title: "24/7 Customer Support",
      text: "Personalized guidance to help you thrive.",
    },
    {
      id: 1,
      title: "Cutting-Edge Dealer Platform",
      text: "B Immediate assistance for your customers in any situation.",
    },
    {
      id: 1,
      title: " Dedicated Account Managers",
      text: "Track your progress and manage your business effortlessly.",
    },
  ];
  return (
    <div className="relative w-full flex justify-center items-center font-poppins">
      {/* Background Image */}
      <Image src={bgImg} alt="Background" />

      {/* Card on Image */}
      <div className="absolute h-full flex flex-col justify-end items-center py-20 gap-4 text-[#ffffff]">
        <h2 className="text-[40px] font-bold">
          We’re with You Every Step of the Way
        </h2>
        <div className="flex gap-[50px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="max-w-[367px] border border-solid border-gradient-to-r from-[#999999] to-[#ffffff] bg-[#5B5B5B]/20 backdrop-blur-[2px] px-4 rounded-lg flex flex-col justify-center items-center gap-2 text-center"
            >
              <h1 className="text-[20px] font-bold">{card.title}</h1>
              <h5 className="text-[18px] text-center">{card.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepPage;
