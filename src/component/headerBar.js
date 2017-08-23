import React, { Component } from 'react';
class HaeaderBar extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return <div className="HeaderBar">
      <div className="HeaderBar_mc">{this.props.title}</div>
    </div>
  }
}

export default HaeaderBar
