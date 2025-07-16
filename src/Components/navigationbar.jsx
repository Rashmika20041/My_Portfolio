import { Link } from "react-scroll";

const NavigationBar = () => {
  return (
    <nav className="bg-transparent p-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold select-none">Portfolio.</h1>
        <ul className="flex space-x-8  text-xl font-semibold mr-8">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={20}
              className="text-white hover:text-[#04AA6D] cursor-pointer select-none"
            >
              Behind The Code
            </Link>
          </li>
          <li>
            <Link
              to="toolbox"
              smooth={true}
              duration={800}
              offset={-90}
              className="text-white hover:text-[#04AA6D] cursor-pointer select-none"
            >
              Toolbox
            </Link>
          </li>
          <li>
            <Link
              to="Devfolio"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-white hover:text-[#04AA6D] cursor-pointer select-none"
            >
              Devfolio
            </Link>
          </li>
          <li>
            <Link
              to="Recognitions"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-white hover:text-[#04AA6D] cursor-pointer select-none"
            >
              Recognitions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavigationBar;
