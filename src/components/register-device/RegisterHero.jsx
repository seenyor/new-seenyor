"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterHero = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmpty(newEmail.trim() === "");

    if (newEmail.trim() === "") {
      setEmailValid(true);
      setErrorMessage("");
    } else if (!validateEmail(newEmail)) {
      setEmailValid(false);
      setErrorMessage("Please enter a valid email address.");
    } else {
      setEmailValid(true);
      setErrorMessage("");
    }
  };

  const handleSubmit = () => {
    if (emailValid && !isEmpty) {
      // Additional validation before submission
      if (email.trim() === "") {
        setIsEmpty(true);
        setErrorMessage("Email cannot be empty.");
        toast.error("Email cannot be empty."); // Toast for empty email
        return;
      }

      if (!validateEmail(email)) {
        setEmailValid(false);
        setErrorMessage("Please enter a valid email address.");
        toast.error("Please enter a valid email address."); // Toast for invalid email
        return;
      }

      // If all validations pass, proceed to the next page
      toast.success("Email is valid. Redirecting..."); // Toast for success
      router.push("/device-verification");
    } else {
      toast.error("Please enter a valid email address."); // Toast for invalid email
    }
  };

  return (
    <div className="w-full flex flex-col gap-[50px] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-[18px]">
        <h1 className="text-5xl font-bold">Register Your Seenyor Device</h1>
        <p className="text-2xl text-center max-w-[1013px]">
          Activate your device and unlock all its features. Complete your
          registration now to receive updates, benefit from our dedicated
          customer support, and enhance elderly care with our Seenyor AI
          monitoring.
        </p>
      </div>
      <div className="flex justify-center gap-2 items-start w-full">
        <div>
          <input
            type="email"
            placeholder="Enter your email here"
            className={`w-[535px] text-[#1D293F] h-[60px] text-[20px] p-3 border ${
              !emailValid ? "border-red-500" : "border-gray-300"
            } border-solid rounded-xl`}
            value={email}
            onChange={handleChange}
          />
          {!emailValid && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
        </div>
        <button
          disabled={isEmpty || !emailValid}
          onClick={handleSubmit}
          className={`w-[230px] text-[20px] font-medium h-[60px] ${
            isEmpty || !emailValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#70B896] hover:bg-[#5ea881]"
          } text-white p-2 rounded-xl`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RegisterHero;
