import T from '../constants/types'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
  let result
  console.groupCollapsed(`dispatching action => ${action.type}`)
  let state = store.getState()
  console.log(`1 state: ${JSON.stringify(state)}`)
  result = next(action)
  console.log(`2 state: ${JSON.stringify(state)}`)
  console.groupEnd()
  return result
}

export default (initialState={}) => {
  return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}


