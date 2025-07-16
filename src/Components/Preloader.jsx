import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.h1
        className="text-white text-7xl font-bold"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
