"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Navbar";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const ProfessionalMonitoring = () => {
  // w-full max-w-7xl mx-auto
  return (
    <div className=" flex  flex-col gap-10 bg-white py-5 mx-6">
      {/* hero */}
      <section
        className="relative w-full max-w-7xl mx-auto flex items-center justify-start sm:justify-center h-screen max-h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/servicehero.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-xl ps-16 sm:ps-0 px-4">
          <h1 className="text-4xl font-bold sm:text-2xl ">24/7 Monitoring</h1>
          <h1 className="text-2xl pt-2 sm:text-xl ">by Professional Agents.</h1>
          <p className="mt-4 text-xl md:text-lg">
            Ensuring immediate response and peace of mind, day and night.
          </p>
          <button className="mt-6 px-6 text-white py-[10px] font-semibold text-lg bg-[#80CAA7] rounded-md">
            Protect Them Now
          </button>
        </div>
      </section>

      <ArrowDown
        onClick={() =>
          document
            .getElementById("footer-section")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="h-[2.00rem] -mt-5 text-white w-[2rem] md:w-[30%] object-contain mx-auto p-2 rounded-[50%] bg-[#2C3142] cursor-pointer"
      />

      {/* Alert verification */}
      <div className="max-w-7xl my-0 mx-auto w-full rounded-xl  md:p-5">
        <p className="text-[2rem] font-semibold text-center py-2">
          Alerts Verification with Confidence
        </p>
        <p className="text-center text-xl max-w-3xl mx-auto w-full px-5">
          Our platform empowers agents to confirm alerts and take swift action
          for elderly safety by following a predefined checklist.
        </p>

        <div className="w-full h-auto mt-8 relative">
          <Image
            className="w-full h-auto"
            src="/images/alert.png"
            width={200}
            height={200}
            alt="alert verification"
          />
          <div className="ms-16 sm:ms-0 grid grid-cols-4 sm:grid-cols-2 gap-20 sm:gap-5 absolute top-12">
            <div className="w-52 text-center">
              <Image
                className="w-20 mx-auto h-auto"
                src="/images/detected.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Alert Detected</p>
              <p className="">Instant Notifications and SMS sent</p>
            </div>
            <div className="w-52 text-center">
              <Image
                className="w-20 mx-auto h-auto"
                src="/images/detected2.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Calling Elderly</p>
              <p className="">2-Way Audio from Device</p>
            </div>
            <div className="w-52 text-center">
              <Image
                className="w-20 mx-auto h-auto"
                src="/images/detected3.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Calling Contacts</p>
              <p className="">Assigned to Aging loved ones</p>
            </div>
            <div className="w-52 text-center">
              <Image
                className="w-20 mx-auto h-auto"
                src="/images/detected4.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Calling Emergency</p>
              <p className="">Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Monitoring</h2>
      </div>
    </div>
  );
};

export default ProfessionalMonitoring;
