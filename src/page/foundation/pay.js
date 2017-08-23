import React, { Component } from 'react';

class TableContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount(){

  }

  loadData() {
    React.$http.get('http://marketing/api/OrgPayment/findBycontion', null, (response, status) => {
      console.log(response);
      if (status && response.data.resultCode === 0) {
      } else {
        console.log(response);
      }
    })
  }

  render(){
    return <div>
      价格属性
    </div>
  }
}

export default TableContent
