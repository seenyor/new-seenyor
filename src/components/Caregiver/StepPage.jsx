import bgImg from "@/assets/caregiver/imgs/Step.png";
import Image from "next/image";
import img1 from "@/assets/caregiver/imgs/stepimg1.png";
import img2 from "@/assets/caregiver/imgs/stepimg2.png";
import img3 from "@/assets/caregiver/imgs/stepimg3.png";
import img4 from "@/assets/caregiver/imgs/stepimg4.png";

const StepPage = () => {
  const cards = [
    {
      id: 1,
      title: "Certified Training Programs",
      text: "Become Seenyor certified and stand out as a trusted provider.",
      img: img4,
    },
    {
      id: 2,
      title: "24/7 Customer Support",
      text: "Personalized guidance to help you thrive.",
      img: img3,
    },
    {
      id: 3,
      title: "Cutting-Edge Dealer Platform",
      text: "Immediate assistance for your customers in any situation.",
      img: img4,
    },
    {
      id: 4,
      title: "Dedicated Account Managers",
      text: "Track your progress and manage your business effortlessly.",
      img: img1,
    },
  ];
  return (
    <div className="relative w-full flex justify-center items-center font-poppins">
      {/* Background Image */}
      <Image
        src={bgImg}
        width={1720}
        height={1080}
        alt="Background"
        className="h-auto bg-cover md:h-[50vh] sm:min-h-[100vh]"
      />

      {/* Card on Image */}
      <div className="absolute h-full flex flex-col justify-end items-center py-20 gap-6 text-[#ffffff] px-4 md:py-12 md:gap-4 sm:py-8 sm:gap-3">
        <h2 className="text-[40px] font-bold text-center md:text-[32px] sm:text-[28px]">
          We’re with You Every Step of the Way
        </h2>
        <div className="flex gap-[50px] flex-wrap justify-center md:gap-[30px] sm:gap-[20px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="max-w-[367px] w-full border border-solid border-gradient-to-r from-[#999999] to-[#ffffff] bg-[#5B5B5B]/20 backdrop-blur-[2px] px-6 tab:px-2 py-4 tab:py-2 rounded-lg flex flex-col justify-center items-center gap-2 text-center md:max-w-[300px] sm:max-w-[250px]"
            >
              <Image
                src={card.img}
                width={50}
                height={50}
                alt="Image"
                className="w-[50px] h-[50px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px]"
              />
              <h1 className="text-[20px] font-bold md:text-[16px] sm:text-[16px]">
                {card.title}
              </h1>
              <h5 className="text-[18px] md:text-[14px] sm:text-[14px]">
                {card.text}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepPage;
