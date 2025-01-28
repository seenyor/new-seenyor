import Link from "next/link";
import Image from "next/image";
import img from "@/assets/caregiver/imgs/header-pic.png";

const CaregiverHero = () => {
  return (
    <section className="font-poppins w-full flex flex-col items-center justify-center relative">
      <div className="container max-w-[1672px] relative">
        <div className="flex flex-col gap-[30px] mt-40">
          <h1 className="w-[829px] text-[48px] lg:text-[40px] font-semibold">
            Empowering <span className="text-[#F48C06]">Caregivers</span> to
            Make a Difference. Join Us Today!
          </h1>
          <div className="flex gap-[30px]">
            <Link
              href="#"
              type="button"
              className="w-64 py-4 bg-[#71B696] text-center rounded-md text-[24px] font-medium text-white"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              type="button"
              className="w-64 py-4 bg-white border-[1px] border-[#71B696] text-[#71B696] text-center rounded-md text-[24px] font-medium"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="absolute top-[-230px] right-0 w-[1060px] md:w-[600px] h-[1060px]">
          <Image src={img} width={1060} height={1060} alt="x" />
        </div>
      </div>
      <div class="relative mt-[250px] w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="relative block w-[292%] h-[317px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="fill-[#ffffff]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CaregiverHero;
