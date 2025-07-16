import bg from "./assets/background.png";
import bg2 from "./assets/background2.jpg";
import NavigationBar from "./navigationbar";
import About from "./About";
import Skills from "./skills";
import Project from "./projects";
import Footer from "./footer";
import Social from "./social";
import Recognitions from "./recognitions";
import { Typewriter } from "react-simple-typewriter";
import { ImOffice } from "react-icons/im";

const Dashboard = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center h-screen bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <NavigationBar />
        <div className="flex flex-col justify-center text-center h-screen items-center ">
          <h1
            className="text-white text-7xl font-bold mt-[-150px] mb-10 select-none"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Rashmika Perera
          </h1>

          <h2 className="text-white text-4xl font-semibold mb-5">
            I'm a{" "}
            <span
              style={{ color: "#04AA6D", fontFamily: "'Poppins', sans-serif" }}
            >
              <Typewriter
                words={["Software Engineer","Full Stack Developer","Mobile Developer", "Creative Thinker", "Designer"]}
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
      <div className="bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bg2})` }}>
        <About />
        <Skills />
        <Project />
        <Recognitions />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
