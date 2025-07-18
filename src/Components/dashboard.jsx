import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import bg from "./assets/background.png";
import bg2 from "./assets/background2.jpg";
import NavigationBar from "./navigationbar";
import About from "./about";
import Skills from "./skills";
import Project from "./projects";
import Footer from "./footer";
import Social from "./social";
import Recognitions from "./recognitions";
import Preloader from "./Preloader";
import { Typewriter } from "react-simple-typewriter";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && (
        <>
          <div
            className="bg-cover bg-center h-screen md:bg-fixed"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <NavigationBar />
            <div className="flex flex-col justify-center text-center h-screen items-center ">
              <h1
                className="text-white text-6xl sm:text-8xl md:text-9xl font-bold mt-[-150px] mb-10 select-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Rashmika Perera
              </h1>

              <h2 className="text-white text-2xl sm:text-5xl md:text-6xl font-semibold mb-5 select-none">
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
              </h2>
              <Social />
            </div>
          </div>
          <div
            className="bg-fixed bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <About />
            <Skills />
            <Project />
            <Recognitions />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Dashboard;
