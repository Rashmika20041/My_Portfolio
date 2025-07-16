import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

import FrontEndPDF from "./assets/frontEnd.png";
import AdvancedReact from "./assets/advancedReact.png";
import Python from "./assets/googlePython.png";

const certificates = [
  {
    id: "cert1",
    title: "Meta Front-End Developer",
    platform: "Coursera",
    date: "Dec 2023",
    file: FrontEndPDF,
    type: "image",
  },
  {
    id: "cert2",
    title: "Meta Advanced React",
    platform: "Coursera",
    date: "Dec 2023",
    file: AdvancedReact,
    type: "image",
  },
  {
    id: "cert3",
    title: "Google Crash Course on Python",
    platform: "Coursera",
    date: "Dec 2023",
    file: Python,
    type: "image",
  },
];

const CertificateTimeline = () => {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which item is centered in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const offsets = itemRefs.current.map((ref) => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        return Math.abs(rect.top + rect.height / 2 - middle);
      });

      const minIndex = offsets.indexOf(Math.min(...offsets));
      setActiveIndex(minIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCert = certificates[activeIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-23 pb-40 max-w-7xl mx-auto">
      {/* Left: Timeline */}
      <div className="relative border-l-4 border-[#04AA6D] pl-6 space-y-16">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`relative transition duration-300 ${
              index === activeIndex ? "scale-[1.02]" : "opacity-60"
            }`}
          >
            <div className="absolute -left-5 top-1">
              <div className="bg-[#04AA6D] text-white rounded-full p-2 shadow-md">
                <FaCertificate />
              </div>
            </div>
            <div className="bg-[#1f1f1f] rounded-lg p-5 shadow-md">
              <h3 className="text-xl text-white font-semibold">{cert.title}</h3>
              <p className="text-gray-400">{cert.platform}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Certificate Preview with motion */}
      <div className="sticky mt-14 hidden md:block">
        <div className="bg-[#1a1a1a] border p-1 shadow-lg w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded overflow-hidden bg-black"
            >
                <img
                  src={activeCert.file}
                  alt={activeCert.title}
                  className="w-200 max-h-[400px] object-contain"
                />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CertificateTimeline;
