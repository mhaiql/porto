import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import FirstSection from "./sections/firstSection";
import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Skills from "./sections/skills";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <DefaultLayout>
      <FirstSection />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
