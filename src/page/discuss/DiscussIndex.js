import ComponentInput from './ComponentInput'
import ComponentList from './ComponentList'
import React, { Component } from 'react';
import '../../static/discuss.css'

class DiscussIndex extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return <div>
    <h3>评论组件</h3>
    <ComponentInput />
    <ComponentList / >
  </div>
  }
}

export default DiscussIndex
