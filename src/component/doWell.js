import React, { Component } from 'react'

class DoWell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : 'shiliang'
    }
  }

  componentDidMount(){
    console.log(this.props);

  }

  sonFn(){
    console.log('儿子');
    this.props.onChange(this.state.name)
  }

  render(){
    return <div>
    <button onClick={this.sonFn.bind(this)}>
      <span className='like-text'>{this.props.text}</span>
       <span>饿</span>
    </button>
  </div>
  }
}

export default DoWell
