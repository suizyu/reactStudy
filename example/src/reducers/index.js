import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })

//複数の場合
//export default combineRducers({ foo, var, hoge })