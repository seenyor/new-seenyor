import { Img } from "@/components";
import { MailIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo and Sub Footer --> */}
      <footer id="footer-section" className="w-full pt-16 text-sm bg-[#F3F4F6]">
        {/*      <!-- Main footer --> */}
        <div className="mx-auto xxl:px-5 max-w-[1320px] w-full">
          <div className="grid grid-cols-4 gap-5  tab:grid-cols-2">
            <div className="flex">
              <nav
                aria-labelledby="footer-product-5-logo-sub"
                className="max-w-[270px]"
              >
                <Img
                  src="img_group_1.svg"
                  width={158}
                  height={32}
                  alt="Frame 1000008413"
                  className="flex object-contain md:w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                />
                <ul>
                  <li className="my-2 text-lg md:text-[16px] tab:text-sm leading-6">
                    <p>
                      AI Powered All-In-One Solution for Fall Detection and
                      Sleep Monitoring.
                    </p>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center">
              <nav
                aria-labelledby="footer-docs-5-logo-sub"
                className="max-w-[270px]"
              >
                <h3
                  className="mb-2 font-bold text-xl md:text-lg tab:text-base "
                  id="footer-docs-5-logo-sub"
                >
                  Contact Information
                </h3>
                <ul className="text-lg md:text-[16px] tab:text-sm">
                  <li className="mb-2 leading-6 font-semibold">
                    <p>Seenyor PTY LTD</p>
                  </li>
                  <li className="mb-2 leading-6">
                    <div className="flex items-start gap-1">
                      {/* <div className=" mt-1">
                        <Image
                          src="/images/home/location.svg"
                          alt=""
                          height={10}
                          width={10}
                          className="!w-5 !h-5"
                        />
                      </div> */}
                      <p>232 Unley Road,Unley SA 5061,Australia</p>
                    </div>
                  </li>
                  <li className="mb-2 leading-6">
                    <div className="flex items-start gap-1">
                      {/* <div className=" mt-1">
                        <Phone fill="#000" className="!w-5 !h-5" />
                      </div> */}
                      <p>1800329162</p>
                    </div>
                  </li>
                  <li className="mb-2 leading-6">
                    <div className="flex items-start gap-1">
                      {/* <div className=" mt-1">
                        <Image
                          src="/images/home/mail.svg"
                          alt=""
                          height={10}
                          width={10}
                          className="!w-5 !h-5"
                        />
                      </div> */}
                      <p>Support@seenyor.com</p>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center">
              <nav
                aria-labelledby="footer-about-5-logo-sub"
                className="max-w-[270px]"
              >
                <h3
                  className="mb-2 font-bold text-xl md:text-lg tab:text-base "
                  id="footer-about-5-logo-sub"
                >
                  Legal
                </h3>
                <ul className="text-lg md:text-[16px] tab:text-sm">
                  {/* <li className="mb-2 leading-6">
                    <a
                      href="/knowledge"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Help Center
                    </a>
                  </li> */}
                  <li className="mb-2 leading-6">
                    <a
                      href="/terms-and-conditions"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="/privacy-policy"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="/terms-of-service"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Terms Of Service
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="/service-agreement"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      User Agreement and Liability Disclaimer
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-start ">
              <nav
                aria-labelledby="footer-get-in-touch-5-logo-sub"
                className="max-w-[270px]"
              >
                <h3
                  className="mb-2 font-bold text-xl md:text-lg tab:text-base "
                  id="footer-get-in-touch-5-logo-sub"
                >
                  COMPANY
                </h3>
                <ul className="text-lg md:text-[16px] tab:text-sm">
                  {/* <li className="mb-2 leading-6">
                    <a
                      href="/about"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About Us
                    </a>
                  </li> */}
                  <li className="mb-2 leading-6">
                    <a
                      href="/contact-us"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact Us
                    </a>
                  </li>
                  {/* <li className="mb-2 leading-6">
                    <a
                      href="/blog"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*      <!-- Sub Footer --> */}
        <div className="bg-[#E3E7EF] py-5 mt-5 text-sm">
          <p className="text-center">
            Copyrighty @2024; All Rights Reserved by Seenyor
          </p>
        </div>
      </footer>
      {/*    <!-- End Five Columns Footer with Logo and Sub Footer --> */}
    </>
  );
};

export default Footer;
