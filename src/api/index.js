import service from '../utlis/request.js'

//推荐新音乐
export function fetchNewSong(params) {
  return service({
    url: '/personalized/newsong',
    method: 'get',
    params
  })
}

// 通过 id 获取 mp3 播放接口
export function fetchMusic(params) {
  return service({
    url: '/music/url',
    method: 'get',
    params
  })
}

// 获取热门推荐
export function fetchHot(params) {
  return service({
    url: '/personalized',
    method: 'get',
    params
  })
}

