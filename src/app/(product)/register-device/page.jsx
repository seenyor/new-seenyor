import RegisterHero from "@/components/register-device/RegisterHero";
import React from "react";
import Image from "next/image";
import bg from "@/assets/register/registerBg.png";

const page = () => {
  return (
    <div className="w-full h-[70%]">
      <RegisterHero />
      <Image
        src={bg}
        alt="bg"
        className="w-full h-full"
        width={1920}
        height={500}
      />
    </div>
  );
};

export default page;
