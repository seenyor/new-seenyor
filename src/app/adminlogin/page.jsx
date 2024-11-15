import AdminLogin from "@/components/Login/AdminLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");

  if (accessToken) {
    redirect("/dashboard");
  }
  return (
    <div className="flex w-full items-center bg-white md:flex-col">
      {/* <RegisterImage /> */}
      <AdminLogin />
    </div>
  );
};

export default page;
