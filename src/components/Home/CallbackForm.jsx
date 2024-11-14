"use client";

import { useEffect, useState } from "react";

const CallbackForm = () => {
  const [countryData, setCountryData] = useState([]);
  const [formData, setFormData] = useState({
    userType: "",
    fullName: "",
    email: "",
    company: "",
    phoneNumber: "",
    selectedCountry: "",
    selectedDialCode: "",
    city: "",
    preferredTime: "",
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
      selectedCountry: country,
    }));
  };

  const handleDialCodeChange = (event) => {
    const dialCode = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      selectedDialCode: dialCode,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // send the data to your backend here
  };

  return (
    <div
      id="call_back_form"
      className="max-w-[1320px] my-0 mx-auto w-full p-5 rounded-xl md:p-5 sm:p-2"
    >
      <p className="text-[40px] md:text-3xl tab:text-2xl font-semibold text-center py-2">
        Request a Call-Back
      </p>
      <p className="text-center text-3xl md:text-2xl tab:text-lg">
        Tell us a little about your needs, and our team will <br /> reach out to
        provide the best solution for you.
      </p>
      <div className="w-full max-w-5xl mx-auto p-4">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="flex sm:flex-col sm:items-center text-sm mb-4">
            <span className="sm:w-full text-xl md:text-base w-1/5 font-semibold ">
              I am a
            </span>
            <div className="flex flex-wrap gap-2 sm:w-full w-4/5">
              {[
                "End User",
                "Monitoring Company",
                "Nursing Home",
                "Distributor",
                "Other",
              ].map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-gray-600"
                    name="userType"
                    value={type.toLowerCase().replace(" ", "-")}
                    checked={
                      formData.userType === type.toLowerCase().replace(" ", "-")
                    }
                    onChange={handleInputChange}
                  />
                  <span className="ml-2 text-base md:text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {[
            {
              id: "full-name",
              label: "Full name:",
              placeholder: "Enter a Full Name",
              name: "fullName",
            },
            {
              id: "email",
              label: "E-Mail:",
              placeholder: "Enter your E-Mail address",
              name: "email",
            },
            {
              id: "company",
              label: "Company name:",
              placeholder: "Enter a Company name if applicable",
              name: "company",
            },
          ].map((field) => (
            <div
              key={field.id}
              className="flex flex-row sm:flex-col sm:items-center"
            >
              <label
                htmlFor={field.id}
                className="w-1/5 sm:w-full text-xl md:text-base font-semibold mb-1 sm:mb-0"
              >
                {field.label}
              </label>
              <div className="w-4/5 sm:w-full">
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

          <div className="flex sm:flex-col items-center">
            <label
              htmlFor="phone"
              className="sm:w-full w-1/5 text-xl md:text-base font-semibold mb-1 sm:mb-0"
            >
              Phone Number:
            </label>
            <div className="flex items-center w-4/5 sm:w-full">
              <select
                className="px-3 py-3 md:py-2 w-[20%] bg-[#f5f5f5] rounded-l text-sm focus:outline-none"
                value={formData.selectedDialCode}
                name="selectedDialCode"
                onChange={handleDialCodeChange}
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
                name="phoneNumber"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded-r placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex sm:flex-col items-center">
            <label className="sm:w-full w-1/4 text-xl md:text-base font-semibold mb-1 sm:mb-0">
              Country
            </label>
            <div className="sm:w-full w-full flex sm:flex-col gap-4">
              <select
                className="sm:w-full w-4/5 px-3 py-2 text-sm bg-[#f5f5f5] rounded focus:outline-none"
                value={formData.selectedCountry}
                name="selectedCountry"
                onChange={handleCountryChange}
              >
                <option value="">Select Country</option>
                {countryData.map((country, i) => (
                  <option key={i} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="sm:w-full w-full flex sm:flex-col items-center">
                <label className="sm:w-full w-1/4 text-xl md:text-base font-semibold mb-1 sm:mb-0">
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

          <div className="flex sm:flex-col items-center">
            <label
              htmlFor="preferred-time"
              className="sm:w-full w-1/5 text-xl md:text-base font-semibold mb-1 sm:mb-0"
            >
              Preferred Time:
            </label>
            <div className="sm:w-full w-4/5">
              <input
                id="preferred-time"
                type="date"
                name="preferredTime"
                placeholder="Enter a Preferred Contact Time"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-3 py-3 md:py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex sm:flex-col items-start">
            <label className="sm:w-full w-1/5 text-xl md:text-base font-semibold mb-1 sm:mb-0 pt-2">
              Message:
            </label>
            <div className="sm:w-full w-4/5">
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
              className="py-2 px-8 bg-primary rounded text-white hover:bg-primary/90 transition duration-300"
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
