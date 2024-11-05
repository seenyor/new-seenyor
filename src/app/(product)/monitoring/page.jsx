import MonitoringCarousel from "@/components/Carousel/MonitoringCarousel";
import Artnow from "@/components/Home/Artnow";
import CallbackForm from "@/components/Home/CallbackForm";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";

const ProfessionalMonitoring = () => {
  // w-full max-w-7xl mx-auto
  return (
    <div className=" flex flex-col gap-16 sm:gap-5 bg-white py-5 mx-6 sm:mx-3">
      {/* hero */}
      <section
        className="relative sm:mb-6 w-full max-w-7xl mx-auto flex items-center justify-start sm:justify-center h-screen sm:h-[60vh] max-h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/servicehero.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-xl ps-16 sm:ps-5 px-4">
          <h1 className="text-4xl font-bold sm:text-2xl ">24/7 Monitoring</h1>
          <h1 className="text-2xl pt-2 sm:text-xl ">by Professional Agents.</h1>
          <p className="mt-4 text-xl md:text-lg">
            Ensuring immediate response and peace of mind, day and night.
          </p>
          <button className="mt-6 px-6 text-white py-[10px] font-semibold text-lg bg-[#80CAA7] rounded-md">
            Protect Them Now
          </button>
        </div>
      </section>

      <ScrollButton />

      {/* Alert verification */}
      <div className="max-w-7xl my-0 mx-auto w-full rounded-xl  md:p-5 sm:p-2">
        <p className="text-[2rem] sm:text-3xl font-semibold text-center py-2">
          Alerts Verification with Confidence
        </p>
        <p className="text-center text-xl max-w-3xl mx-auto w-full px-5 sm:px-2">
          Our platform empowers agents to confirm alerts and take swift action
          for elderly safety by following a predefined checklist.
        </p>

        <div className="w-full h-auto mt-8 relative">
          <Image
            className="w-full h-auto"
            src="/images/alert.png"
            width={1200}
            height={800}
            quality={100}
            alt="alert verification"
          />
          <div className="ms-16 sm:ms-0 grid grid-cols-4 md:grid-cols-2 gap-20 md:gap-5 absolute top-12">
            <div className="w-52 sm:w-auto sm:bg-[#ffff] sm:bg-opacity-30  text-center">
              <Image
                className="w-20 sm:w-12 mx-auto h-auto"
                src="/images/detected.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Alert Detected</p>
              <p className="">Instant Notifications and SMS sent</p>
            </div>
            <div className="w-52 sm:w-auto sm:bg-[#ffff] sm:bg-opacity-30  text-center">
              <Image
                className="w-20 sm:w-12 mx-auto h-auto"
                src="/images/detected2.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Calling Elderly</p>
              <p className="">2-Way Audio from Device</p>
            </div>
            <div className="w-52 sm:w-auto sm:bg-[#ffff] sm:bg-opacity-30  text-center">
              <Image
                className="w-20 sm:w-12 mx-auto h-auto"
                src="/images/detected3.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Calling Contacts</p>
              <p className="">Assigned to Aging loved ones</p>
            </div>
            <div className="w-52 sm:w-auto sm:bg-[#ffff] sm:bg-opacity-30  text-center">
              <Image
                className="w-20 sm:w-12 mx-auto h-auto"
                src="/images/detected4.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl">Calling Emergency</p>
              <p className="">Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligent care */}

      <div className="max-w-7xl my-0 mx-auto w-full rounded-xl  md:p-5 sm:p-2">
        <div className="flex justify-center">
          <span className="text-[2rem] sm:text-lg font-semibold text-center py-1 my-2 px-3 sm:px-2 bg-[#000] rounded-md text-white">
            Intelligent Care for Loved Ones
          </span>
        </div>
        <p className="text-center text-xl max-w-3xl mx-auto w-full px-5">
          Ensure Their Safety, Protect Your Peace of Mind
        </p>

        <div className="flex md:flex-col justify-between gap-12 mx-5 sm:mx-0 my-5">
          <Image
            className="w-full mx-auto h-auto"
            src="/images/care1.png"
            width={200}
            height={200}
            alt="alert verification"
          />
          <Image
            className="w-full mx-auto h-auto"
            src="/images/care2.png"
            width={200}
            height={200}
            alt="alert verification"
          />
          <Image
            className="w-full mx-auto h-auto"
            src="/images/care3.png"
            width={200}
            height={200}
            alt="alert verification"
          />
        </div>
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat flex md:flex-col justify-between px-8 sm:px-2"
          style={{ backgroundImage: "url(/images/gradient.png)" }}
        >
          <div className="py-4 w-full">
            <h3 className="text-xl font-semibold">Detect</h3>
            <p>Immediate detection of falls or emergencies.</p>
          </div>
          <div className="py-4 w-full border-l-[1.5px] sm:border-none border-slate-600 ps-5 sm:ps-0">
            <h3 className="text-xl font-semibold">Verify</h3>
            <p>
              Our agents verify each alert, using two-way communication to check
              in with your loved one, then contacting their emergency contacts
              if needed.
            </p>
          </div>
          <div className="py-4 w-full  border-l-[1.5px] sm:border-none sm:ps-0 border-slate-600 ps-5">
            <h3 className="text-xl font-semibold">Response</h3>
            <p>
              If there’s no response from your loved one or their emergency
              contacts, our team will contact 911 for immediate assistance.
            </p>
          </div>
        </div>
      </div>

      {/* advance detection */}

      <div className="mb-3 max-w-7xl my-0 mx-auto w-full rounded-xl  md:p-5 sm:p-2">
        <p className="text-[2rem] sm:text-2xl font-semibold text-center py-2">
          Advanced Detection Features
        </p>
        <p className="text-center text-xl sm:text-lg max-w-3xl mx-auto w-full px-5">
          Ensuring safety by monitoring falls, vital signs, and health events.
        </p>
        <MonitoringCarousel />
      </div>

      {/* Ai driven safety */}
      <div className="max-w-7xl my-0 mx-auto w-full  ">
        <div className="bg-[#7F87FC] py-10 rounded-xl text-white text-center">
          <h3 className="font-semibold text-4xl sm:text-3xl sm:px-3">
            AI-Driven Safety for Peace of Mind
          </h3>
          <p className="text-xl sm:px-3 py-3">
            Our system learns and adapts to deliver real-time alerts and
            proactive safety for the elderly.
          </p>

          <div className="flex md:grid md:grid-cols-2 sm:grid-cols-1 gap-12 md:gap-6 mt-16 sm:mt-5 justify-center">
            <div className="w-56 md:mx-auto  h-auto">
              <Image
                className="h-auto w-full"
                src="/images/ai1.png"
                width={200}
                height={200}
                alt="monitoring"
              />
            </div>
            <div className="w-56 md:mx-auto  h-auto">
              <Image
                className="h-auto w-full"
                src="/images/ai2.png"
                width={200}
                height={200}
                alt="monitoring"
              />
            </div>
            <div className="w-56 md:mx-auto  h-auto">
              <Image
                className="h-auto w-full"
                src="/images/ai3.png"
                width={200}
                height={200}
                alt="monitoring"
              />
            </div>
          </div>
          <Image
            className="h-auto w-full"
            src="/images/aibanner.png"
            width={800}
            height={800}
            quality={100}
            alt="Ai Banner"
          />
        </div>
      </div>

      <Artnow />
      <div className="max-w-7xl my-0 w-full mx-auto rounded-xl  md:p-5 sm:p-2 bg-[#2C3142] flex justify-between items-center px-8 py-6 sm:text-sm sm:px-4 sm:py-3">
        <p className="text-white">
          Your Journey to Safety and Peace of Mind Begins Here
        </p>
        <button className="bg-[#7F87FC] min-w-24 text-white font-semibold px-2 sm:px-1 py-2 sm:text-xs rounded">
          Get Started
        </button>
      </div>
      <CallbackForm />
    </div>
  );
};

export default ProfessionalMonitoring;
