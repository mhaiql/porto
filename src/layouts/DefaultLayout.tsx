import * as React from "react";
import Navbar from "../components/Navbar";

interface IDefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<IDefaultLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default DefaultLayout;
