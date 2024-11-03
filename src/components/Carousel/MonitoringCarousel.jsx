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
    content: [
      "Instant alerts for falls, ensuring timely assistance when it matters most.",
      "• Immediate Alerts",
      "• 24/7 Monitoring of Each Move",
      "• Advanced AI algorithms for accurate detection",
      "• Two-Way Communication",
      "• Auto Fall Location",
      "• SOS Button",
    ],
  },
  {
    id: "sleep-analysis",
    title: "Sleep Analysis",
    image: "device2.png",
    content: [
      "Comprehensive sleep tracking and analysis for better rest.",
      "• Sleep Quality Metrics",
      "• Pattern Recognition",
      "• Personalized Insights",
      "• Night Activity Tracking",
      "• Rest Recommendations",
    ],
  },
  {
    id: "wellness-events",
    title: "Wellness Events",
    image: "device3.png",
    content: [
      "Stay connected with community wellness activities and events.",
      "• Community Gatherings",
      "• Virtual Health Sessions",
      "• Expert Consultations",
      "• Group Exercise Classes",
      "• Personal Event Calendar",
    ],
  },
  {
    id: "activities",
    title: "Activities",
    image: "device4.png",
    content: [
      "Track and encourage daily activities for a healthier lifestyle.",
      "• Step Counter",
      "• Exercise Tracking",
      "• Activity Reminders",
      "• Goal Setting",
      "• Progress Visualization",
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
    <div className="w-full max-w-7xl mx-auto p-4">
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

      <div className="flex md:flex-col bg-[#6366f1] rounded-xl overflow-hidden">
        {/* Left side - Feature content */}
        <motion.div
          className="w-full md:w-1/2 p-8 text-white"
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
              <h2 className="text-3xl font-bold mb-4">
                {features[activeFeature].title}
              </h2>
              {features[activeFeature].content.map((item, index) => (
                <p key={index} className="mb-2 text-sm">
                  {item}
                </p>
              ))}
              <motion.button
                className="mt-4 bg-white text-[#6366f1] px-4 py-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right side - Mobile app mockup */}
        <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
          <motion.div
            className="w-64 h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-xl"
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

      {/* Bottom navigation bars */}
      <div className="flex justify-center mt-6 space-x-2">
        {features.map((feature, index) => (
          <motion.button
            key={feature.id}
            onClick={() => setActiveFeature(index)}
            className={`h-1 rounded-full transition-all ${
              activeFeature === index ? "bg-[#6366f1] w-12" : "bg-gray-300 w-6"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">{feature.title}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
