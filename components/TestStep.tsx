import { Button,Steps } from 'antd';
import { AlertOutlined } from '@ant-design/icons';


const TestStep = () => {
    return <div>
        <Button type={'primary'}>
            你好
        </Button>
        <Steps
            direction="vertical"
            current={null}
            items={[
                {
                    title: 'Open-source code',
                    description:'Source code is open and auditable. Built with privacy and security in mind.',
                    icon:<AlertOutlined />
                },
                {
                    title: 'Cross-platform apps',
                    description:'Works on Web, Mac, Windows, Linux, and CLI. No installation is required.',
                    icon:<AlertOutlined />
                },
                {
                    title: 'Open-source code',
                    description:'Source code is open and auditable. Built with privacy and security in mind.',
                    icon:<AlertOutlined />
                },
                {
                    title: 'Cross-platform apps',
                    description:'Works on Web, Mac, Windows, Linux, and CLI. No installation is required.',
                    icon:<AlertOutlined />
                },
            ]}
        >
        </Steps>
    </div>
}

export default TestStep;