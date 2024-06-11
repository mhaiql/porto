import * as React from "react";
import { Card } from "antd";

interface IEducationProps {}

const Education: React.FunctionComponent<IEducationProps> = (props) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <h1>TITLE</h1>
      </Card>
    </div>
  );
};

export default Education;
