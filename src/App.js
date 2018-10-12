import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import '@/styles/App.scss';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Scrollbars autoHeight>
        <div className="content"> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
          <h1> 测试 </h1> 
        </div>
      </Scrollbars>
      </div>
    );
  }
}

export default App;
