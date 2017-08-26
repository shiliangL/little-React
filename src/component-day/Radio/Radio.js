import React , { Component } from 'react'


class Radio extends Component {
  static elementType = 'Radio';
  constructor(props:Object) {
    super(props)
    this.state = {
      checked:''
    }
  }



  render() {
    return <label>
    <span>
      <input type="radio" onChange={this.onChange}/>

    </span>
    组件
  </label>
  }
}

export default Radio
