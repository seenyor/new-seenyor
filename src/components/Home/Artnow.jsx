import Image from "next/image";
import { Img } from "..";

const Artnow = () => {
  return (
    <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl px-16 md:p-5">
      <div className="flex justify-center">
        <button className="bg-neutral-950 text-white my-0  rounded-[10px] px-[1.2rem] py-1 font-semibold">
          Act Now
        </button>
      </div>
      <p className="text-[1.4rem] text-center py-4">
        Protect Your Loved Ones Before It’s Too Late
      </p>

      {/* cards */}
      <div className="flex justify-between items-center w-full sm:flex-col gap-6">
        <div className="h-[500px] sm:h-auto overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
          {/*  <!-- Image --> */}
          <figure>
            <Image
              src="/images/card1.png"
              alt="stroke"
              height={300}
              width={200}
              className="aspect-video h-60 sm:h-auto w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-3">
            <h3 className="text-[1.3rem] font-semibold">
              A Single Fall Can Change Everything
            </h3>
            <p>
              Falls are the 1 cause of injury for seniors. What happens if no
              one is around to help them in time?
            </p>
          </div>
          <p className="text-sm absolute bottom-5 left-3">
            Don’t wait—protect them today.
          </p>
          <div className="absolute top-3 z-10 w-full">
            <div className="flex justify-between items-center px-5 ">
              <p className="text-sm font-semibold inline-block bg-[#F1D9E6] px-3 py-2 rounded-3xl">
                1 IN 4 SENIORS FALL
              </p>
              <Img
                src="cardIcon1.svg"
                width={156}
                height={32}
                alt="Group 1"
                className="bg-[#2C3142] w-12 h-12 p-3 rounded-full  object-contain"
              />
            </div>
          </div>
        </div>
        <div className="h-[500px] sm:h-auto overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
          {/*  <!-- Image --> */}
          <figure>
            <Image
              src="/images/card2.png"
              alt="stroke"
              height={300}
              width={200}
              className="aspect-video h-60 sm:h-auto w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-3">
            <h3 className="text-[1.3rem] font-semibold">
              Emergencies Don’t Wait
            </h3>
            <p>
              Health emergencies can strike in an instant. Be sure help is
              always there when they need it most.
            </p>

            <p className="text-sm absolute bottom-5 left-3">
              {" "}
              Every second counts. Don’t risk waiting.
            </p>
          </div>
          <div className="absolute top-3 z-10 w-full">
            <div className="flex justify-between items-center px-5 ">
              <p className="text-sm font-semibold inline-block bg-[#E3EFF8] px-3 py-2 rounded-3xl">
                1 IN 5 FACE CRISES
              </p>
              <Img
                src="cardIcon2.svg"
                width={156}
                height={32}
                alt="Group 1"
                className="bg-[#2C3142] w-12 h-12 p-3 rounded-full  object-contain"
              />
            </div>
          </div>
        </div>
        <div className="h-[500px] sm:h-auto overflow-hidden relative bg-[#EEEFEF] shadow-md shadow-slate-200 rounded-md">
          {/*  <!-- Image --> */}
          <figure>
            <Image
              src="/images/card3.png"
              alt="stroke"
              height={300}
              width={200}
              className="aspect-video h-60 sm:h-auto w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-3">
            <h3 className="text-[1.3rem] font-semibold">
              Caring for Them Is Caring for You
            </h3>
            <p>
              Keep your loved ones safe, and gain peace of mind, even when
              you’re not around.
            </p>
          </div>
          <p className="text-sm absolute bottom-5 left-3">
            Stop worrying and start protecting.
          </p>
          <div className="absolute top-3 z-10 w-full">
            <div className="flex justify-between items-center px-5 ">
              <p className="text-sm font-semibold inline-block bg-[#ffff] px-3 py-2 rounded-3xl">
                80% CAREGIVERS WORRY
              </p>
              <Img
                src="cardIcon3.svg"
                width={156}
                height={32}
                alt="Group 1"
                className="bg-[#2C3142] w-12 h-12 p-3 rounded-full  object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-b-1 border-black-900 mt-12"></div>
    </div>
  );
};

export default Artnow;
