import { motion, useMotionValue, useTransform } from "framer-motion";
import projects from "./projects";

const Projects = () => {
  return (
    <div className="py-12">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center h-full text-white mb-12">
        <h1 className="sm:text-sm md:text-lg text-gray-400">Ideas Brought to Life</h1>

        <div className="relative inline-block mb-13 mt-4 md:w-[700px]">
          <h1 id="Devfolio" className="text-4xl md:text-5xl font-bold text-center">
            Crafted With <span className="text-[#04AA6D]">Passion</span>
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

        <p className="text-gray-400 italic text-sm md:text-lg mt-14 mb-15 max-w-lg px-6 md:max-w-5xl mx-auto">
          Some of my projects, built with dedication and creativity. Explore and see the magic in action!
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20">
        {projects.map((proj, index) => {
          // Motion values for cursor tracking
          const x = useMotionValue(0);
          const y = useMotionValue(0);

          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.clientX - rect.left - rect.width / 2;
            const offsetY = e.clientY - rect.top - rect.height / 2;

            x.set(offsetX * 0.1); // adjust factor for subtle movement
            y.set(offsetY * 0.1);
          };

          const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
          };

          return (
            <motion.div
              key={index}
              className="relative group bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              style={{ x, y }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{proj.title}</h2>
                <p className="text-gray-300 italic text-sm md:text-base mb-4 text-center">{proj.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm bg-[#04AA6D] px-2 py-1 rounded-full text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(proj.link, "_blank")}
                  className="bg-[#04AA6D] hover:bg-[#038f5c] text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                >
                  Visit Project &rarr;
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
