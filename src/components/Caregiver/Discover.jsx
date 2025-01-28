import EllipsShape from "@/assets/caregiver/EllipsShape";
import Starshape from "@/assets/caregiver/Starshape";

const Discover = () => {
  return (
    <div className="bg-[#61B78E] text-[#FFFFFF] w-full flex items-center justify-center overflow-hidden">
      <div className="max-w-[1672px] relative">
        <Starshape className="absolute top-[-280px] left-[-150px]" />
        <EllipsShape className="absolute top-[-280px] right-[-1800px]" />
      </div>
      <div className="container max-w-[1672px] h-[246px] flex items-center justify-between">
        <h1 className="text-[36px] font-semibold max-w-[1239px]">
          Discover the Advanced Functionalities of Our Innovative Monitoring
          Solutions Engineered for Peak Performance
        </h1>
        <button
          type="button"
          className="bg-[#FFFFFF] text-[#61B78E] w-[276px] h-[78px] rounded-[8px] text-[24px] font-semibold active:scale-95"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Discover;
