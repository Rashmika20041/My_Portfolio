import Certificates from "./CertificateTimeline";
import { motion } from "framer-motion";

export default function Recognitions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
    >
      <div>
        <style>
          {`
              @keyframes dashGap {
                0% {
                  transform: translateX(-10px);
                }
                100% {
                  transform: translateX(800%);
                }
              }
        
              .base-line {
                position: absolute;
                bottom: -40px;
                width: 30%;
                height: 4px;
                background-color: #04AA6D;
                overflow: hidden;
                
              }
        
              .gap-strip {
                display: flex;
                gap: 5px;
                animation: dashGap 4s linear infinite;
                position: absolute;
                height: 4px;
              }
        
              .gap {
                width: 5px;
                height: 4px;
                background-color: black;
              }
            `}
        </style>

        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="sm:text-sm md:text-lg text-gray-400">Milestones of Growth</h1>

          <div className="relative inline-block mb-13 mt-4 md:w-[700px] ">
            <h1 id="Recognitions" className="text-4xl md:text-5xl font-bold text-center">
              Recognitions &{" "}
              <span className="text-[#04AA6D]">Certifications</span>
            </h1>

            <div className="flex justify-center">
              <div className="base-line">
                <div className="gap-strip">
                  <div className="gap"></div>
                  <div className="gap"></div>
                  <div className="gap"></div>
                </div>
              </div>
            </div>
          </div>
          <p
            className="text-gray-400 italic text-lg mt-14 mb-25 max-w-5xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            A visual journey through my learning path. Each milestone represents
            growth, effort, and a step forward.
          </p>
        </div>
      </div>
      <div>
        <Certificates />
      </div>
    </motion.div>
  );
}
