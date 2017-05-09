import T from '../constants/types'
import { combineReducers } from 'redux'


export const kaseya = (state={}, action) => {
  console.log(`state & payload: ${JSON.stringify(action)}`)
  switch(action.type) {

    case T.INTEGRATIONS.KASEYA.CREATE :
      //TODO: do some math
      return action.payload

    case T.INTEGRATIONS.KASEYA.UPDATE :
      //TODO: do some math
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  kaseya
  // , fetching
})



