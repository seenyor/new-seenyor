"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/SystemBuild/Loader";
import Link from "next/link";
import DeviceCard from "./DeviceCard";
import { toast } from "react-toastify";

const DeviceInfo = () => {
  const [deviceUid, setDeviceUid] = useState("");
  const [devices, setDevices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const storedDevices = JSON.parse(localStorage.getItem("devices")) || [];
    setDevices(storedDevices);
    setVerified(storedDevices.length > 0);
    console.log("Retrieved devices from localStorage:", storedDevices);
  }, []);

  const handleInputChange = (e) => {
    let input = e.target.value.toUpperCase();
    if (input.length <= 12) {
      setDeviceUid(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (deviceUid.length !== 12) {
      setErrorMessage("Device UID must be exactly 12 characters long.");
      toast.error("Device UID must be exactly 12 characters long.");
      return;
    }

    const storedDevices = JSON.parse(localStorage.getItem("devices")) || [];

    if (devices.includes(deviceUid) || storedDevices.includes(deviceUid)) {
      setErrorMessage("This Device UID has already been added.");
      toast.error("This Device UID has already been added.");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/deals/device-details?uid=${deviceUid}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (data.is_active === true) {
        setErrorMessage("Device UID is not valid.");
        toast.error("Device UID is not valid.");
        setLoading(false);
        return;
      }

      const updatedDevices = [...storedDevices, deviceUid];
      localStorage.setItem("devices", JSON.stringify(updatedDevices));
      setDevices(updatedDevices);
      setVerified(true);
      setDeviceUid("");
      toast.success("Device UID Verified Successfully!");
    } catch (error) {
      console.error("Error fetching device details:", error);
      setErrorMessage("An error occurred while verifying the device.");
      toast.error("An error occurred while verifying the device.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="container font-poppins text-[#1D293F] items-center overflow-x-hidden justify-center flex flex-col gap-[60px] px-8 mt-40 mb-10">
          <h1 className="text-[35px] md:text-[26px] font-bold">
            Device Information
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-[#F6F7F7] w-[800px] md:w-full rounded-[35px] flex flex-col items-center justify-center px-10 md:px-[15px] sm:px-0"
            noValidate
          >
            <div className="w-full mb-5 p-[30px] md:p-[15px] sm:p-3 flex flex-col gap-[30px]">
              <h3 className="text-[28px] md:text-[20px] sm:text-[16px] font-semibold">
                Verify your device
              </h3>
              <div className="flex w-full flex-row sm:flex-col items-center justify-end gap-[16px]">
                <div className="w-full flex flex-col gap-3">
                  <label className="text-[20px] sm:text-[16px] font-semibold">
                    Device UID
                  </label>
                  <input
                    id="device-uid"
                    name="deviceUid"
                    type="text"
                    value={deviceUid}
                    onChange={handleInputChange}
                    placeholder="ex: 4678469JDUE7DBFE8N"
                    className="w-full h-[60px] px-4 rounded-[10px] bg-slate-200/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#61C7AA] focus:shadow-inner transition-shadow duration-300 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#70B896] active:scale-95 mt-10 sm:mt-0 text-white text-[18px] h-[60px] w-[150px] rounded-[10px] hover:bg-[#4FAF8D]"
                >
                  Verify
                </button>
              </div>
            </div>
          </form>

          <div className="bg-[#F6F7F7] w-[800px] md:w-full p-[30px] md:px-[15px] sm:px-2 rounded-[35px] flex flex-col gap-9">
            <h1 className="text-[28px] font-semibold">Your Devices</h1>
            {devices.length > 0 ? (
              devices.map((uid, index) => <DeviceCard key={index} id={uid} />)
            ) : (
              <p className="text-[#6C7482] text-center font-medium">
                No devices added yet.
              </p>
            )}
          </div>

          {verified && devices.length > 0 && (
            <Link
              href="/register"
              className="w-[800px] md:w-full active:scale-95 text-center bg-gradient-to-r from-[#A2CDB9] to-[#5BAE87] text-white text-[18px] px-8 py-3 rounded-[15px]"
            >
              Next
            </Link>
          )}

          <div className="flex items-center gap-1">
            <p className="text-[18px] text-center text-[#6C7482]">
              Already have an account?
            </p>
            <Link
              href="/login"
              className="text-[#70B896] font-semibold text-[18px] hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DeviceInfo;
