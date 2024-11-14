"use client";
import { Img } from "@/components";
import GetStartArea from "@/components/GetStartArea";
import CallbackForm from "@/components/Home/CallbackForm";
import ScrollButton from "@/components/ScrollButton";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Installation = () => {
  return (
    <div className=" flex  flex-col gap-20 tab:gap-5 bg-white px-6 tab:px-2">
      {/* hero */}
      <section
        className="relative sm:mb-6 max-w-[1720px] w-full mx-auto max-h-[780px] md:h-[400px] tab:h-[370px]  px-20 md:px-10 tab:px-5 h-screen  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/public/images/service/servicebanner2.webp)",
        }}
      >
        <div className="w-full  mx-auto flex items-center justify-start sm:justify-center h-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-bold text-[48px] md:text-3xl tab:text-2xl">
              Advanced Elderly Monitoring
            </h1>
            <h1 className="text-3xl md:text-2xl tab:text-xl pt-2 ">
              Installed your way!
            </h1>
            <p className="mt-4 sm:mt-2 text-xl md:text-lg">
              Choose professional installation or easy self-setup for complete
              peace of mind.
            </p>
            <Link href="/systembuilder">
              <button className="mt-6 px-6 text-white py-[10px] font-semibold text-lg bg-[#80CAA7] rounded-md">
                Protect Them Now
              </button>
            </Link>
          </div>
        </div>
        <p className="text-sm absolute bottom-5 left-5">
          *Note: Incorrect installation may affect accuracy.
        </p>
      </section>
      <ScrollButton />

      {/* Two options start */}
      <div className="max-w-[1720px] my-0 mx-auto w-full  rounded-xl md:p-5 sm:p-2">
        <div className="flex justify-center">
          <button className="bg-neutral-950 text-[40px] md:text-2xl text-white my-0  rounded-[10px] px-[1.2rem] py-[6px] font-semibold">
            Two Options
          </button>
        </div>
        <p className=" text-center pb-8 py-4 text-[40px] md:text-2xl">
          Same, Advanced Elderly Care System
        </p>

        {/* cards */}
        <div className="flex justify-between items-center w-full md:flex-col gap-6">
          <div className="h-[1080px] md:h-[920px] w-full tab:h-[780px] sm:h-[750px] overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
            {/*  <!-- Image --> */}
            <figure>
              <Image
                src="/public/images/service/option1.webp"
                alt="stroke"
                height={500}
                width={500}
                quality={100}
                className="h-auto max-h-[650px] sm:h-[374px] w-full"
              />
            </figure>
            <div className="absolute top-6 z-10 w-full ">
              <div className="px-5 pt-8 md:pt-0 ">
                <Img
                  src="setting.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 sm:w-8 sm:h-8 mx-auto object-contain"
                />
                <p className=" text-[30px] md:text-[1.4rem] sm:text-[16px] font-semibold text-center py-2">
                  Set it up Yourselfe
                </p>
                <p className="max-w-3xl text-xl md:text-[16px] sm:text-sm text-center">
                  Install Your Seenyor System in Minutes with Interactive
                  Guidance
                </p>
              </div>
            </div>
            <p className="text-sm absolute bottom-5 ps-8">
              Please note: Incorrect installation may affect accuracy.
            </p>
            {/*  <!-- Body--> */}
            <p className="text-center text-[18px] tab:text-sm px-5 sm:px-0 py-5">
              Your Seenyor system can be installed on the ceiling or wall,
              guided by our app’s interactive setup process. From mounting to
              network pairing, our step-by-step instructions make it easy for
              you to set up the device accurately. Just follow along and make
              sure it’s positioned at the recommended height for the best
              performance.
            </p>
            {/* changeable1 */}
            <div className="flex justify-center gap-12 md:gap-6 mx-8 sm:mx-3 my-5">
              <div className="w-full max-w-[208px]">
                <Image
                  src="/images/mobile.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-lg md:text-sm tab:text-xs font-semibold">
                  Easy Setup with Interactive Guidance
                </p>
              </div>
              <div className="w-full max-w-[208px]">
                <Image
                  src="/images/donation.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-lg md:text-sm tab:text-xs font-semibold">
                  Save Money by Installing It Yourself
                </p>
              </div>
            </div>
          </div>
          <div className="h-[1080px] md:h-[920px] w-full tab:h-[780px] sm:h-[750px] overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
            {/*  <!-- Image --> */}
            <figure>
              <Image
                src="/public/images/service/option2.webp"
                alt="stroke"
                height={500}
                width={500}
                quality={100}
                className="h-auto max-h-[650px] sm:h-[374px] w-full"
              />
            </figure>
            <div className="absolute top-6 z-10 w-full ">
              <div className="px-5  pt-8 md:pt-0 ">
                <Img
                  src="hand.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 sm:w-8 sm:h-8 mx-auto object-contain"
                />
                <p className=" text-[30px] md:text-[1.4rem] sm:text-[16px] font-semibold text-center sm:py-0 py-2">
                  Professional Installation for Complete Peace of Mind
                </p>
                <p className="max-w-3xl text-xl md:text-[16px] sm:text-sm text-center">
                  Expert setup for optimal performance and worry-free use.
                </p>
              </div>
            </div>
            {/* <div className="absolute bottom-0 flex justify-center w-full">
              <p className="text-sm bg-[#000] text-white font-semibold px-3 py-2 rounded-t-md">
                Peace of Mind
              </p>
            </div> */}
            {/*  <!-- Body--> */}
            <p className="text-center text-[18px] tab:text-sm px-5 sm:px-0 py-5">
              Schedule a professional installation with one of our trained
              technicians. They’ll handle everything from wiring to Wi-Fi setup
              and thorough device testing, ensuring your system is perfectly
              configured and ready to keep your loved ones safe. Rest easy
              knowing your system is set up to the highest standards for
              reliability and accuracy.
            </p>

            <div className="flex justify-between gap-6 mx-8 sm:mx-3 my-5">
              <div className="w-full max-w-[208px]">
                <Image
                  src="/images/certified.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-lg md:text-sm tab:text-xs font-semibold">
                  Installed by Certified Professionals
                </p>
              </div>
              <div className="w-full max-w-[208px]">
                <Image
                  src="/images/thumb.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-lg md:text-sm tab:text-xs font-semibold">
                  Turnkey Solution for Worry-Free Setup
                </p>
              </div>
              <div className="w-full max-w-[208px]">
                <Image
                  src="/images/aqurate.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-lg md:text-sm tab:text-xs font-semibold">
                  100% Accurate Installation Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border border-b-1 border-black-900 mt-12"></div> */}
      </div>
      {/* Two options end */}

      {/* Intelligent care */}

      <GetStartArea />
      {/* how it works */}

      <div className=" bg-[#7F87FC] h-[750px] flex justify-center items-center md:h-auto py-10 mb-8 sm:mb-2 my-0 px-5 sm:px-0">
        <div className="mx-auto w-full max-w-[1320px] rounded-xl text-white text-center">
          <h3 className="font-semibold text-[40px] sm:text-3xl">
            How it works?
          </h3>
          <p className=" text-center px-5 w-full text-[30px] sm:text-lg py-3">
            Follow these simple steps to purchase and set up your Seenyor
            system.
          </p>
          <div className="flex tab:flex-col gap-16 md:gap-5 mt-16 sm:mt-6 justify-center">
            <div className="w-[290px] md:w-[200px] tab:mx-auto h-auto">
              <Image
                className="h-auto w-full"
                src="/images/system.png"
                width={200}
                height={200}
                alt="monitoring"
                quality={100}
              />
              <Link href="/systembuilder">
                <button className="bg-[#2C3142] mt-5 text-white font-semibold px-5 md:px-2 py-2 rounded">
                  Start Building
                </button>
              </Link>
            </div>
            <div className="w-[290px] md:w-[200px] tab:mx-auto h-auto mt-3 xxl:mt-0">
              <Image
                className="h-auto w-full "
                src="/images/qr.png"
                width={200}
                height={200}
                alt="monitoring"
                quality={100}
              />
              {/* <Link href="#">
                <button className="bg-[#2C3142] mt-5 text-white font-semibold px-5 md:px-2 py-2 rounded">
                  Download App
                </button>
              </Link> */}
            </div>
            <div className="w-[290px] md:w-[200px] tab:mx-auto h-auto">
              <Image
                className="h-auto w-full"
                src="/images/enjoy.png"
                width={200}
                height={200}
                alt="monitoring"
                quality={100}
              />
              <Link href="/systembuilder">
                <button className="bg-[#2C3142] mt-5 text-white font-semibold px-5 md:px-2 py-2 rounded">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CallbackForm />
    </div>
  );
};

export default Installation;
