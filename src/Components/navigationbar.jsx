import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-transparent p-8 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold select-none">Portfolio.</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-xl font-semibold mr-8">
          {["about", "toolbox", "Devfolio", "Recognitions"].map((item, i) => (
            <li key={i}>
              <Link
                to={item}
                smooth={true}
                duration={800}
                offset={item === "about" ? 20 : -80}
                className="text-white hover:text-[#04AA6D] cursor-pointer select-none"
              >
                {item === "about"
                  ? "Behind The Code"
                  : item === "toolbox"
                  ? "Toolbox"
                  : item === "Devfolio"
                  ? "Devfolio"
                  : "Recognitions"}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#111] p-8 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col mt-10 space-y-6 text-white text-lg font-semibold">
          <IoClose className="sm:right-8 right-9 top-9 text-3xl absolute cursor-pointer" onClick={closeMenu} />
          {["about", "toolbox", "Devfolio", "Recognitions"].map((item, i) => (
            <li key={i}>
              <Link
                to={item}
                smooth={true}
                duration={800}
                offset={item === "about" ? 20 : -80}
                onClick={closeMenu}
                className="hover:text-[#04AA6D] cursor-pointer select-none"
              >
                {item === "about"
                  ? "Behind The Code"
                  : item === "toolbox"
                  ? "Toolbox"
                  : item === "Devfolio"
                  ? "Devfolio"
                  : "Recognitions"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
