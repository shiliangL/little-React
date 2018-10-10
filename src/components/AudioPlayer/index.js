import React, { Component } from 'react'
import { Icon } from "antd";
import './index.scss'

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false
    }
  }

  clickToPlay = ()=>{
    this.setState({ isPlaying: !this.state.isPlaying })
    this.state.isPlaying ? this.audio.play() : this.audio.pause()
  }

  clickToPre(){
    console.log('xx')
  }

  clickToNext(){
    console.log('next')
  }

  componentDidMount() {
    console.log(this.audio,'xx')
  }

  
  render() {

    const { isPlaying, url, picUrl } = this.state

    return (
      <div className="AudioPlayer">
        <div className="player-album"> 
          <img src={ picUrl } alt="" /> 
        </div>
        <div className="player-btns"> 
          <Icon onClick={this.clickToPre }  type="fast-backward" theme="outlined" />
          <Icon onClick={this.clickToPlay} type={ isPlaying ? 'play-circle' :'pause-circle' }  theme="outlined" />
          <Icon onClick={this.clickToNext }  type="fast-forward" theme="outlined" />
        </div>
        <div className="player-state"></div>
        <div className="player-voice"> </div>
        <div className="player-extra"> </div>

        <audio style={{ display: 'none' }} ref={(audio) => { this.audio = audio } } src={ url }></audio>
      </div>
    )
  }
}
