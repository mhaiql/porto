import * as React from "react";
import Tabs from "../Tabs";
import Card from "antd/es/card/Card";
interface ISkillsTabProps {}

const tabsData = [
  {
    title: "Frontend",
    content: "html,css,js,ts,tailwind,react,nodejs,vite",
  },
  {
    title: "Tools",
    content: "git,github,figma,postman,npm,yarn,vscode,docker,ps,pr,xd",
  },
];

const SkillsTab: React.FunctionComponent<ISkillsTabProps> = () => {
  return (
    <section title="my-skill" className="lg:mt-28">
      <Tabs
        title="My Expertise"
        tabs={tabsData.map((tab) => ({
          title: tab.title,
          content: (
            <Card className="bg-[#F6F3EE]">
              <p className="flex justify-center items-center py-8">
                <a href="https://skillicons.dev">
                  <img
                    src={`https://skillicons.dev/icons?i=${tab.content}`}
                    className="mr-4"
                  />
                </a>
              </p>
            </Card>
          ),
        }))}
      />
    </section>
  );
};

export default SkillsTab;
