import React, { Component } from 'react'

class DoWell extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    console.log(this.props);
  }

  sonFn(){
    console.log('儿子');
  }

  render(){
    return <div>
    <button onClick={this.sonFn}>
      
      <span className='like-text'>{this.props.text}</span>
       <span>饿</span>
    </button>
  </div>
  }
}

export default DoWell
