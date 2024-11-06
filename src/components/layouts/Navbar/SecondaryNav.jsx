"use client";
import { Heading, Img } from "@/components";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "@radix-ui/react-avatar";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SecondaryNav({ accessToken, ...props }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { isCom } = useAuth();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown open or close
  const handleToggle = () => {
    setIsServicesOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/*<!-- Component: Navbar with CTA --> */}
      <header className="relative z-20 w-full  bg-[#7F87FC] after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full">
        <div className="relative mx-auto w-full px-6 max-w-7xl">
          <nav className="flex h-[5.5rem] items-stretch justify-between font-medium text-[#2C3142]">
            {/*      <!-- Brand logo --> */}
            <a
              className="md:flex items-center gap-2 py-3 my-auto text-lg whitespace-nowrap focus:outline-none flex-1"
              href="/"
            >
              <Img
                src="logowhite.png"
                width={158}
                height={32}
                alt="Frame 1000008413"
                className="flex object-contain hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                onClick={() => {
                  window.open(
                    isCom ? "https://seenyor.com" : "https://seenyor.au"
                  );
                }}
              />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 md:block h-10 w-10 self-center hidden
    ${
      isToggleOpen
        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
        : ""
    }
  `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>

            {/*      <!-- For mobile --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-[#7F87FC] md:h-[100vh]  px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link href="/">
                  <Heading
                    as="p"
                    className="text-[1.3rem] gap-2 py-4 px-8 font-medium text-white"
                  >
                    Home
                  </Heading>
                </Link>
              </li>

              <li className="relative flex items-stretch" ref={dropdownRef}>
                <div className="flex items-center px-8">
                  <button
                    onClick={handleToggle}
                    className="text-[1.3rem] cursor-pointer font-medium text-white"
                  >
                    Services
                  </button>
                  <ArrowDown className="text-[#6c7482] h-5 w-5" />
                </div>
                {isServicesOpen && (
                  <div className="absolute top-10 left-0 z-10 bg-white border border-gray-200 rounded shadow-md w-52">
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          href="/monitoring"
                          className="block px-4 py-2  text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          24/7 Professional Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/installation"
                          className="block px-4 py-2  text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Installation Options
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li role="none" className="flex items-stretch">
                <Link href="/knowledge">
                  <Heading
                    as="p"
                    className="text-[1.3rem] gap-2 py-4 px-8 font-medium text-white"
                  >
                    Knowledge Base
                  </Heading>
                </Link>
              </li>
              {!accessToken ? (
                <li className="flex flex-col gap-2 ps-5">
                  <Link href="/login">
                    <button className="sm:px-3 sm:py-2 px-7 py-[10px] bg-[#DFE0E3] font-semibold rounded-lg">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/systembuilder">
                    <button className="sm:px-3 sm:py-2 px-3 py-[10px] bg-[#2C3142] font-semibold text-white rounded-lg">
                      Get Started
                    </button>
                  </Link>
                </li>
              ) : (
                <Link href="/account" className="relative group">
                  <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-black-200 align-middle">
                    <Avatar.Image
                      className="size-full rounded-[inherit] object-cover"
                      src="images/avater.png"
                      alt="avatar"
                    />
                    <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-blue-200 text-[15px] font-medium text-violet11">
                      A
                    </Avatar.Fallback>
                  </Avatar.Root>
                </Link>
              )}
            </ul>
            {/* for dekstop */}
            <ul className="relative flex items-center flex-wrap gap-[2.13rem] md:ml-0 px-[2rem] md:hidden">
              <li>
                <Link href="/">
                  <Heading
                    as="p"
                    className="text-[1rem] font-medium text-white"
                  >
                    Home
                  </Heading>
                </Link>
              </li>
              <li className="relative " ref={dropdownRef}>
                <div
                  onClick={handleToggle}
                  className="flex items-center cursor-pointer gap-2 px-2"
                >
                  <button className="text-[1rem] font-medium text-white">
                    Services
                  </button>
                  <ArrowDown className="text-white h-5 w-5" />
                </div>
                {isServicesOpen && (
                  <div className="absolute top-10 left-0 z-10 bg-white border border-gray-200 rounded shadow-md w-44">
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          href="/monitoring"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          24/7 Professional Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/installation"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Installation Options
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link href="/knowledge">
                  <Heading as="p" className="text-[1rem] font-bold text-white">
                    Knowledge Base
                  </Heading>
                </Link>
              </li>
              {!accessToken ? (
                <li className="flex items-center gap-2">
                  <Link
                    className="sm:px-3 sm:py-2 sm:text-sm px-7 py-[10px] bg-[#DFE0E3] font-semibold rounded-lg m-auto"
                    href="/login"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="sm:px-3 sm:py-2 sm:text-sm px-3 py-[10px] bg-[#2C3142] font-semibold text-white rounded-lg m-auto"
                    href="/systembuilder"
                  >
                    Get Started
                  </Link>
                </li>
              ) : (
                <Link href="/account" className="relative group">
                  <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-black-200 align-middle">
                    <Avatar.Image
                      className="size-full rounded-[inherit] object-cover"
                      src="images/avater.png"
                      alt="avatar"
                    />
                    <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-blue-200 text-[15px] font-medium text-violet11">
                      A
                    </Avatar.Fallback>
                  </Avatar.Root>
                </Link>
              )}
            </ul>
            {/* <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              {!accessToken ? (
                <li className="flex items-center gap-2">
                  <Link
                    className="sm:px-3 sm:py-2 sm:text-sm px-7 py-[10px] bg-[#DFE0E3] font-semibold rounded-lg m-auto"
                    href="/login"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="sm:px-3 sm:py-2 sm:text-sm px-3 py-[10px] bg-[#2C3142] font-semibold text-white rounded-lg m-auto"
                    href="/systembuilder"
                  >
                    Get Started
                  </Link>
                </li>
              ) : (
                <Link href="/account" className="relative group">
                  <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-black-200 align-middle">
                    <Avatar.Image
                      className="size-full rounded-[inherit] object-cover"
                      src="images/avater.png"
                      alt="avatar"
                    />
                    <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-blue-200 text-[15px] font-medium text-violet11">
                      A
                    </Avatar.Fallback>
                  </Avatar.Root>
                </Link>
              )}
            </div> */}
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  );
}