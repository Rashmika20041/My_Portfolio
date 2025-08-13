import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import PI from "./assets/profile1.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 10 }}
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
          transform: translateX(550%);
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
        animation: dashGap 2s linear infinite;
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
          <h1 className="sm:text-sm md:text-lg mt-15 text-gray-400">Get to know me</h1>

          <div className="relative inline-block mb-27 mt-4 w-[300px] ">
            <h1 className="text-4xl md:text-5xl font-bold text-center">About Me</h1>

            <div className="flex justify-center">
              <div className="base-line">
                <div className="gap-strip">
                  <div className="gap"></div>
                  <div className="gap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center justify-between h-full text-white gap-10">
        <img
          src={PI}
          alt="Profile"
          className="border-4 border-black h-103 w-80 sm:h-113 sm:w-80 md:h-133 md:w-100 mb-4"
        />
        <div className="flex flex-col md:w-1/2 md:gap-4 w-3/4 ">
          <h1
            className="text-lg md:text-2xl text-[#04AA6D] font-semibold w-1/2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Who am i?
          </h1>
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold leading-[1.5]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            I'm Rashmika Perera, a passionate Full Stack developer and designer
          </h1>
          <p
            className="text-sm md:text-[16px] text-gray-400 leading-[1.5] leading-[1.6] mt-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            I'm Rashmika Perera, a 21-year-old Software Engineering
            undergraduate at the National Institute of Business Management. With
            a keen interest in technology and innovation, I am dedicated to
            developing software solutions that address real-world challenges.
            Through continuous self-learning and hands-on projects, I strive to
            improve my skills and stay ahead in the ever-evolving tech
            landscape. My passion for problem-solving drives me to explore new
            opportunities and contribute to meaningful advancements in software
            development
          </p>
          <hr className="border-t-2 border-gray-700 md:w-158 mt-4" />
          <div className="flex flex-row items-center">
            <button
              className="bg-[#04AA6D] text-white w-37 h-12 rounded-[50px] font-semibold hover:bg-[#038f5c] transition duration-300 ease-in-out mt-6"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1-NbpMqXO7p1H51LvW8AezuhDb6mVhJIM/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Download CV
            </button>
            <div className="hidden md:flex items-center">
            <hr className="border-t-2 border-gray-700 w-20 ml-7 mr-7 mt-6" />
            <FaGithub
              className="text-2xl mt-5 mr-3 text-gray-400 hover:text-[#04AA6D] transition duration-300 ease-in-out cursor-pointer"
              onClick={() => window.open("https://github.com/Rashmika20041")}
            />
            <FaLinkedin
              className="text-2xl mt-5 mr-3 text-gray-400 hover:text-[#04AA6D] transition duration-300 ease-in-out cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rashmika-perera-b49142291/"
                )
              }
            />
            <SiGmail
              className="text-2xl mt-5 text-gray-400 hover:text-[#04AA6D] transition duration-300 ease-in-out cursor-pointer"
              onClick={() =>
                window.open(
                  "mailto:rashmikaperera330@gmail.com?subject=Hello&body=I%20saw%20your%20portfolio"
                )
              }
            />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
