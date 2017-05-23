import T from '../constants/types'
import { combineReducers } from 'redux'


export const kaseya = (state={}, action) => {
  console.log(`state & payload: ${JSON.stringify(action)}`)
  switch(action.type) {

    case T.INTEGRATIONS.KASEYA.VIEW :
      //TODO: do some math
      return action.payload

    case T.INTEGRATIONS.KASEYA.UPDATE :
      //TODO: do some math
      return action.payload
    default:
      return state
  }
}

export const wiseMessages = (state=[], action) => {
  switch(action.type) {
    case T.WISE_MESSAGE.ADD :
      return [
        ...state,
        action.payload
      ]
    case T.WISE_MESSAGE.CLEAR :
      return state.filter((message, i) => i !== action.payload)
    default:
      return state
  }
}



export default combineReducers({
  kaseya,
  wiseMessages
})



