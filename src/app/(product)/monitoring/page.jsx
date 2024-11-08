import MonitoringCarousel from "@/components/Carousel/MonitoringCarousel";
import Artnow from "@/components/Home/Artnow";
import CallbackForm from "@/components/Home/CallbackForm";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Detect",
    description: "Immediate detection of falls or emergencies.",
    image: "/images/care1.png",
    bg: "/images/care4.svg",
    border: true,
  },
  {
    title: "Verify",
    description:
      "Our agents verify each alert, using two-way communication to check in with your loved one, then contacting their emergency contacts if needed.",
    image: "/images/care2.png",
    bg: "/images/care5.svg",
    border: true,
  },
  {
    title: "Response",
    description:
      "If there’s no response from your loved one or their emergency contacts, our team will contact 911 for immediate assistance.",
    image: "/images/care3.png",
    bg: "/images/care6.svg",
    border: false,
  },
];
const ProfessionalMonitoring = () => {
  // w-full max-w-7xl mx-auto
  return (
    <div className=" flex flex-col gap-16 tab:gap-5 bg-white px-6 tab:px-2">
      {/* hero */}
      <section
        className="relative sm:mb-6 mx-[100px] xxl:mx-0  h-screen sm:h-[60vh] max-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/servicehero.png)" }}
      >
        <div className="max-w-[1320px] w-full mx-auto flex items-center justify-start sm:justify-center h-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-xl px-10 tab:px-5">
            <h1 className="font-bold text-[2rem] md:text-2xl">
              24/7 Monitoring
            </h1>
            <h1 className="text-2xl pt-2 sm:text-xl ">
              by Professional Agents.
            </h1>
            <p className="mt-4 text-xl md:text-lg">
              Ensuring immediate response and peace of mind, day and night.
            </p>
            <Link href="/systembuilder">
              <button className="mt-6 px-6 text-white py-[10px] font-semibold text-lg bg-[#7F87FC] rounded-md">
                Protect Them Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <ScrollButton />

      {/* Alert verification */}
      <div className="max-w-[1320px] my-0 mx-auto w-full rounded-xl  tab:p-5 sm:p-2">
        <p className="text-[2rem] sm:text-3xl font-semibold text-center py-2">
          Alerts Verification with Confidence
        </p>
        <p className="text-center text-xl max-w-3xl mx-auto w-full px-5 sm:px-2">
          Our platform empowers agents to confirm alerts and take swift action
          for elderly safety by following a predefined checklist.
        </p>

        <div className="w-full h-auto tab:min-h-[400px] sm:min-h-[300px] mx-auto  mt-8 relative">
          <Image
            className="w-full h-auto tab:hidden"
            src="/images/alert.png"
            width={1200}
            height={800}
            quality={100}
            alt="alert verification"
          />
          <div className=" grid grid-cols-4 tab:grid-cols-2 w-full mx-auto  gap-12 px-10 tab:px-3 md:px-2 md:gap-5 absolute top-12 md:top-5">
            <div className="w-52 md:w-auto tab:w-auto tab:bg-[#ffff] tab:bg-opacity-30  text-center">
              <Image
                className="w-20 md:w-12 mx-auto h-auto"
                src="/images/detected.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl md:text-[15px]">
                Alert Detected
              </p>
              <p className="md:text-sm">Instant Notifications and SMS sent</p>
            </div>
            <div className="w-52 md:w-auto tab:w-auto tab:bg-[#ffff] tab:bg-opacity-30  text-center">
              <Image
                className="w-20 md:w-12 mx-auto h-auto"
                src="/images/detected2.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl md:text-[15px]">
                Calling Elderly
              </p>
              <p className="md:text-sm">2-Way Audio from Device</p>
            </div>
            <div className="w-52 md:w-auto tab:w-auto tab:bg-[#ffff] tab:bg-opacity-30  text-center">
              <Image
                className="w-20 md:w-12 mx-auto h-auto"
                src="/images/detected3.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl md:text-[15px]">
                Calling Contacts
              </p>
              <p className="md:text-sm">Assigned to Aging loved ones</p>
            </div>
            <div className="w-52 md:w-auto tab:w-auto tab:bg-[#ffff] tab:bg-opacity-30  text-center">
              <Image
                className="w-20 md:w-12 mx-auto h-auto"
                src="/images/detected4.svg"
                width={200}
                height={200}
                alt="alert verification"
              />
              <p className="font-semibold text-xl md:text-[15px]">
                Calling Emergency
              </p>
              <p className="md:text-sm">Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligent care */}

      <div className="max-w-[1320px] my-0 mx-auto w-full rounded-xl  md:p-5 sm:p-2">
        <div className="flex justify-center">
          <span className="text-[2rem] tab:text-lg font-semibold text-center py-1 my-2 px-3 sm:px-2 bg-[#000] rounded-md text-white">
            Intelligent Care for Loved Ones
          </span>
        </div>
        <p className="text-center text-xl max-w-3xl mx-auto w-full px-5">
          Ensure Their Safety, Protect Your Peace of Mind
        </p>
        <div className="tab:hidden">
          <div className=" flex justify-between gap-12 md:gap-4 md:mx-0 my-5">
            <Image
              className="w-full md:w-[200px] mx-auto h-auto"
              src="/images/care1.png"
              width={200}
              height={200}
              alt="alert verification"
            />
            <Image
              className="w-full md:w-[200px] mx-auto h-auto"
              src="/images/care2.png"
              width={200}
              height={200}
              alt="alert verification"
            />
            <Image
              className="w-full md:w-[200px] mx-auto h-auto"
              src="/images/care3.png"
              width={200}
              height={200}
              alt="alert verification"
            />
          </div>
          <div
            className="relative w-full bg-cover bg-center bg-no-repeat flex justify-between"
            style={{ backgroundImage: "url(/images/gradient.png)" }}
          >
            <div className="py-4 w-full px-5 md:px-3">
              <h3 className="text-xl md:text-lg font-semibold">Detect</h3>
              <p className="md:text-sm">
                Immediate detection of falls or emergencies.
              </p>
            </div>
            <div className="py-4 w-full px-5 md:px-3 border-l-[1.5px]  border-slate-600 ">
              <h3 className="text-xl md:text-lg font-semibold">Verify</h3>
              <p className="md:text-sm">
                Our agents verify each alert, using two-way communication to
                check in with your loved one, then contacting their emergency
                contacts if needed.
              </p>
            </div>
            <div className="py-4 w-full px-5 md:px-3  border-l-[1.5px]  border-slate-600 ">
              <h3 className="text-xl md:text-lg font-semibold">Response</h3>
              <p className="md:text-sm">
                If there’s no response from your loved one or their emergency
                contacts, our team will contact 911 for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden tab:flex flex-col gap-5">
          {features?.map((item, i) => (
            <div key={i} className="bg-white py-3 text-center">
              <>
                <Image
                  src={item.image}
                  width={156}
                  height={32}
                  alt={item.title}
                  className="w-full  mx-auto object-cover "
                />
                <div
                  style={{ backgroundImage: `url(${item?.bg})` }}
                  className="text-start p-4 mt-2"
                >
                  <p className="font-semibold text-xl">{item.title}</p>
                  <p className="text-[16px]">{item.description}</p>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>

      {/* advance detection */}

      <div className="mb-3 max-w-[1320px] my-0 mx-auto w-full rounded-xl  md:p-5 tab:p-2">
        <p className="text-[2rem] tab:text-2xl font-semibold text-center py-2">
          Advanced Detection Features
        </p>
        <p className="text-center text-xl tab:text-lg max-w-3xl mx-auto w-full px-5">
          Ensuring safety by monitoring falls, vital signs, and health events.
        </p>
        <MonitoringCarousel />
      </div>

      {/* Ai driven safety */}
      <div className="max-w-[1320px] my-0 mx-auto w-full  ">
        <div className="bg-[#7F87FC] py-10 rounded-xl text-white text-center">
          <h3 className="font-semibold text-4xl md:text-3xl tab:px-3">
            AI-Driven Safety for Peace of Mind
          </h3>
          <p className="text-xl md:px-5 tab:px-3 py-3">
            Our system learns and adapts to deliver real-time alerts and
            proactive safety for the elderly.
          </p>

          <div className="flex tab:flex-col gap-16 md:gap-5 mt-16 sm:mt-6 justify-center">
            <div className="w-56 md:w-48 tab:mx-auto  h-auto">
              <Image
                className="h-auto w-full"
                src="/images/ai1.png"
                width={200}
                height={200}
                alt="monitoring"
              />
            </div>
            <div className="w-56 md:w-48 tab:mx-auto  h-auto">
              <Image
                className="h-auto w-full"
                src="/images/ai2.png"
                width={200}
                height={200}
                alt="monitoring"
              />
            </div>
            <div className="w-56 md:w-48 tab:mx-auto  h-auto">
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
        <Link href="/systembuilder">
          <button className="bg-[#7F87FC] min-w-24 text-white font-semibold px-2 sm:px-1 py-2 sm:text-xs rounded">
            Get Started
          </button>
        </Link>
      </div>
      <CallbackForm />
    </div>
  );
};

export default ProfessionalMonitoring;
