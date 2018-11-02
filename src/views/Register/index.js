

import React, { Component } from 'react';
import { List, InputItem, Flex, Button, Radio } from 'antd-mobile';

class Register extends Component {

  render() {
    return (
      <div>
       <List renderHeader={() => '欢迎注册页'}>
          <InputItem placeholder="">
            名称
          </InputItem>
          <InputItem placeholder="">
            密码
          </InputItem>

          <Flex style={{ padding: '15px' }}>
            <Flex.Item>
              <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>个人</Radio>
            </Flex.Item>
            <Flex.Item>
              <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>企业</Radio>
            </Flex.Item>
          </Flex>
        </List>

        <Flex style={{ marginTop: '10px' }}>
          <Flex.Item>
            <Button size="small" type="primary">注册</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default Register;
