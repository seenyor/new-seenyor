import { Button, Img } from "@/components";
import Image from "next/image";
import Artnow from "@/components/Home/Artnow";
import PeaceOfMind from "@/components/Home/PeaceOfMind";
import ServiceForPeace from "@/components/Home/ServiceForPeace";
import CallbackForm from "@/components/Home/CallbackForm";
import HomeCarousel from "@/components/Home/HomeCarousel";
import ScrollButton from "@/components/ScrollButton";
import Link from "next/link";
const Home = () => {
  return (
    <div className=" flex w-full flex-col gap-10 sm:gap-5 bg-white px-6 pt-5">
      {/* hero section* */}
      <div className="relative flex sm:flex-col-reverse gap-4 items-start justify-between max-w-7xl my-0 mx-auto w-full py-10 pb-0 rounded-xl md:p-5 sm:px-2 px-5">
        <div>
          <h3 className="font-bold text-[2rem] sm:text-2xl">
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
          <p className="mt-14 sm:mt-5">*Limited Stock Available!</p>
        </div>
        {/* <Img src="product2.png" height={400} width={275} alt="Product" /> */}
        <Image
          src="/images/product2.png"
          height={200}
          width={300}
          alt="Product"
          className="!h-full w-auto sm:mx-auto"
        />
      </div>
      <ScrollButton />

      {/*section 2- act now section */}
      <Artnow />
      <PeaceOfMind />

      <div className="max-w-7xl my-0 mx-auto w-full rounded-xl mb-12 sm:mb-0">
        <p className="text-[2rem] sm:text-2xl font-semibold text-center py-2">
          Comprehensive Home Monitoring
        </p>
        <p className="text-center text-xl pb-10 sm:text-lg max-w-3xl mx-auto w-full px-5">
          Effortlessly monitor your loved one’s health and safety, whether
          they’re resting or moving around the house, day or night.
        </p>
        <HomeCarousel />
      </div>
      {/* empowering section */}
      <div className="max-w-7xl my-0 mx-auto w-full  px-5 sm:px-0">
        <div className="bg-[#7F87FC] py-10 rounded-xl text-white text-center">
          <h3 className="font-semibold text-4xl sm:text-3xl">
            Empowering Care in Every Setting
          </h3>
          <p className="max-w-xl mx-auto w-full text-xl sm:text-lg py-3">
            Our solution adapts to every environment, offering peace of mind for
            families and caregivers.
          </p>

          <div className="flex md:flex-col gap-12 mt-16 sm:mt-6 justify-center">
            <div className="w-56 md:mx-auto h-auto">
              <Image
                className="h-auto w-full"
                src="/images/monitor.png"
                width={200}
                height={200}
                alt="monitoring"
              />
              <Link href="#call_back_form">
                <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                  Request a Call-Back
                </button>
              </Link>
            </div>
            <div className="w-56 md:mx-auto h-auto -mt-10">
              <Image
                className="h-auto w-full"
                src="/images/home.png"
                width={200}
                height={200}
                alt="monitoring"
              />
              <Link href="/systembuilder">
                <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="w-56 md:mx-auto h-auto">
              <Image
                className="h-auto w-full"
                src="/images/nursing.png"
                width={200}
                height={200}
                alt="monitoring"
              />
              <Link href="#call_back_form">
                <button className="bg-[#2C3142] mt-5 text-white font-semibold px-2 py-2 rounded">
                  Request a Call-Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* video section */}

      <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl  md:p-5 sm:p-2">
        <p className="text-[2rem] sm:text-[1.5rem] font-semibold text-center py-2">
          Stay in Control of Their Safety, Anytime
        </p>
        <p className="text-center text-xl md:text-lg max-w-5xl mx-auto">
          Easily monitor your loved one&apos;s safety and activity from our
          intuitive platform and app. Check in on them anytime they’re at home,
          giving you peace of mind no matter where you are.
        </p>

        <div className="w-full max-w-3xl mx-auto mt-8">
          {/* <video
            controls
            width="100%"
            poster="/images/videothumb.png"
            className="rounded-md"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video> */}
          <div className="rounded-md" style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="370"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=oMCeP5jti2Fz4jZ4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Services for Peace of Mind */}
      <ServiceForPeace />

      <div className="max-w-7xl my-0 w-full mx-auto rounded-xl  md:p-5 sm:p-2 bg-[#2C3142] flex justify-between items-center px-8 py-6 sm:text-sm sm:px-4 sm:py-3">
        <p className="text-white">
          Your Journey to Safety and Peace of Mind Begins Here
        </p>
        <button className="bg-[#7F87FC] min-w-24 text-white font-semibold px-2 sm:px-1 py-2 sm:text-xs rounded">
          Get Started
        </button>
      </div>

      <CallbackForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
