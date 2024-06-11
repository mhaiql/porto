import * as React from "react";
import "./styles.css";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <div>
      <div className="custom-shape-divider-bottom-1718076568">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
            The full name is Muhammad Haiqal. Turning 23 years old this year,
            and still constantly exploring new things and experiences.
          </h1>
          <h1 className=" mt-6 text-2xl font-semibold text-[#F6F3EE]">
            By day, I'm hustling on my work and responsibilities as an employee,
            but by night, you might catch me roaming on your favorite online
            game. And on the weekends, sleeping, mostly, or strumming my
            electric guitar for 4 hours straight.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
