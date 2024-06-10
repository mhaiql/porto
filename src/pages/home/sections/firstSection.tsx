import * as React from "react";
import { DownloadOutlined } from "@ant-design/icons";

interface IFirstSectionProps {}

const FirstSection: React.FunctionComponent<IFirstSectionProps> = () => {
  return (
    <div className="flex h-screen bg-[#F6F3EE] px-48 py-48">
      <div className="">
        <h1 className="text-9xl font-bold">Hello,</h1>
        <h1 className="text-9xl font-bold">I'm Haiqal.</h1>
        <h1 className="text-xl pt-4">
          I am a{" "}
          <span className="bg-[#036147] w-fit py-1 px-2 text-[#F6F3EE]">
            Website Devloper
          </span>{" "}
          from Jakarta.
        </h1>
        <h1 className="text-xl pt-2 w-2/3 leading-9">
          Check out my{" "}
          <span className=" cursor-pointer underline">Portfolio</span>, visit my{" "}
          <span className="cursor-pointer underline">linkedin</span>, or just{" "}
          <span className="cursor-pointer underline">send me an email</span>{" "}
          saying hi
        </h1>
        <div className="mt-4 bg-orange-400 hover:bg-orange-500 duration-150 cursor-pointer  py-2 px-6 w-fit">
          <p className="font-semibold text-white">
            DOWNLOAD CV <DownloadOutlined />
          </p>
        </div>
      </div>
      <div>
        <img
          alt="hello"
          src={
            new URL("../../../assets/img/hello_snail.png", import.meta.url).href
          }
          className="w-full h-full ml-8"
        />
      </div>
    </div>
  );
};

export default FirstSection;
