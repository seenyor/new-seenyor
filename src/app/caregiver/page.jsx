import Ambassidor from "@/components/Caregiver/Ambassidor";
import CaregiverHero from "@/components/Caregiver/CaregiverHero";
import Detection from "@/components/Caregiver/Detection";
import Header from "@/components/layouts/Navbar";

const page = () => {
  return (
    <div>
      <div className="bg-[#E8F4FA]">
        <Header />
        <CaregiverHero />
      </div>
      <Ambassidor />
      <Detection />
    </div>
  );
};

export default page;
