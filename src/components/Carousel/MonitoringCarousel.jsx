"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: "fall-detection",
    title: "Fall Detection",
    image: "device1.png",
    subtitle:
      "Instant alerts for falls, ensuring timely assistance when it matters most.",
    content: [
      "• Immediate Alerts",
      "• 24/7 Monitoring of Each Move",
      "• Advanced AI algorithms for accurate detection",
      "• Two-Way Communication",
      "• Data Insights",
      "• Exact Fall Location",
    ],
  },
  {
    id: "sleep-analysis",
    title: "Sleep Analysis",
    subtitle:
      "Gain insights into sleep patterns and quality for healthier, restorative rest.",
    image: "device2.png",
    content: [
      "• Sleep Summary & Patterns",
      "• Sleep Events, Duration & Efficiency",
      "• Sleep Statistic",
      "• Sleep Apnea Detection",
      "• Bed Exits Distribution",
      "• Sleep Routine Distribution",
    ],
  },
  {
    id: "wellness-events",
    title: "Wellness Events",
    subtitle:
      "Real-time monitoring of vital signs and alerts for critical health changes.",
    image: "device3.png",
    content: [
      "• Real-Time Heart Rate Monitoring",
      "• Real-Time Respiratory Rate Monitoring",
      "• Sleep Apnea Detection",
      "• Health Insights",
      "• Apnea-Hypopnea Index (AHI)",
      "• Low & High Heart and Respiratory rate detection",
    ],
  },
  {
    id: "activities",
    title: "Activities",
    subtitle:
      "Track daily movements and routines to promote healthy, active living.",
    image: "device4.png",
    content: [
      "• Daytime Activity Data",
      "• Sedentary Time",
      "• Walking Steps and Speed",
      "• Number of Rooms visited",
      "• Body Movement Index",
      "• Daily Activities Distribution",
    ],
  },
];

export default function MonitoringCarousel() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-h-[750px] md:max-h-[1400px] max-w-[1320px] mx-auto py-4">
      <div className="flex !h-full md:flex-col bg-[#6366f1] rounded-xl overflow-hidden">
        {/* Left side - Feature content */}
        <div className="w-[55%] md:w-full p-8 pb-0 text-white">
          {/* Top navigation tabs */}
          <div className="flex justify-start sm:grid sm:grid-cols-2 sm:gap-3 mb-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`text-white px-4 sm:px-0 py-2 text-sm font-medium ${
                  activeFeature === index
                    ? "border-b-2 border-[#FFCB33]"
                    : "hover:text-gray-100"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {feature.title}
              </motion.button>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl sm:text-2xl font-bold mb-4 sm:mb-2">
                  {features[activeFeature].title}
                </h2>
                <h2 className="text-2xl mb-6">
                  {features[activeFeature].subtitle}
                </h2>
                {features[activeFeature].content.map((item, index) => (
                  <p key={index} className="mb-3">
                    {item}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          {/* Bottom navigation bars */}
          <div className="flex justify-start mt-10 mb-5 space-x-2">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`h-1 rounded-full transition-all ${
                  activeFeature === index ? "bg-white w-12" : "bg-gray-400 w-6"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{feature.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
        {/* Right side - Mobile app mockup */}
        <motion.div
          className="w-[45%] md:w-full bg-white flex items-center justify-center  mx-auto h-[500px] overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={`/images/${features[activeFeature].image}`}
            height={500}
            width={300}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
