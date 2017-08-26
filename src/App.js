import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.scss';
import './static/bootstrap.css'
import 'element-theme-default';
import DoWell from './component/doWell'
import RenderList from './component/dateList'

//组件 第一天
import Radio from './component-day/Radio/Radio'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
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

delItem(index){
    this.state.data.splice(index , 1)
    this.setState({data:this.state.data})
  }

onChange(value){

}

render(){
    return <div>
    <Radio checked={this.state.value === 1} onChange={this.onChange.bind(this)}> 备选项 </Radio>
    <RenderList data={this.state.data} delItem={this.delItem.bind(this)}/>
  </div>
  }
}

export default App

// 23 --需要理解  组件之间 事件的关系  给子组件添加事件无法触发 组件数据传递以及 坑位
