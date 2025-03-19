"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import mob1 from "@/assets/ai-care/mobileapp/mob1.png";
import mob2 from "@/assets/ai-care/mobileapp/mob2.png";
import mob3 from "@/assets/ai-care/mobileapp/mob3.png";
import mob4 from "@/assets/ai-care/mobileapp/mob4.png";
import mob5 from "@/assets/ai-care/mobileapp/mob5.png";
import mob6 from "@/assets/ai-care/mobileapp/mob6.png";
import mob7 from "@/assets/ai-care/mobileapp/mob7.png";
import mob8 from "@/assets/ai-care/mobileapp/mob8.png";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
    <section className="w-full flex justify-center items-center px-6 sm:px-0 py-16 bg-[#E4E3F8] overflow-hidden">
      <div className="w-full max-w-[1710px] flex flex-col gap-[98px]">
        {/* Text */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#16065F]">Mobile App</h1>
          <p className="text-[30px] sm:text-[24px]">for Full Control</p>
        </div>

        {/* Desktop Grid */}
        <div className="grid sm:hidden grid-cols-4 gap-20">
          {appScreens.map((screen, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-light italic">{screen.title}</h2>
              <Image
                src={screen.image}
                alt={screen.title}
                width={300}
                height={650}
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel with Splide */}
        <div className="relative w-full hidden sm:block">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              focus: "center",
              gap: "1rem",
              padding: "25%",
              autoplay: true,
              interval: 1500,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
            }}
            className="w-full"
          >
            {appScreens.map((screen, index) => (
              <SplideSlide key={index} className="flex flex-col items-center">
                <h2 className="text-[12px] font-light italic">
                  {screen.title}
                </h2>
                <Image
                  src={screen.image}
                  alt={screen.title}
                  width={200}
                  height={400}
                  className="transition-transform duration-300"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default AiMobileApp;
