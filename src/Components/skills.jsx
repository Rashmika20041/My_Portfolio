import SkillsCarousel from "./SkillsCarousel";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#04AA6D] to-transparent rounded-full opacity-5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-l from-[#04AA6D] to-transparent rounded-full opacity-8 blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#04AA6D] rounded-full opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
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

        <motion.div
          className="flex flex-col items-center justify-center h-full mt-10 text-white relative z-10"
          variants={itemVariants}
        >
          <motion.h1
            className="sm:text-sm md:text-lg mt-5 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Tools I Trust
          </motion.h1>

          <div className="relative inline-block mb-20 mt-4 md:w-[600px] ">
            <motion.h1
              id="toolbox"
              className="text-4xl md:text-5xl font-bold text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tech<span className="text-[#04AA6D]"> Stack </span>& Proficiencies
            </motion.h1>

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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10"
      >
        <SkillsCarousel />
      </motion.div>
    </motion.div>
  );
};
export default Skills;
