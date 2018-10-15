import React, { Component } from 'react'
import { connect } from "react-redux";
import { Icon } from "antd";
import './index.scss'

@connect(
  (playList)=>{
    console.log(playList,'AudioPlayer')
    return {
      data:playList
    }
  }
)
class AudioPlayer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      playIcon: 'play-circle',
      curProgressBarWidth: 0,
      isPlaying: false
    }
  }

  clickToPlay = ()=>{
    //检查资源文件是否可以播放
    if (this.audio.paused || this.audio.ended) {
      this.toPlay()
    } else {
      this.toPause()
    }
  }

  toPlay = () => {
    // 资源无效异常处理存在问题
    this.audio.play()
    this.setState({ playIcon: 'pause-circle' })
  }

  toPause = () => {
    this.audio.pause()
    this.setState({ playIcon: 'play-circle' })
  }

 
  syncTime(){
    const currentTime = this.audio.currentTime
    const duration = this.audio.duration
    const timeScale = Math.round(currentTime) / Math.round(duration) * 100;
    this.setState({
      curProgressBarWidth: `${timeScale}%`,
    })
  }

  setCurTime = (e) => {
    const { left } = this.progressBar.getBoundingClientRect()
    const distance = e.clientX - left
    const scale = distance / this.progressBar.offsetWidth
    // audio标签内有duration，数据对象中也有dt，不过dt = 1000 * duration
    this.audio.currentTime = this.audio.duration * scale
    this.setState({
      curProgressBarWidth: `${scale * 100}%`,
    })
  }

  componentDidMount() {
    console.log(this.props.data.playList[0],'sbsbbsbs')
  }
  
  
  render() {
    
    const { isPlaying, curProgressBarWidth, playIcon } = this.state
    const { next, pre, data } = this.props
    
    return (
      <div className="AudioPlayer">

        <div className="progress">
          <div className="progress-bar" ref={node => this.progressBar = node} onClick={(e) => { this.setCurTime(e) }}>
            <div style={{ width: `${curProgressBarWidth}` }} className="current-progress"></div>
          </div>
        </div>

        <div className="player-album"> 
          <img src={data.playList[0].picUrl} alt="" /> 
        </div>
        <div className="player-btns"> 
          <Icon onClick={() => pre()  }  type="fast-backward" theme="outlined" />
          <Icon onClick={this.clickToPlay} type={ playIcon }  theme="outlined" />
          <Icon onClick={() => next() }  type="fast-forward" theme="outlined" />
        </div>
        <div className="player-state">
          <div className="player-state-top"> </div>
          <div className="player-state-bottom"> 
            <div className="progress-bar" ref={node => this.progressBar = node} onClick={(e) => {this.setCurTime(e) }}>
              <div style={{ width: `${curProgressBarWidth}` }} className="current-progress"></div>
            </div>
          </div>
        </div>
        <div className="player-voice"> </div>
        <div className="player-extra"> </div>

        <audio 
          ref={
            audio => this.audio = audio  
          }
          onTimeUpdate={
            ()=> this.syncTime()
          }
          onEnded ={
            ()=> {
              // next()
              console.log('播放完毕')
            }
          }
          onError={
            e=> {
              console.log(e)
            }
          }
          src={ data.playList[0].mp3 }>
        </audio>
      </div>
    )
  }
}
export default AudioPlayer