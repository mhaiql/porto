import * as React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

interface IExperienceProps {}

const data = [
  {
    key: 1,
    img: "../../../assets/img/satkom.png",
    title: "Junior Software Engineer",
    subtitle: "PT. Satkomindo Mediyasa",
    date: "Jan 2024 - Present",
    status: "Full-time - Contract",
    link: "https://www.linkedin.com/company/pt-satkomindo-mediyasa/mycompany/",
    list_item: [
      {
        text: "Developing legacy projects such as Websites, and Dashboard Apps.",
      },
      {
        text: "Developing internal applications and website to increase company's profile.",
      },
      {
        text: "Continuously improving code quality, product execution and CRM applications.",
      },
      {
        text: "Coordinating with cross-functional teams (Business Dev, DevOps, Data, UI/UX, QA, etc.) on planning and execution.",
      },
      {
        text: "Managing multiple internal and external projects as a Project Manager, consistently communicating with clients and vendors, and overseeing the strategic planning and documentation of these projects.",
      },
    ],
  },
  {
    key: 2,
    img: "../../../assets/img/youthinstem.png",
    title: "Frontend Web Developer Mentor",
    subtitle: "Youth in STEM Indonesia",
    date: "Dec 2023",
    status: "Seasonal",
    link: "https://www.linkedin.com/company/youth-in-stem-indonesia/",
    list_item: [
      {
        text: "Assisted participants on developing their projects",
      },
      {
        text: "Conducted their projects by instructing the project's flow of SDLC",
      },
    ],
  },
  {
    key: 2,
    img: "../../../assets/img/pwc.png",
    title: "Webmaster",
    subtitle: "PwC Indonesia",
    date: "Mar 2023 - Dec 2023",
    status: "Full-time - Internship",
    link: "https://www.linkedin.com/company/pwc_indonesia/",
    list_item: [
      {
        text: "Maintained the PwC Indonesia website and developing new pages for Internal Firm purposes.",
      },
      {
        text: "Published publications into the website, which later will be blasted to clients.",
      },
      {
        text: "Developed and maintained specific request pages for certain events held by PwC Indonesia.",
      },
      {
        text: "Assisted associates in maintaining and updating the internal office's TV Signages",
      },
      {
        text: "Developed Conventional Website Reports monthly and quarterly from all web pages regarding PwC Indonesia's infrastructure news, Press Release, TaxFlash, reports, Events, and overall pages by conducting website monitoring.",
      },
    ],
  },
  {
    key: 2,
    img: "../../../assets/img/default.png",
    title: "Architectural Drafter",
    subtitle: "PT. Bangun Perkasa Permai",
    date: "Sep 2021 - Jan 2023",
    status: "Full-time",
    link: "",
    list_item: [
      {
        text: "Re-scaled the blueprints to the desired scale with minor adjustments using AutoCAD.",
      },
      {
        text: "Gathered additional information that would be used for project purposes with clients.",
      },
      {
        text: "Inspected and re-arranged 3D houses and buildings on SketchUp for taking facade perspectives.",
      },
      {
        text: "Responsible for running the company's email account.",
      },
    ],
  },
];

const Experience: React.FunctionComponent<IExperienceProps> = (props) => {
  return (
    <div className="bg-[#F6F3EE] h-fit w-full py-16 px-6 pb-20 md:px-48 ">
      <div className="pb-8">
        <h1 className="text-center text-6xl font-bold">Experience</h1>
      </div>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <div className="flex flex-row w-full">
                <div className="w-1/5 flex md:justify-center">
                  <Link to={item.link} target="_blank">
                    <div className="md:w-32 md:h-32 h-16 w-16 cursor-pointer hover:border-opacity-100 border-2 border-opacity-0 border-orange-400 duration-100">
                      <img
                        src={new URL(`${item.img}`, import.meta.url).href}
                        alt="image"
                        className="object-cover h-full w-full"
                      ></img>
                    </div>
                  </Link>
                </div>
                <div className="w-4/5 flex flex-col">
                  <h1 className="md:text-2xl text-xl font-semibold">
                    {item.title}
                  </h1>
                  <h1 className="md:text-xl text-lg">{item.subtitle}</h1>
                  <h1>{item.date}</h1>
                  <h1>{item.status}</h1>
                  <ul className="list-disc pl-4 py-4">
                    {item.list_item.map((listItem, index) => (
                      <li key={index} className="text-md">
                        {listItem.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Experience;
