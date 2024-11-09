import Link from "next/link";

const GetStartArea = () => {
  return (
    <div className="max-w-[1320px] my-0 w-full mx-auto rounded-xl  md:p-5 sm:p-2 bg-[#2C3142] flex justify-between items-center px-8 py-6 sm:text-sm sm:px-4 sm:py-3">
      <p className="text-white">
        Your Journey to Safety and Peace of Mind Begins Here
      </p>
      <Link href="/systembuilder">
        <button className="bg-[#7F87FC] min-w-24 text-white font-semibold px-2 sm:px-1 py-2 sm:text-xs rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default GetStartArea;
