"use client";
import * as Avatar from "@radix-ui/react-avatar";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Heading, Img } from "@/components";
import { useState } from "react";

export default function Header({ accessToken, ...props }) {
  const { isCom } = useAuth();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header
      {...props}
      className={`${props.className} max-w-7xl mx-auto flex w-full md:hidden sm:flex-col justify-between items-center gap-[1.25rem] pt-2 px-6`}
    >
      <div className="flex w-full items-center justify-between md:flex-col md:px-[1.25rem]">
        {/* Wrap Img with Link to make it clickable */}

        <Img
          src="img_group_1.svg"
          width={158}
          height={32}
          alt="Frame 1000008413"
          className="flex object-contain md:w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          onClick={() => {
            window.open(isCom ? "https://seenyor.com" : "https://seenyor.au");
          }}
        />
        <ul className="relative flex items-center flex-wrap gap-[2.13rem] md:ml-0 px-[2rem]">
          <li>
            <Link href="/">
              <Heading
                as="p"
                className="text-[1rem] font-medium !text-[#6c7482] hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Heading>
            </Link>
          </li>
          <li className="relative">
            <div className="flex items-center">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-[1rem] font-medium !text-[#6c7482] hover:text-blue-600 transition-colors duration-200"
              >
                Services
              </button>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="16"
                height="16"
              >
                <rect x="0" fill="none" width="24" height="24"></rect>
                <g>
                  <path d="M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z"></path>
                </g>
              </svg>
            </div>
            {isServicesOpen && (
              <div className="absolute top-10 left-0 z-10 bg-white border border-gray-200 rounded shadow-md w-44">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="/monitoring"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      24/7 Professional Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/installation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Installation Options
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="https://seenyor.com/alerts">
              <Heading
                as="p"
                className="text-[1rem] font-bold !text-[#6c7482] hover:text-blue-600 transition-colors duration-200"
              >
                Knowledge Base
              </Heading>
            </Link>
          </li>
          {!accessToken ? (
            <li className="flex items-center gap-2">
              <Link
                className="px-7 py-3 bg-[#DFE0E3] font-semibold rounded-lg m-auto"
                href="/register"
              >
                Sign In
              </Link>
              <Link
                className="px-3 py-3 bg-[#2C3142] font-semibold text-white rounded-lg m-auto"
                href="/register"
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
      </div>
    </header>
  );
}
