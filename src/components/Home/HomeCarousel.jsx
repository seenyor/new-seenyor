"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Heart,
  Bed,
  AlertTriangle,
  Brain,
  MapPin,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

// Sample slide data
const slides = [
  {
    id: 1,
    title: "Peace of Mind Monitoring",
    subtitle:
      "Your loved one is safe, day and night. Every breath, every moment - gently watched over, so you never have to worry",
    image: "/images/slider1/safety.webp",
    color: "7F87FC",
    icon: "/images/icon1.svg",
  },
  {
    id: 2,
    title: "Rest Easy, Night After Night",
    subtitle:
      "Know they’re safe and sound as they drift into a peaceful sleep. Seenyor watches over every quiet moment.",
    image: "/images/slider1/sleeping.webp",
    color: "34CECE",
    icon: "/images/icon2.svg",
  },
  {
    id: 3,
    title: "Activity Monitoring",
    subtitle:
      "From morning walks to quiet moments, Seenyor keeps a gentle eye on their every steps-so you don't have to.",
    image: "/images/slider1/activity.webp",
    color: "9747FF",
    icon: "/images/icon3.svg",
  },
  {
    id: 4,
    title: "Safety, When It Matters Most",
    subtitle:
      "With every step they take, you can rest assured that Seenyor is there to catch them if they fall.",
    image: "/images/slider1/falls.webp",
    color: "FF6633",
    icon: "/images/icon4.svg",
  },
  {
    id: 5,
    title: "Smart Insights for Peace of Mind",
    subtitle:
      "Seenyor analyzes all data and turns it into simple updates, helping you easily understand your loved one's well-being.",
    image: "/images/slider1/ai.webp",
    color: "B9B0CD",
    icon: "/images/icon5.svg",
  },
  {
    id: 6,
    title: "Know Where They Are, When It Matters",
    subtitle:
      "Seenyor tracks their exact location at home, so you’ll know immediately if they fall or are resting safely.",
    image: "/images/slider1/location.webp",
    color: "FF006E",
    icon: "/images/icon6.svg",
  },
  {
    id: 7,
    title: "Stay Connected When They Need You",
    subtitle:
      "With Two-Way Communication, they can call for help, and you’ll respond instantly—whether it's a quick check-in or something more serious.",
    image: "/images/slider1/communication.webp",
    color: "4285F4",
    icon: "/images/icon7.svg",
  },
];

const menuItems = [
  { icon: Activity, label: "Safety & Activity" },
  { icon: Bed, label: "Sleep Monitoring" },
  { icon: Heart, label: "Activity Monitoring" },
  { icon: AlertTriangle, label: "Falls Detection" },
  { icon: Brain, label: "AI Analyst" },
  { icon: MapPin, label: "Location" },
  { icon: MessageSquare, label: "Communication" },
];

export default function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="flex flex-row md:flex-col h-screen md:h-[450px] tab:h-[320px] max-h-[800px] xxl:max-h-[650px] max-w-[1720px] my-0 w-full mx-auto  bg-[#F3F4F6]">
      {/* Sidebar */}
      <div className="w-64 md:hidden  border-r border-gray-200 p-4">
        <div className="space-y-2 sm:space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => {
                setCurrentSlide(index % slides.length);
                setIsAutoPlaying(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                index % slides.length === currentSlide
                  ? "font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -0 }}
            transition={{ duration: 0.5 }} // Added delay of 2 seconds
          >
            <div className="relative h-full">
              {/* Header */}
              <div
                style={{ backgroundColor: `#${slides[currentSlide].color}` }}
                className="absolute top-0 py-5 tab:py-1 tab:px-2 text-white  z-40 w-full px-12 flex flex-row items-start justify-between mb-8"
              >
                <div className="space-y-2 sm:space-y-0">
                  <h1 className="text-2xl tab:text-[16px] font-bold">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="max-w-2xl md:text-sm tab:text-xs">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
                <div className="text-white my-auto">
                  <Image
                    src={slides[currentSlide].icon}
                    height={30}
                    width={30}
                    alt="icons"
                    className="h-8 w-8"
                  />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex h-full flex-row gap-8">
                <motion.img
                  src={slides[currentSlide].image}
                  alt="Monitoring visualization"
                  className="w-full h-full rounded-2xl object-cover"
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
