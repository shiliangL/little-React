import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import './static/bootstrap.css'
import 'element-theme-default';
import DoWell from './component/doWell'
import RenderList from './component/dateList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '关注',
      data : [
        {
          id: "1",
          name: "微信支付",
          code: null
        }, {
          id: "2",
          name: "支付宝支付",
          code: null
        }, {
          id: "3",
          name: "人民币",
          code: null
        }, {
          id: "4",
          name: "银行转账",
          code: null
        }, {
          id: "5",
          name: "支票",
          code: null
        }
      ]
    }
  }
  handClick(e){
    e.preventDefault()
    this.setState({
      text: this.state.text === '关注' ? '取消' : '关注'
    })
  }

delItem(index){
    this.state.data.splice(index , 1)
    this.setState({data:this.state.data})
  }

render(){
    return <div>
      <RenderList data={this.state.data} delItem={this.delItem.bind(this)}/>
  </div>
  }
}

export default App

// 23 --需要理解  组件之间 事件的关系  给子组件添加事件无法触发 组件数据传递以及 坑位
