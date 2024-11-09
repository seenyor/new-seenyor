import Link from "next/link";

const GetStartArea = () => {
  return (
    <div className="max-w-[1720px] my-0 w-full h-[180px] md:h-auto mx-auto rounded-xl  md:p-5 sm:p-2 bg-[#2C3142] flex justify-between items-center px-16 py-8 sm:text-sm sm:px-4 sm:py-3">
      <p className="text-white text-3xl md:text-lg tab:text-[16px]">
        Your Journey to Safety and Peace of Mind Begins Here
      </p>
      <Link href="/systembuilder">
        <button className="bg-[#7F87FC] w-[274px] xxl:w-[200px] md:!w-32 tab:!w-24  h-[50px] md:h-auto text-xl md:text-[16px] tab:text-sm  text-white font-semibold px-2 tab:px-1 py-2 rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default GetStartArea;
