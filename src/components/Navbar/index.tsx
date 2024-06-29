import React, { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  MenuOutlined,
  CloseOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import cv from "../../assets/files/Muhammad Haiqal-CV.pdf";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  // const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-[#F6F3EE] px-4 sm:px-24 fixed top-0 w-full z-50 py-3 md:py-0 ${
        scrolled ? "shadow-sm duration-200" : ""
      }`}
    >
      <div className="flex items-center justify-between py-4">
        <div className="hidden md:flex flex-row items-center space-x-5">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className=" font-semibold cursor-pointer"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className=" font-semibold cursor-pointer"
          >
            SKILLS
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            className=" font-semibold cursor-pointer"
          >
            EDUCATION
          </ScrollLink>

          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className=" font-semibold cursor-pointer"
          >
            EXPERIENCE
          </ScrollLink>
        </div>
        <div className="hidden md:flex gap-6">
          <div className=" bg-transparent border-blue-500 border-2 cursor-pointer hover:-translate-y-1 duration-200 py-1 px-6">
            <a href={cv} download="CV-Muhammad Haiqal.pdf">
              <p className="font-semibold text-blue-500">
                DOWNLOAD CV <DownloadOutlined />
              </p>
            </a>
          </div>
          <div className=" bg-blue-500 cursor-pointer py-1 px-10 hover:-translate-y-1 duration-200">
            <p className="font-semibold text-white">CONTACT ME</p>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="px-4 rounded text-gray-700 visible fixed right-0"
          >
            <MenuOutlined />
          </button>
        </div>
        <div
          ref={sidebarRef}
          className={`md:hidden fixed inset-y-0 right-0 transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } w-64 bg-white p-4 transition duration-300 ease-in-out md:hidden border rounded text-gray-700 border-gray-400`}
        >
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            <CloseOutlined />
          </button>
          <div className="mt-8  ">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block px-3 py-4 text-xl"
            >
              ABOUT
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="block px-3 pt-4 pb-8 text-xl"
            >
              EXPERIENCE
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              className="block px-3 pt-4 pb-8 text-xl"
            >
              EDUCATION
            </ScrollLink>
            <ScrollLink
              to={"/"}
              smooth={true}
              duration={500}
              className="block px-3 pt-4 pb-8 text-xl"
            >
              <a href={cv} download="CV-Muhammad Haiqal.pdf">
                <p className="font-semibold text-blue-500">DOWNLOAD CV</p>
              </a>
            </ScrollLink>
            <ScrollLink
              to={"/"}
              smooth={true}
              duration={500}
              className="block px-3 pt-4 pb-8 text-xl"
            >
              CONTACT ME
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
