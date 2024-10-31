import { Button, Img } from "@/components";
import NavbarAvatar from "@/components/layouts/Navbar";
import { cookies } from "next/headers";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { IconBase } from "react-icons";
import Artnow from "@/components/Home/Artnow";
import PeaceOfMind from "@/components/Home/PeaceOfMind";
const Home = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <div className=" flex w-full flex-col gap-10 bg-white p-5">
      <NavbarAvatar accessToken={accessToken} />

      {/* hero section* */}
      <div className="relative flex md:flex-col gap-4 items-start justify-between max-w-7xl my-0 mx-auto w-full p-10 pb-0 rounded-xl px-16 md:p-5">
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
    </div>
  );
};

export default Home;
