import React, { Component } from 'react'

class ComputerApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: 'on',
      text: '显示器关了',
      style:{
        width:200,
        height: 100,
        backgroundColor:'rgb(35, 183, 229)'
      }
    }
  }
  handleClick(status){
     console.log(status);
     let bb = status === 'on' ? 'off' : 'on'
     this.setState({
       status: bb
     })
  }
  showSC(status){
    console.log(status);
    let bb = status === '显示器关了' ? '显示开启' : '显示器关了'
    this.setState({
      text: bb
    })
  }
  render() {
    return <div>
    <SwitchBnt handleClick={this.handleClick.bind(this)} status={this.state.status}/>
    <Screen style={this.state.style} text={this.state.text}/>
  </div>
  }
}

//开关
class SwitchBnt extends Component {
  goOut(){
    this.props.handleClick(this.props.status)
  }
  render() {
    return <button onClick={this.goOut.bind(this)}>{this.props.status}</button>
  }
}

//屏幕
class Screen extends Component {
  constructor(props){
      super(props)
      this.state = {
          content:'无内容'
      }
    }
  render() {
    return <div style={this.props.style}>
    {this.props.text ? this.props.text: this.state.content}
  </div>
  }
}




export default ComputerApp
