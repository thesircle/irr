import T from '../constants/types'
import S from '../constants/system'
import {get,post} from '../utils/nioUtils'
import 'isomorphic-fetch'


export  const updateKaseya = (url, userName, password) => dispatch => {
  let postBody = {
    "KaseyaUrl":url,
    "KaseyaUser":userName,
    "KaseyaUserPass":password
  }
  post(S.BK.API.KASEYA_UPDATE,postBody).then(({body}:any) => {
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.UPDATE,
      payload: {url, userName, password}
    })
  })
  .catch(error => {
  dispatch(addError(error.message))
  // dispatch({type: T.CANCEL_FETCHING}) //TODO
  })
}
export const viewKaseya = () => dispatch => {
  get(S.BK.API.KASEYA_VIEW).then(({body}:any) => {
    let url = body.data.KaseyaUrl;
    let userName = body.data.KaseyaUser;
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.VIEW,
      payload: {url,userName}
    })
  })
  .catch(error => {
    dispatch(addError(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
  })
}

export const addError = message => dispatch => {
  dispatch({
    type: T.ERROR_MESSAGES.ADD,
    payload: message
  })
}
export const clearError = index => dispatch => {
  dispatch({
    type: T.ERROR_MESSAGES.CLEAR,
    payload: index
  })
}
export const addSuccess = message => dispatch => {
  dispatch({
    type: T.SUCCESS_MESSAGES.ADD,
    payload: message
  })
}
export const clearSuccess = index => dispatch => {
  dispatch({
    type: T.SUCCESS_MESSAGES.CLEAR,
    payload: index
  })
}


