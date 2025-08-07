import bg from "./assets/react.jpg";
import movieSite from "./assets/movieSite.png";
import pharmacy from "./assets/pharmacy.png";
import biofilm from "./assets/biofilm.png";
import dailybloom from "./assets/dailybloom.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="py-2"
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
          <h1 className="sm:text-sm md:text-lg mt-5 text-gray-400">
            Ideas turned into impact
          </h1>

          <div className="relative inline-block mb-13 mt-4 md:w-[600px] ">
            <h1
              id="Devfolio"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
            >
              Crafted With<span className="text-[#04AA6D]"> Passion</span>
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

      <p
        className="text-left italic text-sm md:text-lg text-gray-400 mt-14 max-w-[90%] md:max-w-[87%] mx-auto leading-relaxed"
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
      >
        While my featured projects below highlight some of my proudest work,
        they’re just the beginning. I’m always building, experimenting, and
        learning. Many of my other creations—ranging from mini tools to
        full-stack apps—are available on my GitHub. Feel free to explore them
        and see the journey behind the code!
      </p>

      {/* Project Cards */}
      <div className="space-y-10 mt-14">

        {/* MovieWorld */}
        <motion.div
          className="relative flex flex-col md:flex-row justify-center md:justify-start items-center md:h-60 bg-gradient-to-r from-[#022912] via-[#00613c] to-[#01aa6a] mx-4 md:mx-20 px-4 md:px-10 py-6"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <img
            src={movieSite}
            alt="Project Demo"
            className="w-full md:w-92 h-auto md:h-70 border-y-[20px] md:border-y-[40px] border-x-2 md:border-x-5 rounded-2xl border-[#075219] object-cover mb-6 md:mb-0 md:ml-9"
          />
          <div className="text-center md:text-left w-full md:w-3/6 md:ml-20">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
              Movie World
            </h2>
            <p className="text-white/80 italic text-sm md:text-base mb-4 md:mb-6">
              Interactive movie site with search and filter features.
            </p>
            <button
              className="bg-[#0141aa] hover:bg-[#00190e] text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-3 rounded-full transition"
              onClick={() =>
                window.open(
                  "https://rashmika20041.github.io/MovieWorld-WebSite/",
                  "_blank"
                )
              }
            >
              Visit Site &rarr;
            </button>
          </div>
        </motion.div>

        {/* Daily Bloom */}
        <motion.div
          className="relative flex flex-col md:flex-row justify-center md:justify-between items-center md:h-60 bg-gradient-to-r from-[#F2B21B] via-[#F2CB1B] to-[#EBF21B] mx-4 md:mx-20 px-4 md:px-10 py-6"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-2">
              Daily Bloom
            </h2>
            <p className="text-white/80 italic text-sm md:text-base mb-4 md:mb-6">
              Boost productivity with daily tasks
            </p>
            <button
              className="bg-[#FF5517] hover:bg-[#FF8B17] text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-3 rounded-full transition"
              onClick={() =>
                window.open(
                  "https://dailybloom-todo.vercel.app/"
                )
              }
            >
              Visit Site &rarr;
            </button>
          </div>

          <img
            src={dailybloom}
            alt="Project Demo"
            className="w-full md:w-92 h-auto md:h-70 border-y-[20px] md:border-y-[40px] border-x-2 md:border-x-5 rounded-2xl border-[#FFB217] object-cover md:mr-9"
          />
        </motion.div>

        {/* Pharmacy */}
        <motion.div
          className="relative flex flex-col md:flex-row justify-center md:justify-between items-center md:h-60 bg-gradient-to-r from-[#245c7a] via-[#003b81] to-[#000e30] mx-4 md:mx-20 px-4 md:px-10 py-6"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-2">
              Pharmacy Management System
            </h2>
            <p className="text-white/80 italic text-sm md:text-base mb-4 md:mb-6">
              Full-stack system managing pharmacy inventory, sales, and customer
              orders.
            </p>
            <button
              className="bg-[#002718] hover:bg-[#00190e] text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-3 rounded-full transition"
              onClick={() =>
                window.open(
                  "https://github.com/Rashmika20041?tab=repositories",
                  "_blank"
                )
              }
            >
              See How Did That &rarr;
            </button>
          </div>

          <img
            src={pharmacy}
            alt="Project Demo"
            className="w-full md:w-92 h-auto md:h-70 border-y-[20px] md:border-y-[40px] border-x-2 md:border-x-5 rounded-2xl border-[#002b92] object-cover md:mr-9"
          />
        </motion.div>

        {/* Biofilm */}
        <motion.div
          className="relative flex flex-col md:flex-row justify-center md:justify-start items-center md:h-60 bg-gradient-to-r from-[#004040] via-[#008484] to-[#00c3c3] mx-4 md:mx-20 px-4 md:px-10 py-6"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <img
            src={biofilm}
            alt="Project Demo"
            className="w-full md:w-92 h-auto md:h-70 border-y-[20px] md:border-y-[40px] border-x-2 md:border-x-5 rounded-2xl border-[#01aaaa] object-cover mb-6 md:mb-0 md:ml-9"
          />
          <div className="text-center md:text-left w-full md:w-3/6 md:ml-20">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
              Biofilm
            </h2>
            <p className="text-white/80 italic text-sm md:text-base mb-4 md:mb-6">
              Modern fertilizer site showcasing products and benefits.
            </p>
            <button
              className="bg-[#12b34a] hover:bg-[#00190e] text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-3 rounded-full transition"
              onClick={() => window.open("https://biofilm.lk/", "_blank")}
            >
              Visit Site &rarr;
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
