import * as React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import FirstSection from "./sections/firstSection";
import About from "./sections/about";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <DefaultLayout>
      <FirstSection />
      <About />
    </DefaultLayout>
  );
};

export default HomePage;
