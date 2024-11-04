import Footer from "@/components/layouts/Footer";
import SecondaryNav from "@/components/layouts/Navbar/SecondaryNav";
import { cookies } from "next/headers";

export default function Layout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <>
      <SecondaryNav accessToken={accessToken} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
