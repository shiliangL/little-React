import React, { Component } from 'react'
import { Icon } from "antd";
import './index.scss'

export default class AudioPlayer extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      curProgressBarWidth: 0,
      isPlaying: false
    }
  }

  clickToPlay = ()=>{
    this.setState({ isPlaying: !this.state.isPlaying })
    this.state.isPlaying ? this.audio.play() : this.audio.pause()
    this.props.isPlaying(this.state.isPlaying )
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
    console.log(this.audio)
  }

  
  render() {

    const { isPlaying, curProgressBarWidth } = this.state
    const { url, picUrl, next, pre } = this.props

    return (
      <div className="AudioPlayer">
        <div className="player-album"> 
          <img src={ picUrl } alt="" /> 
        </div>
        <div className="player-btns"> 
          <Icon onClick={() => pre()  }  type="fast-backward" theme="outlined" />
          <Icon onClick={this.clickToPlay} type={ isPlaying ? 'play-circle' :'pause-circle' }  theme="outlined" />
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
              next()
              console.log('播放完毕')
            }
          }
          onError={
            e=> {
              console.log(e)
            }
          }
          src={ url }>
        </audio>
      </div>
    )
  }
}
