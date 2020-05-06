import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })

//複数の場合
//export default combineRducers({ foo, var, hoge })