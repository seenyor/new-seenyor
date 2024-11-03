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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-h-[750px] max-w-7xl mx-auto p-4">
      {/* Top navigation tabs */}
      <div className="flex justify-start mb-4 border-b border-gray-200">
        {features.map((feature, index) => (
          <motion.button
            key={feature.id}
            onClick={() => setActiveFeature(index)}
            className={`px-4 py-2 text-sm font-medium ${
              activeFeature === index
                ? "text-[#6366f1] border-b-2 border-[#6366f1]"
                : "text-gray-500 hover:text-gray-700"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {feature.title}
          </motion.button>
        ))}
      </div>

      <div className="flex !h-full md:flex-col bg-[#6366f1] rounded-xl overflow-hidden">
        {/* Left side - Feature content */}
        <div className="w-[55%] md:w-full p-8 text-white">
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
                <h2 className="text-4xl font-bold mb-4">
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
          <div className="flex justify-start mt-12 space-x-2">
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
