"use client";
import PaymentFailure from "@/components/PaymentFailure";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const isUserVerified =
    JSON.parse(localStorage.getItem("isUserVerified")) || false;
  if (!isUserVerified) {
    router.push("/");
  }
  return (
    <div>
      {/* <AccountComplete /> */}
      {/* <PaymentSuccess />  */}
      <PaymentFailure />
    </div>
  );
}

export default Page;
