import React, { Component } from 'react';

class ListPage extends Component {
  render() {
    const { data, clickRow } = this.props
    return <div className="ListPage">
      {
        data.map((item, index) => {
          return <li key={index} className="item" onClick={() => clickRow(item, index) }>
            <div> {index+1} - {item.name}</div>
            <div>{item.name}</div>
            <div>{item.publishTime}</div>
            {/* <div>{item.al.name}</div> */}
          </li>
        })
      }
    </div>
  }
}

export default ListPage;


