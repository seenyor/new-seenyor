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
const Home = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <div className=" flex w-full flex-col gap-10 bg-white px-6 py-5">
      <NavbarAvatar accessToken={accessToken} />

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

      <div className="max-w-7xl my-0 w-full  rounded-xl  md:p-5 bg-[#2C3142] flex justify-between items-center px-8 py-6">
        <p className="text-white">
          Your Journey to Safety and Peace of Mind Begins Here
        </p>
        <button className="bg-[#7F87FC] text-white font-semibold px-2 py-2 rounded">
          Get Started
        </button>
      </div>

      <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl  md:p-5">
        <p className="text-[2rem] font-semibold text-center py-2">
          Request a Call-Back
        </p>
        <p className="text-center text-xl">
          Tell us a little about your needs, and our team will reach out <br />
          to provide the best solution for you.
        </p>
        <div className="w-full max-w-3xl mx-auto p-4">
          <form className="space-y-3">
            <div className="flex  sm:flex-col sm:items-center text-sm mb-4">
              <span className="sm:w-full w-1/5 text-sm font-semibold mb-2 mb-0">
                I am a
              </span>
              <div className="flex flex-wrap gap-4 sm:w-full w-4/5">
                {[
                  "End User",
                  "Monitoring Company",
                  "Nursing Home",
                  "Distributor",
                  "Other",
                ].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-gray-600"
                      name="user-type"
                      value={type.toLowerCase().replace(" ", "-")}
                    />
                    <span className="ml-2 text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {[
              {
                id: "full-name",
                label: "Full name:",
                placeholder: "Please enter a Full Name",
              },
              {
                id: "email",
                label: "E-Mail:",
                placeholder: "Please enter your E-Mail address",
              },
              {
                id: "phone",
                label: "Phone Number:",
                placeholder:
                  "Please enter a Phone Number including country code",
              },
              {
                id: "company",
                label: "Company name:",
                placeholder: "Please enter a Company name if applicable",
              },
            ].map((field) => (
              <div
                key={field.id}
                className="flex flex-row sm:flex-col sm:items-center"
              >
                <label
                  htmlFor={field.id}
                  className="w-1/5 sm:w-full text-sm font-semibold mb-1 sm:mb-0"
                >
                  {field.label}
                </label>
                <div className="w-4/5 sm:w-full ">
                  <input
                    id={field.id}
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            ))}

            <div className="flex sm:flex-col items-center">
              <label className="sm:w-full w-1/5 text-sm font-semibold mb-1 sm:mb-0">
                Country
              </label>
              <div className="sm:w-full w-4/5 flex  sm:flex-col gap-4">
                <input
                  type="text"
                  placeholder="Please enter a country"
                  className="sm:w-full w-1/2 px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                />
                <div className="sm:w-full w-1/2 flex  sm:flex-col items-center">
                  <label className="sm:w-full w-2/5 text-sm font-semibold mb-1 sm:mb-0">
                    Area Code
                  </label>
                  <input
                    type="text"
                    placeholder="Please enter a Area Code"
                    className="sm:w-full w-3/5 px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {[
              {
                id: "preferred-time",
                label: "Preferred Time:",
                placeholder: "Please enter a Preferred Contact Time",
              },
            ].map((field) => (
              <div key={field.id} className="flex sm:flex-col items-center">
                <label
                  htmlFor={field.id}
                  className="sm:w-full w-1/5 text-sm font-semibold mb-1 sm:mb-0"
                >
                  {field.label}
                </label>
                <div className="sm:w-full w-4/5">
                  <input
                    id={field.id}
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            ))}

            <div className="flex  sm:flex-col items-start">
              <label className="sm:w-full w-1/5 text-sm font-semibold mb-1 sm:mb-0 pt-2">
                Message:
              </label>
              <div className="sm:w-full w-4/5">
                <textarea
                  placeholder="Please write a message"
                  className="w-full px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none resize-none"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-[#7F87FC] text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Request Call Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
