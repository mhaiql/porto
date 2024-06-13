import * as React from "react";

interface ITabsheadProps {
  tabs: string[];
  activeTab: string;
  onClick: (tab: string) => void;
}

const TabsHead: React.FunctionComponent<ITabsheadProps> = ({
  tabs,
  activeTab,
  onClick,
}) => {
  return (
    <ul className="flex mx-auto md:gap-10 gap-3 py-3">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`cursor-pointer md:text-xl text-sm hover:text-violet-400 ${
            tab === activeTab ? "text-violet-500" : ""
          }`}
          onClick={() => onClick(tab)}
        >
          {tab}
          <div
            className={`bg-violet-500 h-0.5 w-[70%] mx-auto ${
              tab === activeTab ? "block" : "hidden hover:block"
            }`}
          ></div>
        </li>
      ))}
    </ul>
  );
};

export default TabsHead;
