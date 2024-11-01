import Image from "next/image";
import React from "react";
import { Img } from "..";

const ServiceForPeace = () => {
  return (
    <div className="max-w-7xl my-0 mb-40 mx-auto w-full p-10 rounded-xl bg-[#F3F4F6] md:p-5">
      <p className="text-[2rem] font-semibold text-center py-2">
        Services for Peace of Mind
      </p>
      <p className="text-center text-xl">
        From professional installation to ongoing monitoring, we ensure that you
        and your loved ones receive <br /> the highest level of support and
        peace of mind.
      </p>

      {/* cards */}
      <div className="flex justify-between items-center w-full sm:flex-col my-5 gap-6">
        <div className="h-[450px] -mb-40 sm:h-auto overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
          {/*  <!-- Image --> */}
          <figure>
            <Image
              src="/images/installation.png"
              alt="stroke"
              height={300}
              width={200}
              className="aspect-video h-60 sm:h-auto w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-3">
            <h3 className="text-[1.3rem] font-semibold">
              Professional Installation
            </h3>
            <p>
              Ensure a seamless setup of your monitoring system with our expert
              installation service, tailored to fit your home and needs.
            </p>
          </div>
          <p className="text-sm absolute bottom-5 left-3">
            Safety starts with the right setup.
          </p>
        </div>
        <div className="h-[450px] -mb-40 sm:h-auto overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
          {/*  <!-- Image --> */}
          <figure>
            <Image
              src="/images/monitoring.png"
              alt="stroke"
              height={300}
              width={200}
              className="aspect-video h-60 sm:h-auto w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-3">
            <h3 className="text-[1.3rem] font-semibold">
              Professional Monitoring
            </h3>
            <p>
              Enjoy peace of mind with our 24/7 monitoring by trained
              professionals, delivering immediate alerts and rapid responses for
              continuous safety.
            </p>

            <p className="text-sm absolute bottom-5 left-3">
              {" "}
              24/7 monitoring for ultimate safety.
            </p>
          </div>
        </div>
        <div className="h-[450px] -mb-40 sm:h-auto overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
          {/*  <!-- Image --> */}
          <figure>
            <Image
              src="/images/consulting.png"
              alt="stroke"
              height={300}
              width={200}
              className="aspect-video h-60 sm:h-auto w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-3">
            <h3 className="text-[1.3rem] font-semibold">Free Consultations</h3>
            <p>
              Take advantage of our free consultations to discuss your specific
              requirements and receive personalized recommendations for optimal
              care solutions.
            </p>
          </div>
          <p className="text-sm absolute bottom-5 left-3">
            Find your perfect system with our Experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceForPeace;
