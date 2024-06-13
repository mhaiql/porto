import React, { ReactNode, useState } from "react";
import TabsHead from "./TabsHead";
import TabsBody from "./TabsBody";

interface ITabsProps {
  title: string;
  tabs: { title: string; content: ReactNode }[];
}

const Tabs: React.FunctionComponent<ITabsProps> = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].title);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className=" flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
        {title}
      </h2>
      <TabsHead
        tabs={tabs.map((tab) => tab.title)}
        activeTab={activeTab}
        onClick={handleClick}
      />
      <TabsBody tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
