const CallbackForm = () => {
  return (
    <div className="max-w-7xl my-0 mx-auto w-full p-10 rounded-xl  md:p-5">
      <p className="text-[2rem] font-semibold text-center py-2">
        Request a Call-Back
      </p>
      <p className="text-center text-xl">
        Tell us a little about your needs, and our team will reach out <br />
        to provide the best solution for you.
      </p>
      <div className="w-full max-w-3xl mx-auto p-4">
        <form className="space-y-3">
          <div className="flex  sm:flex-col sm:items-center text-sm mb-4">
            <span className="sm:w-full w-1/5 text-sm font-semibold mb-2 mb-0">
              I am a
            </span>
            <div className="flex flex-wrap gap-4 sm:w-full w-4/5">
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
                    name="user-type"
                    value={type.toLowerCase().replace(" ", "-")}
                  />
                  <span className="ml-2 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {[
            {
              id: "full-name",
              label: "Full name:",
              placeholder: "Please enter a Full Name",
            },
            {
              id: "email",
              label: "E-Mail:",
              placeholder: "Please enter your E-Mail address",
            },
            {
              id: "phone",
              label: "Phone Number:",
              placeholder: "Please enter a Phone Number including country code",
            },
            {
              id: "company",
              label: "Company name:",
              placeholder: "Please enter a Company name if applicable",
            },
          ].map((field) => (
            <div
              key={field.id}
              className="flex flex-row sm:flex-col sm:items-center"
            >
              <label
                htmlFor={field.id}
                className="w-1/5 sm:w-full text-sm font-semibold mb-1 sm:mb-0"
              >
                {field.label}
              </label>
              <div className="w-4/5 sm:w-full ">
                <input
                  id={field.id}
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          ))}

          <div className="flex sm:flex-col items-center">
            <label className="sm:w-full w-1/5 text-sm font-semibold mb-1 sm:mb-0">
              Country
            </label>
            <div className="sm:w-full w-4/5 flex  sm:flex-col gap-4">
              <input
                type="text"
                placeholder="Please enter a country"
                className="sm:w-full w-1/2 px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
              />
              <div className="sm:w-full w-1/2 flex  sm:flex-col items-center">
                <label className="sm:w-full w-2/5 text-sm font-semibold mb-1 sm:mb-0">
                  Area Code
                </label>
                <input
                  type="text"
                  placeholder="Please enter a Area Code"
                  className="sm:w-full w-3/5 px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {[
            {
              id: "preferred-time",
              label: "Preferred Time:",
              placeholder: "Please enter a Preferred Contact Time",
            },
          ].map((field) => (
            <div key={field.id} className="flex sm:flex-col items-center">
              <label
                htmlFor={field.id}
                className="sm:w-full w-1/5 text-sm font-semibold mb-1 sm:mb-0"
              >
                {field.label}
              </label>
              <div className="sm:w-full w-4/5">
                <input
                  id={field.id}
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          ))}

          <div className="flex  sm:flex-col items-start">
            <label className="sm:w-full w-1/5 text-sm font-semibold mb-1 sm:mb-0 pt-2">
              Message:
            </label>
            <div className="sm:w-full w-4/5">
              <textarea
                placeholder="Please write a message"
                className="w-full px-3 py-2 text-sm bg-[#f5f5f5] rounded placeholder-gray-400 focus:outline-none resize-none"
                rows={4}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-[#7F87FC] text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Request Call Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
