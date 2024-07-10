import { Button, Result } from 'antd';

function NoMatch(props) {

    return(
        <Result
            status="404"
            title="404"
            subTitle="对不起, 您访问的页面不存在."
            extra={
                <Button type="primary" onClick={() => props.history.push('/home')}>
                    返回首页
                </Button>
            }
        />
    )
}

export default NoMatch