import { Button, Img } from "@/components";
import NavbarAvatar from "@/components/layouts/Navbar";
import { cookies } from "next/headers";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { IconBase } from "react-icons";
import Artnow from "@/components/Home/Artnow";
import PeaceOfMind from "@/components/Home/PeaceOfMind";
import ServiceForPeace from "@/components/Home/ServiceForPeace";
import Link from "next/link";
import CallbackForm from "@/components/Home/CallbackForm";
import Footer from "@/components/layouts/Footer";
const Home = () => {
  // const cookieStore = cookies();
  // const accessToken = cookieStore.get("access_token");
  return (
    <div className=" flex w-full flex-col gap-10 bg-white px-6 pt-5">
      {/* <NavbarAvatar accessToken={accessToken} /> */}

      {/* hero section* */}
      <div className="relative flex md:flex-col gap-4 items-start justify-between max-w-7xl my-0 mx-auto w-full py-10 pb-0 rounded-xl md:p-5 px-5">
        <div>
          <h3 className="font-bold text-[2rem]">
            Protect Your Loved Ones Before It’s Too Late
          </h3>
          <p className="text-[1.3rem]">
            1 in 4 People Over 65 Falls Each Year – Don’t Let Your Loved Ones Be
            Next
          </p>
          <p className="text-md my-5">
            Stay connected and ensure 24/7 protection, even when you can’t be
            there. Our non-wearable device detects falls instantly and monitors
            their safety around the clock.
          </p>
          <Button
            // disabled={isChecked}
            // onClick={handleCheckout}
            // type="submit"
            shape="round"
            color="green_200_green_400_01"
            className="w-auto my-0  rounded-[10px] px-[1.2rem] !py-0 font-semibold"
          >
            Protect Them Now
          </Button>
          <p className="mt-14">*Limited Stock Available!</p>
        </div>
        {/* <Img src="product2.png" height={400} width={275} alt="Product" /> */}
        <Image
          src="/images/product2.png"
          height={200}
          width={300}
          alt="Product"
          className="!h-full w-auto"
        />
      </div>
      <ArrowDown className="h-[2.00rem] text-white w-[2rem] md:w-[30%] object-contain mx-auto p-2 rounded-[50%] bg-[#2C3142]" />

      {/*section 2- act now section */}
      <Artnow />
      <PeaceOfMind />

      {/* empowering section */}
      <div className="max-w-7xl my-0 mx-auto w-full  px-5">
        <div className="bg-[#7F87FC] py-10 rounded-xl text-white text-center">
          <h3 className="font-semibold text-4xl">
            Empowering Care in Every Setting
          </h3>
          <p className="text-xl py-3">
            Our solution adapts to every environment, <br />
            offering peace of mind for families and caregivers.
          </p>

          <div className="flex md:flex-col gap-12 mt-16 justify-center">
            <div className="w-56 h-auto">
              <Image
                className="h-auto w-full"
                src="/images/monitor.png"
                width={200}
                height={200}
                alt="monitoring"
              />
              <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                Request a Call-Back
              </button>
            </div>
            <div className="w-56 h-auto -mt-10">
              <Image
                className="h-auto w-full"
                src="/images/home.png"
                width={200}
                height={200}
                alt="monitoring"
              />
              <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                Get Started
              </button>
            </div>
            <div className="w-56 h-auto">
              <Image
                className="h-auto w-full"
                src="/images/nursing.png"
                width={200}
                height={200}
                alt="monitoring"
              />
              <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                Request a Call-Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* video section */}

      <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl  md:p-5">
        <p className="text-[2rem] font-semibold text-center py-2">
          Stay in Control of Their Safety, Anytime
        </p>
        <p className="text-center text-xl">
          Easily monitor your loved one&apos;s safety and activity from our
          intuitive platform and app. Check in on <br /> them anytime they’re at
          home, giving you peace of mind no matter where you are.
        </p>

        <div className="w-full max-w-3xl mx-auto mt-8">
          <video
            controls
            width="100%"
            poster="/images/videothumb.png"
            className="rounded-md"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Services for Peace of Mind */}
      <ServiceForPeace />

      <div className="max-w-7xl my-0 w-full mx-auto rounded-xl  md:p-5 bg-[#2C3142] flex justify-between items-center px-8 py-6">
        <p className="text-white">
          Your Journey to Safety and Peace of Mind Begins Here
        </p>
        <button className="bg-[#7F87FC] text-white font-semibold px-2 py-2 rounded">
          Get Started
        </button>
      </div>

      <CallbackForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
