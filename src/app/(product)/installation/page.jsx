"use client";
import { Img } from "@/components";
import CallbackForm from "@/components/Home/CallbackForm";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Installation = () => {
  return (
    <div className=" flex  flex-col gap-10 sm:gap-5 bg-white py-5 mx-6 sm:mx-2">
      {/* hero */}
      <section
        className="relative sm:mb-3 w-full max-w-7xl mx-auto flex items-center sm:ps-3 justify-start sm:justify-center h-screen sm:h-[50vh] max-h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/servicebanner2.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-xl ps-16 sm:ps-0 px-4">
          <h1 className="text-4xl font-bold sm:text-2xl ">
            Advanced Elderly Monitoring
          </h1>
          <h1 className="text-2xl pt-2 sm:text-xl ">Installed your way!</h1>
          <p className="mt-4 sm:mt-2 text-xl md:text-lg">
            Choose professional installation or easy self-setup for complete
            peace of mind.
          </p>
          <button className="mt-6 px-6 text-white py-[10px] font-semibold text-lg bg-[#80CAA7] rounded-md">
            Protect Them Now
          </button>
        </div>
        <p className="text-sm absolute bottom-8 left-8">
          *Note: Incorrect installation may affect accuracy.
        </p>
      </section>
      <ArrowDown
        onClick={() =>
          document
            .getElementById("footer-section")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="h-[2rem] -mt-5 text-white w-[2rem]  object-contain mx-auto p-2 rounded-[50%] bg-[#2C3142] cursor-pointer"
      />

      {/* Two options start */}
      <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl md:p-5 sm:p-2">
        <div className="flex justify-center">
          <button className="bg-neutral-950 text-white my-0  rounded-[10px] px-[1.2rem] py-[6px] font-semibold">
            Two Options
          </button>
        </div>
        <p className="text-[1.4rem] text-center py-4">
          Same, Advanced Elderly Care System
        </p>

        {/* cards */}
        <div className="flex justify-between items-center w-full md:flex-col gap-6">
          <div className="h-[750px] sm:h-[650px] overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
            {/*  <!-- Image --> */}
            <figure>
              <Image
                src="/images/option1.png"
                alt="stroke"
                height={500}
                width={500}
                className="h-auto max-h-[400px] w-full"
              />
            </figure>
            <div className="absolute top-6 z-10 w-full ">
              <div className="px-5 ">
                <Img
                  src="setting.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 sm:w-8 sm:h-8 mx-auto object-contain"
                />
                <p className="text-[1.4rem] font-semibold text-center py-2">
                  Set it up Yourselfe
                </p>
                <p className="max-w-3xl text-center">
                  Install Your Seenyor System in Minutes with Interactive
                  Guidance
                </p>
              </div>
            </div>
            <p className="text-sm absolute bottom-5 ps-8">
              Please note: Incorrect installation may affect accuracy.
            </p>
            {/*  <!-- Body--> */}
            <p className="text-center text-sm p-2">
              Your Seenyor system can be installed on the ceiling or wall,
              guided by our app’s interactive setup process. From mounting to
              network pairing, our step-by-step instructions make it easy for
              you to set up the device accurately. Just follow along and make
              sure it’s positioned at the recommended height for the best
              performance.
            </p>

            <div className="flex justify-between gap-6 mx-8 sm:mx-3 my-5">
              <div className="w-full max-w-48">
                <Image
                  src="/images/mobile.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-sm sm:text-xs font-semibold">
                  Easy Setup with Interactive Guidance
                </p>
              </div>
              <div className="w-full max-w-48">
                <Image
                  src="/images/donation.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-sm sm:text-xs font-semibold">
                  Save Money by Installing It Yourself
                </p>
              </div>
            </div>
          </div>
          <div className="h-[750px] sm:h-[650px] overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
            {/*  <!-- Image --> */}
            <figure>
              <Image
                src="/images/option2.png"
                alt="stroke"
                height={500}
                width={500}
                className="h-auto max-h-[400px] w-full"
              />
            </figure>
            <div className="absolute top-6 z-10 w-full ">
              <div className="px-5 ">
                <Img
                  src="hand.svg"
                  width={156}
                  height={32}
                  alt="Group 1"
                  className="w-12 h-12 sm:w-8 sm:h-8 mx-auto object-contain"
                />
                <p className="text-[1.4rem] font-semibold text-center py-2">
                  Professional Installation for Complete Peace of Mind
                </p>
                <p className="max-w-3xl text-center">
                  Expert setup for optimal performance and worry-free use.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 flex justify-center w-full">
              <p className="text-sm bg-[#000] text-white font-semibold px-3 py-2 rounded-md">
                Peace of Mind
              </p>
            </div>
            {/*  <!-- Body--> */}
            <p className="text-center text-sm p-2">
              Schedule a professional installation with one of our trained
              technicians. They’ll handle everything from wiring to Wi-Fi setup
              and thorough device testing, ensuring your Seenyor system is
              perfectly configured and ready to keep your loved ones safe. Rest
              easy knowing your system is set up to the highest standards for
              reliability and accuracy.
            </p>

            <div className="flex justify-between gap-6 mx-8 sm:mx-3 my-5">
              <div className="w-full max-w-48">
                <Image
                  src="/images/certified.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-sm sm:text-xs font-semibold">
                  Installed by Certified Professionals
                </p>
              </div>
              <div className="w-full max-w-48">
                <Image
                  src="/images/thumb.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-sm sm:text-xs font-semibold">
                  Turnkey Solution for Worry-Free Setup
                </p>
              </div>
              <div className="w-full max-w-48">
                <Image
                  src="/images/aqurate.svg"
                  alt="stroke"
                  height={200}
                  width={200}
                  className="h-auto w-auto mx-auto"
                />
                <p className="text-center text-sm sm:text-xs font-semibold">
                  100% Accurate Installation Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-b-1 border-black-900 mt-12"></div>
      </div>
      {/* Two options end */}

      {/* Intelligent care */}

      <div className="max-w-7xl my-0 w-full mx-auto rounded-xl  md:p-5 sm:p-2 bg-[#2C3142] flex justify-between items-center px-8 py-6 sm:text-sm sm:px-4 sm:py-3">
        <p className="text-white">
          Your Journey to Safety and Peace of Mind Begins Here
        </p>
        <Link href="/systembuilder">
          <button className="bg-[#7F87FC] min-w-24 text-white font-semibold px-2 sm:px-1 py-2 sm:text-xs rounded">
            Get Started
          </button>
        </Link>
      </div>
      {/* how it works */}
      <div className="max-w-7xl my-0 mx-auto w-full  px-5 sm:px-2">
        <div className="bg-[#7F87FC] py-10 rounded-xl text-white text-center">
          <h3 className="font-semibold text-4xl">How it works?</h3>
          <p className="text-xl sm:text-lg py-3">
            Follow these simple steps to purchase and set up your Seenyor
            system.
          </p>

          <div className="flex md:flex-col gap-12 mt-16 justify-center">
            <div className="w-56 h-auto sm:mx-auto">
              <Image
                className="h-auto w-full"
                src="/images/system.png"
                width={300}
                height={300}
                quality={100}
                alt="monitoring"
              />
              <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                Start Building
              </button>
            </div>
            <div className="w-56 h-auto sm:mx-auto -mt-10">
              <Image
                className="h-auto w-full"
                src="/images/qr.png"
                width={300}
                height={300}
                quality={100}
                alt="monitoring"
              />
              <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                Download App
              </button>
            </div>
            <div className="w-56 h-auto sm:mx-auto">
              <Image
                className="h-auto w-full"
                src="/images/enjoy.png"
                width={300}
                height={300}
                quality={100}
                alt="monitoring"
              />
              <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <CallbackForm />
    </div>
  );
};

export default Installation;
