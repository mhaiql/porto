import React, { ReactNode } from "react";

interface ITabsBodyProps {
  tabs: { title: string; content: ReactNode }[];
  activeTab: string;
}

const TabsBody: React.FunctionComponent<ITabsBodyProps> = ({
  tabs,
  activeTab,
}) => {
  return (
    <div>
      {tabs.map(({ title, content }, index) => (
        <div
          key={index}
          className={title === activeTab ? "block mx-100" : "hidden"}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default TabsBody;
