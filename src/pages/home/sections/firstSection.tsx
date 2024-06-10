import * as React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import cv from "../../../assets/files/Muhammad Haiqal-CV.pdf";

interface IFirstSectionProps {}

const FirstSection: React.FunctionComponent<IFirstSectionProps> = () => {
  return (
    <div className="flex h-screen bg-[#F6F3EE] px-12 py-16 md:px-48 md:py-48">
      <div className="">
        <h1 className="text-6xl font-bold">Hello,</h1>
        <h1 className="text-6xl font-bold">I'm</h1>
        <h1 className="text-8xl md:text-9xl font-bold">Haiqal.</h1>
        <h1 className="text-xl pt-8">
          I am a{" "}
          <span className="bg-[#036147] w-fit py-1 px-2 text-[#F6F3EE]">
            Website Devloper
          </span>{" "}
          from Jakarta.
        </h1>
        <h1 className="text-xl pt-2 md:w-2/3 leading-9">
          Check out my{" "}
          <Link
            to="https://drive.google.com/file/d/11bMxe2Uirl_RdPfzHPpHTYEn5Upk0-o_/view?usp=drive_link"
            target="_blank"
          >
            <span className=" cursor-pointer underline">portfolio</span>, visit
            my{" "}
          </Link>
          <Link to="https://www.linkedin.com/in/mhaiql/" target="_blankz">
            <span className="cursor-pointer underline">linkedin</span>
          </Link>
          , or just{" "}
          <a href="mailto:haiqal.muhammadd50@gmail.com?subject=Hello%20Haiqal!">
            <span className="cursor-pointer underline">send me an email</span>{" "}
          </a>
          saying hi.
        </h1>
        <a href={cv} download="CV-Muhammad Haiqal.pdf">
          <div className="mt-4 bg-orange-400 hover:bg-orange-500 duration-150 cursor-pointer  py-2 px-6 w-fit">
            <p className="font-semibold text-white">
              DOWNLOAD CV <DownloadOutlined />
            </p>
          </div>
        </a>
      </div>
      <div>
        <img
          alt="hello"
          src={
            new URL("../../../assets/img/hello_snail.png", import.meta.url).href
          }
          className="w-full h-full ml-8 hidden md:block"
        />
      </div>
    </div>
  );
};

export default FirstSection;
