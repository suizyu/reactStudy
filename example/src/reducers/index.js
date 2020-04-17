import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })

//複数の場合
//export default combineRducers({ foo, var, hoge })