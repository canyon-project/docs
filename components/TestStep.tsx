import { Button, Steps } from "antd";
import { AlertOutlined } from "@ant-design/icons";
const IconWrapper = ({ children }:any) => {
    return <div className={'bg-gray-100 rounded-lg flex items-center justify-center h-[28px] w-[28px] mt-1'}>
        {children}
    </div>
}

// <AlertOutlined style={{fontSize: '14px'}} className={'gray-800'}/>

const TestStep = () => {
    return (
        <div className={'ml-3.5 mt-10 mb-6'}>
            <Steps
                direction="vertical"
                current={null}
                items={[
                    {
                        title: "Open-source code",
                        description:
              "Source code is open and auditable. Built with privacy and security in mind.",
                        icon: <IconWrapper>
                            <AlertOutlined style={{fontSize: '14px'}} className={'gray-800'}/>
                        </IconWrapper>,
          },
                    {
                        title: "Open-source code",
                        description:
                            "Source code is open and auditable. Built with privacy and security in mind.",
                        icon: <IconWrapper>
                            <AlertOutlined style={{fontSize: '14px'}} className={'gray-800'}/>
                        </IconWrapper>,
                    },
                    {
                        title: "Open-source code",
                        description:
                            "Source code is open and auditable. Built with privacy and security in mind.",
                        icon: <IconWrapper>
                            <AlertOutlined style={{fontSize: '14px'}} className={'gray-800'}/>
                        </IconWrapper>,
                    },
                    {
                        title: "Open-source code",
                        description:
                            "Source code is open and auditable. Built with privacy and security in mind.",
                        icon: <IconWrapper>
                            <AlertOutlined style={{fontSize: '14px'}} className={'gray-800'}/>
                        </IconWrapper>,
                    },
        ]}
      ></Steps>
    </div>
  );
};

export default TestStep;
