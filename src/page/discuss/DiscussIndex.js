import ComponentInput from './ComponentInput'
import ComponentList from './ComponentList'
import React, { Component } from 'react';
import '../../static/discuss.css'

class DiscussIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listArray: []
    }
  }
  banckInput(n){
    console.log(n);
   
  }
  render(){
    return <div>
    <h3>评论组件</h3>
    <ComponentInput banckInput={this.banckInput.bind(this)} />
    <ComponentList comment={this.state.listArray} / >
  </div>
  }
}

export default DiscussIndex
