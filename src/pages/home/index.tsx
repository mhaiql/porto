import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import FirstSection from "./sections/firstSection";
import About from "./sections/about";
import Education from "./sections/education";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <DefaultLayout>
      <FirstSection />
      <About />
      <Education />
    </DefaultLayout>
  );
};

export default HomePage;
