

import React, { Component } from 'react';
import { List, InputItem, Flex, Button} from 'antd-mobile';

class Login extends Component {

  render() {
    return (
      <div>
       <List renderHeader={() => '欢迎光临'}>
          <InputItem placeholder="">
            名称
          </InputItem>
          <InputItem placeholder="">
            密码
          </InputItem>
        </List>

        <Flex style={{ marginTop: '10px' }}>
          <Flex.Item>
            <Button size="small" type="primary">登录</Button>
          </Flex.Item>
          <Flex.Item>
            <Button size="small">注册</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default Login;
