import NavbarAvatar from "@/components/layouts/Navbar";
import { cookies } from "next/headers";

const Home = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <div className=" flex w-full flex-col gap-10 bg-white p-5">
      <NavbarAvatar accessToken={accessToken} />
      <div className="relative flex md:flex-col gap-4 items-center justify-between bg-[#F1F1F2] max-w-7xl my-0 mx-auto w-full p-10 rounded-xl px-16 md:p-5">
        <h2>HOme</h2>
      </div>
    </div>
  );
};

export default Home;
