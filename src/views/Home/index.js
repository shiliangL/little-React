

import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { fetchHot } from '@/api/index.js';
import { NavLink } from "react-router-dom";

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataList: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    console.log('x')
    fetchHot().then(({ result }) => {
      console.log(result)
      this.setState({ dataList: result })
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    const { dataList } = this.state
    return (
      <div>
        <Scrollbars
          autoHeight
          autoHeightMin={400}
          autoHeightMax={450}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
        <div className="panel clearfix">
          {
            dataList.map((item) => {
            return <div className="card" key={item.id}>
              <div className="album-img">
                <NavLink to={`/pageDetail/${item.id}`}>
                  <img src={item.picUrl} alt="" />
                </NavLink>
              </div>
              <p className="title"> { item.name }</p>
              <p className="creator"> {item.copywriter}</p>
            </div>
            })
          }
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default Home;
