import PlayBtn from "@/assets/app/svg/PlayBtn";
import AppleBtn from "@/assets/app/svg/AppleBtn";
import Link from "next/link";
import Image from "next/image";
import QR from "@/assets/app/qrScanner.png";

const Scaner = () => {
  return (
    <div className="mt-[70px] md:mt-10 sm:mt-6 w-full min-h-[332px] xxl:py-7 md:py-6 tab:py-2 px-6 rounded-[40px] p-10 text-white flex justify-center items-center">
      <div className="w-full max-w-[1720px] bg-[#1D293F] flex md:flex-col md:gap-8 justify-between items-center xxl:py-7 md:py-6 tab:py-2 px-6 rounded-[40px] p-10 ">
        <div className="flex flex-col md:items-center gap-10">
          <div className="md:text-center">
            <h1 className="text-[38px  md:text-[30px] sm:text-[25px] font-bold">
              Download our App now !
            </h1>
            <p className="text-[20px] md:text-base sm:text-sm font-medium max-w-[563px]">
              Experience seamless care for your loved ones with our
              user-friendly app. Download now for unparalleled ease and peace of
              mind.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="#">
              <AppleBtn />
            </Link>
            <Link href="#">
              <PlayBtn />
            </Link>
          </div>
        </div>
        <div>
          <Image src={QR} alt="" width={248} height={248} />
        </div>
      </div>
    </div>
  );
};

export default Scaner;
