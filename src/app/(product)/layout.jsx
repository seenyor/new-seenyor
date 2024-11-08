import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Navbar/index";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
