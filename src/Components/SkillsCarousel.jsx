import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tailwind from "./assets/Tailwind CSS.png";
import python from "./assets/Python.png";
import CSharp from "./assets/CSharp.png";
import { GrMysql } from "react-icons/gr";
import { SiSpring } from "react-icons/si";
import {
  FaReact,
  FaGithub,
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaJava,
} from "react-icons/fa";

const skills = [
  {
    name: "Tailwind CSS",
    icon: (
      <img
        src={tailwind}
        alt="Tailwind CSS"
        className="w-10 h-10 md:w-20 md:h-20 object-contain"
      />
    ),
    description:
      "I am skilled in Tailwind CSS, a utility-first framework that helps me build fast, responsive, and modern user interfaces. Using Tailwind’s ready-made utility classes, I create clean designs without writing much custom CSS. I efficiently handle responsive layouts, spacing, and styling variations for different screen sizes. I also integrate Tailwind with React to develop interactive, visually appealing web apps. My experience includes customizing Tailwind’s config and building reusable components for maintainable projec",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl md:text-7xl" />,
    description:
      "I am proficient in React, a powerful JavaScript library for building dynamic and responsive user interfaces. I create reusable components and manage state efficiently to build scalable web applications. With React’s virtual DOM, I optimize rendering performance and deliver smooth user experiences. I also integrate React with modern tools like hooks, context API, and third-party libraries to enhance functionality. My experience includes building single-page applications, handling routing, and connecting front-end with APIs for seamless data flow",
  },
  {
    name: "JAVA",
    icon: <FaJava className="text-orange-500 text-3xl md:text-7xl" />,
    description:
      "I am skilled in Java, a versatile and widely-used programming language known for its portability and robustness. I use Java to build reliable, high-performance applications ranging from desktop software to web backends. My experience includes object-oriented programming principles, exception handling, and working with Java frameworks like Spring Boot. I am comfortable with writing clean, maintainable code and implementing data structures and algorithms. Additionally, I integrate Java applications with databases to create efficient, scalable solutions",
  },
  {
    name: "Spring Boot",
    icon: <SiSpring className="text-green-500 text-3xl md:text-7xl" />,
    description:
      "I am experienced in Spring Boot, a powerful Java framework that simplifies building production-ready backend applications. Using Spring Boot, I rapidly develop RESTful APIs, microservices, and web applications with minimal configuration. I leverage its features like auto-configuration, embedded servers, and starter dependencies to speed up development. My skills include working with Spring Data JPA for database integration, implementing security, and managing application properties. Spring Boot helps me create scalable, maintainable, and efficient server-side solutions",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-200 text-3xl md:text-7xl" />,
    description:
      "I am proficient in Git and GitHub, essential tools for version control and collaborative software development. Using Git, I efficiently track changes, manage branches, and resolve conflicts in codebases. I leverage GitHub for hosting repositories, collaborating with teams through pull requests, code reviews, and issue tracking. These tools enable me to maintain clean, organized project histories, streamline workflows, and contribute to open-source projects. My experience ensures smooth collaboration and reliable code management throughout development cycles",
  },
  {
    name: "Python",
    icon: (
      <img src={python} alt="Python" className="w-10 h-10 md:w-20 md:h-20 object-contain" />
    ),
    description:
      "I am proficient in Python, a versatile and powerful programming language widely used for web development, data analysis, automation, and more. I write clean, efficient code using Python’s simple syntax and vast standard library. My experience includes working with popular frameworks like Django and Flask for building web applications, as well as using libraries for data manipulation and visualization. Python’s flexibility and readability help me quickly prototype solutions and develop scalable, maintainable software",
  },
  {
    name: "C#",
    icon: <img src={CSharp} alt="C#" className="w-10 h-10 md:w-20 md:h-20 object-contain" />,
    description:
      "I am skilled in C#, a modern, object-oriented programming language used primarily for building Windows applications, web services, and game development. I utilize C# with the .NET framework to create robust and scalable applications. My experience includes working with features like LINQ, asynchronous programming, and strong type safety. I’m comfortable building user interfaces with Windows Forms or WPF and developing backend APIs using ASP.NET Core. C# enables me to deliver efficient, maintainable, and high-performance software solutions",
  },
  {
    name: "MySQL",
    icon: <GrMysql className="text-[#F29111] w-8 h-8 md:w-20 md:h-20" />,
    description:
      "I am proficient in MySQL, a widely-used relational database management system. I design and manage databases, write complex queries, and optimize performance for efficient data storage and retrieval. My experience includes creating tables, establishing relationships, and implementing indexing strategies to enhance query speed. I also handle data integrity through constraints and transactions. MySQL’s scalability and reliability make it a key component in building robust applications that require structured data management",
  },
];

export default function SkillsCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % skills.length);
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const leftIndex = (centerIndex - 1 + skills.length) % skills.length;
  const rightIndex = (centerIndex + 1) % skills.length;

  return (
    <div className=" text-white text-center ">
      <style>
        {`
    @keyframes rotateOutline {
      0% {
        box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.99);
      }
      33% {
        box-shadow: 0 0 0 2px rgba(0, 255, 0, 0.99);
      }
      66% {
        box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.99);
      }
      100% {
        box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.99);
      }
    }

    .rgb-outline {
      animation: rotateOutline 2s linear infinite;
     }
    `}
      </style>
      <style>
        {`
        @keyframes rgbTextColor {
        0%   { color: rgb(255, 0, 0); }     /* Red */
        33%  { color: rgb(0, 255, 0); }     /* Green */
        66%  { color: rgb(0, 0, 255); }     /* Blue */
        100% { color: rgb(255, 0, 0); }     /* Red */
        }

        .rgb-text {
         animation: rgbTextColor 3s linear infinite;
        }
     `}
      </style>

      <div className="flex justify-center items-center space-x-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition rgb-outline"
        >
          <FaArrowCircleLeft className="text-2xl md:text-3xl" />
        </button>

        {/* Skill Icons Row */}
        <div className="flex space-x-10 items-center">
          {[leftIndex, centerIndex, rightIndex].map((index, i) => {
            const isCenter = index === centerIndex;
            return (
              <motion.div
                key={skills[index].name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: isCenter ? 1.1 : 0.9,
                  opacity: isCenter ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
                className={`w-15 h-15 md:w-42 md:h-42 flex items-center justify-center rounded-full shadow-md select-none ${
                  isCenter
                    ? "bg-[#04AA6D]/20 ring-2 ring-[#04AA6D]"
                    : "bg-white/5"
                }`}
              >
                {skills[index].icon}
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition rgb-outline"
        >
          <FaArrowCircleRight className="text-2xl md:text-3xl" />
        </button>
      </div>

      {/* Description for center skill */}
      <AnimatePresence mode="wait">
        <motion.div
          key={skills[centerIndex].name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-15 max-w-sm md:max-w-2xl mx-auto bg-white/10 p-6 rounded-lg backdrop-blur-sm"
        >
          <h4
            className="text-2xl font-semibold mt-4 rgb-text select-none"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {skills[centerIndex].name}
          </h4>
          <p
            className="text-sm md:text-base text-gray-400 md:text-gray-400 mt-6 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {skills[centerIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}