import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import './static/bootstrap.css'
import 'element-theme-default';
import DoWell from './component/doWell'
import RenderList from './component/dateList'
import ComputerApp from './component/Shutdown'

import DiscussIndex from '../src/page/discuss/DiscussIndex'

//组件 第一天
import Radio from './component-day/Radio/Radio'

class App extends Component {
  constructor(props) {
    super(props)

  }
render(){
    return <div>
    <DiscussIndex />
  </div>
  }
}

export default App

// 23 --需要理解  组件之间 事件的关系  给子组件添加事件无法触发 组件数据传递以及 坑位
