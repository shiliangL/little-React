import React, { Component } from 'react';
import AudioPlayer from '@/components/AudioPlayer' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Learn React
          <AudioPlayer picUrl={ 'http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg' } url={ ' http://m10.music.126.net/20181010170945/1c12eb36ee5d4d93f794c5cb9690a7de/ymusic/1a03/c72c/f3cc/7670a500925a743eafaa11d96a022b08.mp3 '} />
        </header>
      </div>
    );
  }
}

export default App;
