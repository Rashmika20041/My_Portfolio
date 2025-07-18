import bg from "./assets/react.jpg";
import movieSite from "./assets/movieSite.png";
import pharmacy from "./assets/pharmacy.png";
import biofilm from "./assets/biofilm.png";
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
            <h1 id="Devfolio" className="text-4xl md:text-5xl font-bold text-center">
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

      <p className="text-left italic text-lg text-gray-400 mt-14 max-w-274 mx-auto leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}>
        While my featured projects below highlight some of my proudest work,
        they’re just the beginning. I’m always building, experimenting, and
        learning. Many of my other creations—ranging from mini tools to
        full-stack apps—are available on my GitHub. Feel free to explore them
        and see the journey behind the code!
      </p>

      <div>
        <div>
          <motion.div
            className="relative flex flex-row justify-center items-center h-60 mt-30 mb-25 ml-20 mr-20 bg-gradient-to-r from-[#022912] via-[#00613c] to-[#01aa6a]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            <img
              src={movieSite}
              alt="Project Demo"
              className="absolute left-0 w-92 h-70 border-y-[40px] border-x-5 rounded-2xl border-[#075219] object-cover ml-9"
            />
            <div className=" text-center md:text-left w-3/6 ml-84 mt-10 mb-10">
              <h2 className="text-white text-2xl font-bold mb-2">
                Movie World
              </h2>
              <p className="text-white/80 italic text-base mb-6">
                Interactive movie site with search and filter features.
              </p>
              <button
                className="bg-[#0141aa] hover:bg-[#00190e] text-white text-sm font-semibold px-5 py-3 rounded-full transition"
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

          <motion.div
            className="relative flex flex-row justify-between items-center h-60 mt-10 mb-25 mx-20 px-10 bg-gradient-to-r from-[#245c7a] via-[#003b81] to-[#000e30]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            <div className="w-1/2 text-left space-y-4">
              <h2 className="text-white text-3xl font-bold">
                Pharmacy Management System
              </h2>
              <p className="text-white/80 italic text-base">
                Full-stack system managing pharmacy inventory, sales, and
                customer orders
              </p>
              <button
                className="bg-[#002718] hover:bg-[#00190e] text-white text-sm font-semibold px-5 py-3 rounded-full transition"
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
              className="absolute right-0 w-92 h-70 border-y-[40px] border-x-5 rounded-2xl border-[#002b92] object-cover mr-9"
            />
          </motion.div>

          <motion.div
            className="relative flex flex-row justify-center items-center h-60 mt-10 mb-30 ml-20 mr-20 bg-gradient-to-r from-[#004040] via-[#008484] to-[#00c3c3]"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "500" }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            <img
              src={biofilm}
              alt="Project Demo"
              className="absolute left-0 w-92 h-70 border-y-[40px] border-x-5 rounded-2xl border-[#01aaaa] object-cover ml-9"
            />
            <div className=" text-center md:text-left w-3/6 ml-84 mt-10 mb-10">
              <h2 className="text-white text-2xl font-bold mb-2">Biofilm</h2>
              <p className="text-white/80 italic text-base mb-6">
                Modern fertilizer site showcasing products and benefits
              </p>
              <button
                className="bg-[#12b34a] hover:bg-[#00190e] text-white text-sm font-semibold px-5 py-3 rounded-full transition"
                onClick={() => window.open("https://biofilm.lk/", "_blank")}
              >
                Visit Site &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
