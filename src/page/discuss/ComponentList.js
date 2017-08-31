import React, { Component } from 'react';

class ComponentList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
      </div>
  }

}

export default ComponentList
