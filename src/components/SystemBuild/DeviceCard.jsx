import React from "react";
import Image from "next/image";

const DeviceCard = ({ image, id, number, qty }) => {
  return (
    <div>
      <div className="bg-[#F6F7F7] w-[800px] md:w-full p-[30px] md:px-[15px] sm:px-2 rounded-[35px] flex flex-col gap-9">
        <h1 className="text-[28px] font-semibold">Your device</h1>
        <div className="bg-[#ffffff] w-full  flex sm:flex-col flex-row gap-[25px] px-[26px] py-[20px] rounded-[12px]">
          <div className="flex">
            <Image
              src={image}
              width={140}
              height={122}
              className=" sm:w-full"
              alt="x"
            />
            <div className=" bg-[#F6F7F7] w-[3px] sm:hidden"></div>
          </div>
          <div className="flex flex-col justify-center gap-[30px]">
            <h1 className="text-[20px] font-semibold text-[#1D293F]">
              {`Device ID: ${id}`}
            </h1>
            <div className="flex gap-[30px] text-[#6C7482] text-[16px] font-medium">
              <h4>{`Device Number: ${number}`}</h4>
              <h4>{`Device QTY: ${qty}`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
