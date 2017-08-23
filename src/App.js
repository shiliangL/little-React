import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import './static/bootstrap.css'
import 'element-theme-default';
import DoWell from './component/doWell'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '关注',
      sb : 'xxx'
    }
  }
  handClick(e){
    e.preventDefault()
    this.setState({
      text: this.state.text === '关注' ? '取消' : '关注'
    })
  }

  testFn(sb){
    console.log('xxx');
  }

  render(){
    return <div>
    <button onClick={this.handClick.bind(this)}>{this.state.text} 观察 </button>
    <DoWell text={this.state.text} onChange={this.testFn} />
  </div>
  }
}

export default App

// 23 --需要理解  组件之间 事件的关系  给子组件添加事件无法触发
