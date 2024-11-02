import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Navbar";
import { cookies } from "next/headers";

export default function Layout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token");
  return (
    <>
      <Header accessToken={accessToken} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
