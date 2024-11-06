"use client";
import { Button, Img } from "@/components";
import CallbackForm from "@/components/Home/CallbackForm";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className=" flex  flex-col gap-10 sm:gap-5 bg-white py-5 mx-6 sm:mx-2">
      <div className="flex sm:flex-col-reverse gap-4 items-center justify-between max-w-7xl my-0 mx-auto w-full py-10 pb-0 rounded-xl md:p-5 sm:px-2 px-5">
        <div className="w-1/2 sm:w-full">
          <h3 className="font-bold text-[2rem] sm:text-2xl">
            Get in Touch - 24/7 Live AI Support
          </h3>
          <p className="text-sm text-[#6C7482] my-5">
            Connect with confidence! Our support agents are available 24/7 for
            real-time assistance through advanced AI monitoring. Experience
            prompt and personalized solutions whenever you need them.
          </p>
          <Link href="#call_back_form">
            <button className="w-auto py-[10px] text-white bg-[#7F87FC] rounded-[10px] px-[1.2rem]  font-semibold">
              Request Call-Back
            </button>
          </Link>
        </div>
        {/* <Img src="product2.png" height={400} width={275} alt="Product" /> */}
        <div className="w-1/2 sm:w-full">
          <Image
            src="/images/contact_banner.png"
            height={200}
            width={300}
            alt="Product"
            className="w-full h-auto sm:mx-auto"
          />
        </div>
      </div>
      {/* hero */}
      <section
        className="relative sm:mb-3 w-full max-w-7xl mx-auto flex items-center sm:ps-3 justify-start sm:justify-center h-screen sm:h-[50vh] max-h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/oldWoman.jpg)" }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
          }}
        ></div>

        {/* Content */}
        <div className="absolute bottom-5 left-5 z-10 max-w-xl px-4">
          <h1 className="text-4xl font-bold sm:text-2xl">Just Care</h1>
          <h1 className="text-2xl pt-2 sm:text-xl">Installed your way!</h1>
          <p className="mt-4 sm:mt-2 text-xl md:text-lg">
            Keeping your loved ones safe 24/7 with <br /> constant monitoring
            around the clock.
          </p>
        </div>
      </section>

      <CallbackForm />
    </div>
  );
};

export default ContactUs;
