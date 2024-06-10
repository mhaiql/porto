import * as React from "react";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <div className="flex h-screen mb-40 bg-[#036147] px-48 pt-32">
      <div className="flex bg-white h-96 w-80 rounded-3xl overflow-hidden">
        <img
          src="https://source.unsplash.com/1080x1920?man"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1>HELLO</h1>
      </div>
    </div>
  );
};

export default About;
