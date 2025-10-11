import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import bg from "./assets/background.png";
import bg2 from "./assets/background2.jpg";
import NavigationBar from "./navigationbar";
import About from "./about";
import Skills from "./skills";
import Project from "./projects.jsx";
import Footer from "./footer";
import Social from "./social";
import Recognitions from "./recognitions";
import Preloader from "./Preloader";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowUp } from "react-icons/fa";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && (
        <>
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#04AA6D] transform-origin-left z-50"
            style={{ scaleX }}
          />

          <div
            className="bg-cover bg-center h-screen md:bg-fixed relative overflow-hidden"
            style={{ backgroundImage: `url(${bg})` }}
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

            <NavigationBar />
            <div className="flex flex-col justify-center text-center h-screen items-center relative z-10">
              <motion.h1
                className="text-white text-6xl sm:text-8xl md:text-7xl font-bold mt-[-150px] mb-10 select-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Rashmika Perera
              </motion.h1>

              <motion.h2
                className="text-white text-2xl sm:text-5xl md:text-4xl font-semibold mb-5 select-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                I'm a{" "}
                <span
                  style={{
                    color: "#04AA6D",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <Typewriter
                    words={[
                      "Software Engineer",
                      "Full Stack Developer",
                      "Mobile Developer",
                      "Creative Thinker",
                      "Designer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Social />
              </motion.div>
            </div>
          </div>

          <div
            className="bg-fixed bg-cover bg-center min-h-screen relative"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <About />
            <Skills />
            <Project />
            <Recognitions />
          </div>
          <Footer />

          {/* Back to Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-[#04AA6D] hover:bg-[#038f5c] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowUp className="text-xl" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorVariant === "hover" ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <motion.div
          className="relative"
          animate={{
            rotate: cursorVariant === "hover" ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Main cursor dot */}
          <motion.div
            className="w-8 h-8 bg-[#04AA6D] rounded-full flex items-center justify-center"
            animate={{
              scale: cursorVariant === "hover" ? [1, 1.2, 1] : [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Creative icon inside */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                rotate: cursorVariant === "hover" ? [0, 90, 180, 270, 360] : 0,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut"
              }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </motion.svg>
          </motion.div>

          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-2 border-[#04AA6D] rounded-full"
            animate={{
              scale: cursorVariant === "hover" ? [1, 1.8, 1] : [1, 1.4, 1],
              opacity: cursorVariant === "hover" ? [0.5, 0.8, 0.5] : [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Trailing dots */}
          <motion.div
            className="absolute w-2 h-2 bg-[#04AA6D] rounded-full -top-1 -left-1"
            animate={{
              x: cursorVariant === "hover" ? [-4, 4, -4] : [-2, 2, -2],
              y: cursorVariant === "hover" ? [-4, 4, -4] : [-2, 2, -2],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-[#04AA6D] rounded-full -bottom-1 -right-1"
            animate={{
              x: cursorVariant === "hover" ? [4, -4, 4] : [2, -2, 2],
              y: cursorVariant === "hover" ? [4, -4, 4] : [2, -2, 2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Dashboard;
