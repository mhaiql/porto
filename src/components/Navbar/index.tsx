import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MenuOutlined,
  CloseOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  return (
    <div className="bg-[#F6F3EE] px-4 sm:px-24 fixed top-0 w-full">
      <div className="flex items-center justify-between py-4">
        <div className="hidden md:flex flex-row items-center space-x-5">
          <Link to={""} className=" font-semibold">
            ABOUT
          </Link>

          <Link to={"/"} className=" font-semibold">
            EXPERIENCE
          </Link>
          <Link to={"/"} className=" font-semibold">
            PROJECTS
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <div className=" bg-transparent border-blue-500 border-2 cursor-pointer hover:-translate-y-1 duration-200 py-1 px-6">
            <p className="font-semibold text-blue-500">
              DOWNLOAD CV <DownloadOutlined />
            </p>
          </div>
          <div className=" bg-blue-500 cursor-pointer py-1 px-10 hover:-translate-y-1 duration-200">
            <p className="font-semibold text-white">CONTACT ME</p>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="px-4 py-2 rounded text-gray-700 visible fixed right-0"
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
            <Link to={"/"} className="block px-3 py-4 text-xl">
              ABOUT
            </Link>
            <Link to={"/"} className="block px-3 pt-4 pb-8 text-xl">
              EXPERIENCE
            </Link>
            <Link to={"/"} className="block px-3 pt-4 pb-8 text-xl">
              PROJECTS
            </Link>
            <Link to={"/"} className="block px-3 pt-4 pb-8 text-xl">
              DOWNLOAD CV
            </Link>
            <Link to={"/"} className="block px-3 pt-4 pb-8 text-xl">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
