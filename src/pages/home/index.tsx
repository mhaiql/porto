import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import FirstSection from "./sections/firstSection";
import About from "./sections/about";
import Education from "./sections/education";
import Experience from "./sections/experience";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <DefaultLayout>
      <FirstSection />
      <About />
      <Education />
      <Experience />
    </DefaultLayout>
  );
};

export default HomePage;
