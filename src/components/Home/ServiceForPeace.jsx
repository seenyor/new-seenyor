import Image from "next/image";
import React from "react";
const services = [
  {
    id: 1,
    imgSrc: "/images/installation.png",
    title: "Professional Installation",
    description:
      "Ensure a seamless setup of your monitoring system with our expert installation service, tailored to fit your home and needs.",
    footerText: "Safety starts with the right setup.",
  },
  {
    id: 2,
    imgSrc: "/images/monitoring.png",
    title: "Professional Monitoring",
    description:
      "Enjoy peace of mind with our 24/7 monitoring by trained professionals, delivering immediate alerts and rapid responses for continuous safety.",
    footerText: "24/7 monitoring for ultimate safety.",
  },
  {
    id: 3,
    imgSrc: "/images/consulting.png",
    title: "Free Consultations",
    description:
      "Take advantage of our free consultations to discuss your specific requirements and receive personalized recommendations for optimal care solutions.",
    footerText: "Find your perfect system with our Experts.",
  },
];

const ServiceForPeace = () => {
  return (
    <div className="my-0 mb-40 sm:mb-5 mx-auto w-full rounded-xl bg-[#F3F4F6] ">
      <div className="max-w-[1320px] md:p-5 sm:p-3  mx-auto w-full">
        <p className="text-[2.3rem] md:text-[1.8rem] tab:text-[1.6rem] pt-8 text-[#FF6633] font-semibold text-center py-2">
          Services for Peace of Mind
        </p>
        <p className="text-center text-[28px] md:text-xl tab:text-lg max-w-4xl mx-auto sm:text-lg">
          From professional installation to ongoing monitoring, we ensure that
          you and your loved ones receive the highest level of support and peace
          of mind.
        </p>

        {/* cards */}
        <div className="flex justify-between items-center w-full tab:flex-col my-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="h-[450px] -mb-40 tab:mb-0 tab:h-[400px] overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md"
            >
              {/* Image Section */}
              <figure>
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  height={300}
                  width={200}
                  className="h-60 md:h-48 tab-h-auto object-cover w-full"
                />
              </figure>

              {/* Body Section */}
              <div className="p-3 md:p-2">
                <h3 className="text-xl md:text-[16px] font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm">{service.description}</p>
              </div>

              {/* Footer Text */}
              <p className="text-xs absolute bottom-5 left-3">
                {service.footerText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceForPeace;
