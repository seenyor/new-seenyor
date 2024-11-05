"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const helpTopics = [
  {
    title: "First Time Use",
    description: "Welcome to Senryor Application",
    icon: "/images/help1.svg",
    link: "#",
  },
  {
    title: "Elderly Management",
    description: "Creating Personalized Care and Monitoring",
    icon: "/images/help2.svg",
    link: "#",
  },
  {
    title: "Device Management",
    description: "Monitor Device Performance and Updates",
    icon: "/images/help3.svg",
    link: "#",
  },
  {
    title: "Troubleshoot",
    description: "Solutions for a Smooth Experience",
    icon: "/images/help4.svg",
    link: "#",
  },
  {
    title: "Using the App",
    description: "A Guide to Using Key App Features",
    icon: "/images/help5.svg",
    link: "#",
  },
  {
    title: "Using the Platform",
    description: "A Guide to Using Key Platform Features",
    icon: "/images/help6.svg",
    link: "#",
  },
  {
    title: "Billing & Payments",
    description: "Billing & Payments Troubleshoot",
    icon: "/images/help7.svg",
    link: "#",
  },
  {
    title: "My Account",
    description: "Managing Senryor Account",
    icon: "/images/help8.svg",
    link: "#",
  },
  {
    title: "Videos",
    description: "Interactive Video Materials",
    icon: "/images/help9.svg",
    link: "#",
  },
  {
    title: "Download Zone",
    description: "Welcome to Senryor Download Zone",
    icon: "/images/help10.svg",
    link: "#",
  },
];

const KnowledgeDetails = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#7F87FC] py-5">
        <div className="mx-auto flex items-start gap-5 max-w-7xl w-full p-6">
          <button
            onClick={() => router.back()}
            className="text-white min-h-[100px] bg-[#A5ABFD] rounded-lg px-2"
          >
            <ArrowLeft className="w-7 h-7" />
          </button>
          <div className="flex w-full gap-6  overflow-x-scroll scrollbar-thin scrollbar-thumb-[#7F87FC] scrollbar-track-[#F5F5FB] pb-3">
            {helpTopics.map((topic, index) => (
              <Link
                href={`/knowledge/${topic?.title}`}
                key={index}
                className="block"
              >
                <div className="flex flex-row items-center bg-white rounded-xl gap-4 p-4 w-full min-w-[280px] min-h-[100px]">
                  <Image
                    src={topic?.icon}
                    height={10}
                    width={10}
                    alt=""
                    className="h-7 w-7"
                  />
                  <div>
                    <h3 className="font-semibold">{topic.title}</h3>
                    <p className="text-sm text-gray-500">{topic.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeDetails;
