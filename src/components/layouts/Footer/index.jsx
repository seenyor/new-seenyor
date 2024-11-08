import { Img } from "@/components";
import React from "react";

const Footer = () => {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo and Sub Footer --> */}
      <footer id="footer-section" className="w-full pt-16 text-sm bg-[#F3F4F6]">
        {/*      <!-- Main footer --> */}
        <div className="mx-auto px-12 sm:px-5 max-w-7xl w-full">
          <div className="grid grid-cols-4 gap-5  sm:grid-cols-2">
            <div className="flex justify-center">
              <nav aria-labelledby="footer-product-5-logo-sub">
                <Img
                  src="img_group_1.svg"
                  width={158}
                  height={32}
                  alt="Frame 1000008413"
                  className="flex object-contain md:w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                />
                <ul>
                  <li className="mb-2 leading-6">
                    <p>
                      AI Powered All-In-One Solution for Fall Detection and
                      Sleep Monitoring.
                    </p>
                  </li>
                  <li className="mb-2 leading-6">
                    <p>Address:232 Unley Road,Unley SA 5061,Australia</p>
                  </li>
                  <li className="mb-2 leading-6">
                    <p>Contact Australia: 1800329162</p>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center">
              <nav aria-labelledby="footer-docs-5-logo-sub">
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo-sub"
                >
                  SERVICES
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Professional Installation
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Professional Monitoring
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Free Consultations
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center">
              <nav aria-labelledby="footer-about-5-logo-sub">
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-5-logo-sub"
                >
                  HELP
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="/knowledge"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Help Center
                    </a>
                  </li>
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
                      href="/service-agreement"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Service Agreement
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
                </ul>
              </nav>
            </div>
            <div className="flex justify-center">
              <nav aria-labelledby="footer-get-in-touch-5-logo-sub">
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-5-logo-sub"
                >
                  COMPANY
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="/about"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="/blog"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="/contact-us"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact Us
                    </a>
                  </li>
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
