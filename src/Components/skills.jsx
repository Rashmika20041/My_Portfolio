import SkillsCarousel from "./SkillsCarousel";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
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
          <h1 className="text-lg mt-5 text-gray-400">The Tools I Trust</h1>

          <div className="relative inline-block mb-33 mt-4 md:w-[600px] ">
            <h1 id="toolbox" className="text-5xl font-bold text-center">
              Tech<span className="text-[#04AA6D]"> Stack </span>& Proficiencies
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
        </div>
      </div>
      <div>
        <SkillsCarousel />
      </div>
    </motion.div>
  );
};
export default Skills;
