import Image from "next/image";
import groupImg from "@/assets/caregiver/imgs/Group.png";
import Line from "@/assets/caregiver/line";
import SmallCircle from "@/assets/caregiver/SmallCircle";

function EarningWith() {
  return (
    <div className="w-full justify-center flex flex-col gap-16 items-center bg-[#7E87FC] p-20 relative">
      <h1 className="text-[40px] font-bold text-[#ffffff]">
        Save Lives While Earning with Seenyor
      </h1>
      <div className="absolute w-full flex justify-start">
        <Line />
      </div>
      <div className="absolute w-full h-full flex items-end justify-start p-8">
        <SmallCircle />
      </div>
      <div className="absolute w-full h-full flex items-end justify-end py-8 px-32">
        <SmallCircle />
      </div>
      <div className="flex items-center gap-20 z-10">
        <Image
          src={groupImg}
          width={900}
          height={600}
          alt="x"
          className="w-[805px] h-[591px]"
        />
        <div className="w-[827px]">
          <h4 className="text-[32px] font-semibold text-[#ffffff] flex flex-col gap-10">
            At Seenyor, we empower caregivers like you to make an impact. Join
            us and enjoy:
            <ul className="mr-4">
              <li className="before:content-['»'] before:mr-4">
                No Upfront Costs
              </li>
              <li className="before:content-['»'] before:mr-4">
                Hassle-Free Inventory Management
              </li>
              <li className="before:content-['»'] before:mr-4">
                Professional Installation Services
              </li>
            </ul>
            <p className="text-[24px]">
              Turning your passion into profit has never been easier. Together,
              let’s save lives and support the people who matter most.
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default EarningWith;
