import React, { Component } from 'react';
import AudioPlayer from '@/components/AudioPlayer'
import '@/styles/App.scss';
import { Row, Col } from "antd";
import { fetchNewSong, fetchMusic } from '@/api/index.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSong: 0,
      dataList: [],
      picUrl: null,
      url: null
    }
  }

  fetchList() {
    fetchNewSong().then(({ result }) => {
      this.setState({ dataList: result })
      this.clickRow(result[0],0)
    }).catch(e => {
      console.log(e)
    })
  }

  componentDidMount() {
    this.fetchList()
  }

  clickRow(item, index) {
    fetchMusic({ id: item.id }).then(({ data }) => {
      if (!data[0]) return
      const result = JSON.parse(JSON.stringify(this.state.dataList))
      result[index].play = data[0]
      console.log(result[index])
      this.setState({ 
        currentSong: index,
        dataList: result,
      })
    }).catch(e => {
      console.log(e)
    })
  }

  palyNext(){
    const { dataList , currentSong } = this.state
    if (dataList.length && currentSong < dataList.length) {
      this.clickRow(dataList[currentSong], currentSong+1 )
    }else{
      this.setState({ currentSong: 0 })
    }
  }

  palyPre(){
    const { dataList, currentSong } = this.state
    if (dataList.length > 0 && currentSong > 0) {
      this.clickRow(dataList[currentSong], currentSong - 1)
    } else {
      this.setState({ currentSong: dataList.length-1 })
    }
  }

  render() {
    const { dataList, currentSong, isPlaying } = this.state
    return (
      <div className="App">
        <div className="container">

          {/* style={{ backgroundImage: dataList[currentSong] ? `url( ${dataList[currentSong].song.album.blurPicUrl} )` : null }} */}
          
          <header className="App-header"></header>
          <div className="center"> playList </div>
          
          <Row>
            <Col span={10} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div className="playCD"> 
                <div className="album-img"> 
                  <img className={'rotate-img'} style={{  animationPlayState: !isPlaying ? 'paused' : 'running' }} src={dataList[currentSong] ? dataList[currentSong].song.album.blurPicUrl : null } alt="" />
                </div>
              </div>
            </Col>
            <Col span={14}>
              <div className="list">
                <div className="container">
                  {
                    dataList.map((item, index) => {
                      return <div className="item" key={index} onClick={() => { this.clickRow(item, index) }}>
                        <span style={{ color: currentSong === index ? '#df3b3b': null }}> {index+1} - {item.name}</span>
                      </div>
                    })
                  }
                </div>
              </div>
            </Col>
          </Row>

          <AudioPlayer
            picUrl={dataList[currentSong] ? dataList[currentSong].song.album.blurPicUrl : null}
            url={dataList[currentSong] && dataList[currentSong].play ? dataList[currentSong].play.url : null}
            next = { ()=> this.palyNext() }
            pre={() => this.palyPre() }
            isPlaying={(value) => { this.setState({ isPlaying: !value })} }
          />

        </div>
      </div>
    );
  }
}

export default App;
