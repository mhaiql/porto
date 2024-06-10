import * as React from "react";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <div className="md:flex md:h-screen mb-40 bg-[#036147] px-12 py-16 md:px-48 md:pt-32 gap-16">
      <div className="flex md:w-1/3 bg-white h-96 rounded-3xl overflow-hidden">
        <img
          alt="guy"
          src={
            new URL("../../../assets/img/alex_turner.jpeg", import.meta.url)
              .href
          }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 mt-8 md:pt-0">
        <h1 className="text-6xl font-bold text-pink-300">About Me</h1>
        <h1 className=" mt-6 text-2xl font-semibold text-[#F6F3EE]">
          The full name is Muhammad Haiqal. Turning 23 years old this year, and
          still constantly exploring new things and experiences.
        </h1>
        <h1 className=" mt-6 text-2xl font-semibold text-[#F6F3EE]">
          By day, I'm hustling on my work and responsibilities as an employee,
          but by night, you might catch me roaming on your favorite online game.
          And on the weekends, sleeping, mostly, or strumming my electric guitar
          for 4 hours straight.
        </h1>
      </div>
    </div>
  );
};

export default About;
