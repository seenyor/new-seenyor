"use client";

import React, { useState } from "react";
import Loader from "@/components/SystemBuild/Loader";
import Link from "next/link";
import DeviceCard from "@/components/SystemBuild/DeviceCard";
import AddLoader from "./AddLodder";
import AddDeviceCard from "./AddDeviceCard";

const AddDevice = () => {
  const [deviceUid, setDeviceUid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deviceUid.trim()) {
      setErrorMessage("Please enter your Device UID.");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVerified(true);
    }, 2000);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmpty(value.trim() === "");
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleContinue = () => {
    if (!isEmpty && emailValid) {
      setShowPopup(false);
      console.log("Email submitted:", email);
    }
  };

  return (
    <>
      {loading && <AddLoader />}

      {!loading && (
        <div className="container max-w-[650px] font-poppins text-[#1D293F] items-start overflow-x-hidden justify-center flex flex-col gap-[60px] mt-[-50px] md:mt-0">
          <AddDeviceCard />
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowPopup(true);
            }}
            className="w-full active:scale-95 text-center bg-gradient-to-r from-[#A2CDB9] to-[#5BAE87] text-white text-[18px] px-8 py-3 rounded-[15px]"
          >
            Add a new Device
          </Link>

          {showPopup && (
            <div className="fixed inset-0 flex w-full px-4 h-screen z-50 items-center justify-center bg-[#00000021]">
              <div className="bg-white p-6 rounded-[35px] max-w-[635px] w-full py-10">
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-[#A39C9C] text-[20px] font-sans w-full text-end"
                >
                  X
                </button>
                <h2 className="text-[28px] font-bold text-[#1D293F] mb-4 ml-0">
                  Verify your device
                </h2>
                <label htmlFor="uid" className="text-lg font-semibold mb-3">
                  Device UID
                </label>
                <div className="flex gap-4 items-start justify-start w-full">
                  <div>
                    <input
                      type="email"
                      placeholder="ex: 4678469JDUE7DBFE8N"
                      className="w-[435px] md:w-full text-[#1D293F] h-[60px] text-[20px] p-3 border border-gray-300 border-solid rounded-xl"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {isEmpty && (
                      <p className="text-red-500 text-sm mb-4 w-full">
                        Email cannot be empty. Please enter your email.
                      </p>
                    )}
                    {!isEmpty && !emailValid && (
                      <p className="text-red-500 text-sm mb-4 w-full">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleContinue}
                    disabled={isEmpty || !emailValid}
                    className={`w-[150px] h-[60px] ${
                      isEmpty || !emailValid
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#70B896]"
                    } text-white p-2 rounded-xl`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AddDevice;
