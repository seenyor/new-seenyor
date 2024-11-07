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
    <div className=" flex w-full flex-col gap-16 tab:gap-5 bg-white px-6 tab:px-2 pt-5">
      {/* hero section* */}
      <div className="mx-auto w-full">
        <div className="bg-[#F3F4F6] overflow-hidden relative px-10 tab:px-5 mx-[100px] xxl:mx-0 md:mx-0 py-32 md:py-20 rounded-xl">
          <div className="flex tab:flex-col gap-4 items-start justify-between ">
            <div className="w-[68%] tab:w-full  ">
              <h3 className="font-bold text-[2rem] md:text-2xl">
                Protect Your Loved Ones Before It’s Too Late
              </h3>
              <p className="text-[1.3rem] md:text-[16px] md:pt-4 tab:pt-2">
                1 in 4 People Over 65 Falls Each Year – Don’t Let Your Loved
                Ones Be Next
              </p>
              <p className="text-md my-7 tab:my-4 md:text-sm">
                Stay connected and ensure 24/7 protection, even when you can’t
                be there. Our non-wearable device detects falls instantly and
                monitors their safety around the clock.
              </p>
              <Link
                href="/systembuilder"
                className="tab:flex tab:justify-center"
              >
                <button className="w-auto py-[10px] px-3 text-white bg-primary rounded-[10px]  font-semibold">
                  Protect Them Now
                </button>
              </Link>
            </div>
            <div className="w-[32%] -mt-10 md:mt-0 tab:w-full">
              <Image
                src="/images/product2.png"
                height={200}
                width={300}
                alt="Product"
                className="w-auto scale-125 tab:scale-100 ms-20 md:ms-10  h-full tab:mx-auto"
              />
            </div>
          </div>
          <p className="px-5 text-sm absolute bottom-5">
            *Limited Stock Available!
          </p>
        </div>
      </div>
      <ScrollButton />

      {/*section 2- act now section */}
      <Artnow />
      <PeaceOfMind />

      <div className="max-w-[1320px] my-0 mx-auto w-full rounded-xl mb-12 tab:mb-0">
        <p className="text-[2.3rem] md:text-[1.8rem] tab:text-[1.6rem] text-[#FF6633] font-semibold text-center py-2">
          Comprehensive Home Monitoring
        </p>
        <p className="text-center text-[24px] md:text-xl tab:text-lg pb-10 sm:text-lg max-w-4xl mx-auto w-full px-5">
          Effortlessly monitor your loved one’s health and safety, whether
          they’re resting or moving around the house, day or night.
        </p>
        <HomeCarousel />
      </div>
      {/* empowering section */}
      <div className=" bg-[#7F87FC] py-10 mb-8 sm:mb-2 my-0 px-5 sm:px-0">
        <div className="mx-auto w-full max-w-[1320px] rounded-xl text-white text-center">
          <h3 className="font-semibold text-4xl sm:text-3xl">
            Empowering Care in Every Setting
          </h3>
          <p className="max-w-xl mx-auto w-full text-xl sm:text-lg py-3">
            Our solution adapts to every environment, offering peace of mind for
            families and caregivers.
          </p>

          <div className="flex tab:flex-col gap-16 md:gap-5 mt-16 sm:mt-6 justify-center">
            <div className="w-[260px] md:w-[200px] tab:mx-auto h-auto">
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
            <div className="w-[260px] md:w-[200px] tab:mx-auto h-auto -mt-10 tab:mt-0">
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
            <div className="w-[260px] md:w-[200px] tab:mx-auto h-auto">
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

      {/* <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl  md:p-5 sm:p-2">
        <p className="text-[2rem] sm:text-[1.5rem] font-semibold text-center py-2">
          Stay in Control of Their Safety, Anytime
        </p>
        <p className="text-center text-xl md:text-lg max-w-5xl mx-auto">
          Easily monitor your loved one&apos;s safety and activity from our
          intuitive platform and app. Check in on them anytime they’re at home,
          giving you peace of mind no matter where you are.
        </p>

        <div className="w-full max-w-3xl mx-auto mt-8">
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
      </div> */}

      {/* Services for Peace of Mind */}
      <ServiceForPeace />

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

      <CallbackForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
