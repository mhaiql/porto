import * as React from "react";
import { Card } from "antd";
import "./styles2.css";

interface IEducationProps {}

const Education: React.FunctionComponent<IEducationProps> = () => {
  const data = [
    {
      img: "../../../assets/img/C.png",
      title: "Software Engineering",
      subtitle: "CCIT University of Indonesia",
      year: "2019-2021",
      gpa: "3,43 / 4,0",
    },
    {
      img: "../../../assets/img/BINAR.png",
      title: "Full-Stack Web Development",
      subtitle: "Binar Academy Bootcamp",
      year: "2022-2023",
      gpa: "Wave 27",
    },
    {
      img: "../../../assets/img/sma85.png",
      title: "Social Science",
      subtitle: "SMA Negeri 85 Jakarta",
      year: "2016-2019",
      gpa: null,
    },
  ];

  return (
    <div>
      <div className="px-12 pb-20 md:px-48 md:pt-10 bg-[#036147]">
        <div className="pb-8">
          <h1 className="text-center text-6xl font-bold text-pink-300">
            Education
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {data?.map((item: any) => (
            <Card className="flex-grow md:h-[500px] h-[450px] bg-[#F6F3EE] rounded-3xl border-4 border-black">
              <div className="rounded-t-3xl md:h-72 md:w-72 overflow-hidden">
                <img
                  src={new URL(`${item.img}`, import.meta.url).href}
                  alt="image"
                  className="object-cover h-full w-full"
                ></img>
              </div>
              <h1 className="text-xl pt-4 font-semibold">{item.title}</h1>
              <h1 className="text-md">{item.subtitle}</h1>
              <h1 className="text-md">{item.year}</h1>
              <h1 className="text-md">{item.gpa}</h1>
            </Card>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="custom-shape-divider-bottom-1718167354">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Education;
