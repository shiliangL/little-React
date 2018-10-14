import React, { Component } from 'react';
import ListPage from '@/components/ListPage'
import { songDetail } from '@/api/index.js';

class PageDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resultData: null
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params
    if (!id) return
    // this.props.history.goBack()
    console.log(this.props)
    this.fetchDetail(id)
  }

  fetchDetail( id ){
    songDetail({ id }).then(({ playlist})=>{
      this.setState({ resultData: playlist })
    }).catch(e=>{
      console.log(e)
    })
  }



  render() {
    const { resultData } = this.state

    const page = (data)=>{
      return <div>
      <div className="page_Header">
        <div className="cover_img">
          <img src={data.coverImgUrl} alt="" /> 
        </div>
        <div className="cover_right">
          <p className="title"> {data.name} </p>
          <p className="description"> {data.description} </p>

          <div className="description">
            <div className="tag">
              标签: { [data.tags] }
            </div>

          </div>
        </div>
      </div>
      <ListPage data={ data.tracks } />
      </div>
    }
    return (
      <div className="PageDetail">
        {
          resultData ? page(resultData) : '加载中....'
        }
        {/* <div className="pageHeader"></div>
        <div className="pageHeader"></div>
        <div className="pageHeader"></div>
        <div className="pageHeader"></div>
        <div className="pageHeader"></div> */}
      </div>
    );
  }
}

export default PageDetail;