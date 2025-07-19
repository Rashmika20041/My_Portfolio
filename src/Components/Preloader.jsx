import { motion } from "framer-motion";

const Preloader = () => {
  const text = "Welcome to My Portfolio";
  const letters = text.split("");

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.0, duration: 0.5 }}
    >
      <motion.h1
        className="text-white text-3xl sm:text-6xl md:text-9xl font-bold flex space-x-1 select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              repeat: 1,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
