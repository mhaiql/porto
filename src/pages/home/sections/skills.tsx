import * as React from "react";
import SkillsTab from "../../../components/SkillsTab";

interface ISkillsProps {}

const Skills: React.FunctionComponent<ISkillsProps> = () => {
  return (
    <div className="bg-orange-400 px-12 py-8 md:px-48">
      <div>
        <SkillsTab />
      </div>
    </div>
  );
};

export default Skills;
