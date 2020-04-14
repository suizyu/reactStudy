import { combineRducers } from 'reducx'
import count from './count'

export default combineRducers({ count })

//複数の場合
//export default combineRducers({ foo, var, hoge })