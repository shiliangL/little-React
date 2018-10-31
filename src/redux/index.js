import { combineReducers } from 'redux'
import { playList } from './playList'
import { songLIst } from './songLIst'

export const rootReducer = combineReducers({
  playList,
  songLIst
})

