"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CallbackForm = ({ accessToken }) => {
  const [countryData, setCountryData] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    full_name: "",
    email: "",
    company_name: "",
    phone_number: "",
    country: "",
    // selectedDialCode: "",
    city: "",
    preferred_time: "",
    message: "",
  });

  // Fetch country data
  useEffect(() => {
    fetch("/countryData.json")
      .then((response) => response.json())
      .then((data) => setCountryData(data))
      .catch((error) => console.error("Error loading country data:", error));
  }, []);

  // Centralized change handler
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle country and dial code changes
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      country: country,
    }));
  };

  const handleDialCodeChange = (event) => {
    const dialCode = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      selectedDialCode: dialCode,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        "https://backend.elderlycareplatform.com/api/v1/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken?.value}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      toast.success(
        "Form submitted successfully! We will get back to you soon."
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message);
    }
  };

  return (
    <div
      id="call_back_form"
      className="max-w-[1320px] my-0 mx-auto w-full p-5 rounded-xl md:p-5 sm:p-0"
    >
      <p className="text-[40px] md:text-3xl tab:text-2xl font-semibold text-center py-2">
        Request a Call-Back
      </p>
      <p className="text-center text-3xl md:text-2xl tab:text-lg">
        Tell us a little about your needs, and our team will{" "}
        <br className="tab:hidden" /> reach out to provide the best solution for
        you.
      </p>
      <div className="w-full max-w-5xl mx-auto p-4">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="flex text-sm mb-4">
            <span className=" text-xl md:text-base tab:text-xs w-1/5 font-semibold ">
              I am a
            </span>
            <div className="flex tab:flex-col flex-wrap gap-2 sm:w-full w-4/5">
              {[
                "End User",
                "Monitoring Company",
                "Nursing Home",
                "Distributor",
                "Other",
              ].map((type) => (
                <label key={type} className="inline-flex items-center ">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-gray-600"
                    name="type"
                    value={type.toLowerCase().replace(" ", "-")}
                    checked={
                      formData.type === type.toLowerCase().replace(" ", "-")
                    }
                    onChange={handleInputChange}
                  />
                  <span className="ml-2 text-base md:text-sm tab:text-xs">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {[
            {
              id: "full-name",
              label: "Full name:",
              placeholder: "Enter a Full Name",
              name: "full_name",
            },
            {
              id: "email",
              label: "E-Mail:",
              placeholder: "Enter your E-Mail address",
              name: "email",
            },
            {
              id: "company",
              label: "Company:",
              placeholder: "Enter a Company name if applicable",
              name: "company_name",
            },
          ].map((field) => (
            <div key={field.id} className="flex flex-row tab:items-center">
              <label
                htmlFor={field.id}
                className="w-1/5  text-xl md:text-base tab:text-xs font-semibold mb-1 sm:mb-0"
              >
                {field.label}
              </label>
              <div className="w-4/5 ">
                <input
                  id={field.id}
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          ))}

          <div className="flex items-center">
            <label
              htmlFor="phone"
              className=" w-1/5 text-xl tab:text-xs md:text-base font-semibold mb-1 sm:mb-0"
            >
              Phone:
            </label>
            <div className="flex items-center w-4/5 ">
              <select
                className="px-3 py-3 md:py-2 w-[20%] bg-[#f5f5f5] rounded-l text-sm focus:outline-none"
                // value={formData.selectedDialCode}
                name="selectedDialCode"
                // onChange={handleDialCodeChange}
              >
                <option value="">Country Code</option>
                {countryData.map((country, i) => (
                  <option key={i} value={country.dial_code}>
                    {country.dial_code} ({country.name})
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="text"
                name="phone_number"
                placeholder="Enter phone number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded-r placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center">
            <label className="w-1/4 text-xl tab:text-xs md:text-base font-semibold mb-1 sm:mb-0">
              Country
            </label>
            <div className="w-full flex gap-4">
              <select
                className="sm:w-full w-4/5 px-3 py-2 text-sm bg-[#f5f5f5] rounded focus:outline-none"
                value={formData.country}
                name="country"
                onChange={handleCountryChange}
              >
                <option value="">Select Country</option>
                {countryData.map((country, i) => (
                  <option key={i} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className=" w-full flex items-center">
                <label className=" tab:text-xs w-1/4 text-xl md:text-base font-semibold mb-1 sm:mb-0">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter a city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="sm:w-full w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="preferred-time"
              className=" w-1/5 text-xl tab:text-xs md:text-base font-semibold mb-1 sm:mb-0"
            >
              Time:
            </label>
            <div className=" w-4/5">
              <input
                id="preferred-time"
                type="date"
                name="preferred_time"
                placeholder="Enter a Preferred Contact Time"
                value={formData.preferred_time}
                onChange={handleInputChange}
                className="w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex  items-start">
            <label className="tab:text-xs w-1/5 text-xl md:text-base font-semibold mb-1 sm:mb-0 pt-2">
              Message:
            </label>
            <div className=" w-4/5">
              <textarea
                name="message"
                placeholder="Write a message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none resize-none"
                rows={4}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="py-2 tab:hidden px-8 bg-primary rounded text-white hover:bg-primary/90 transition duration-300"
            >
              Submit
            </button>
            <button
              type="submit"
              className="py-2 hidden tab:block px-8 w-full bg-[#7F87FC] rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
