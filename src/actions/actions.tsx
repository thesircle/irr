import T from '../constants/types'
import S from '../constants/system'
import 'isomorphic-fetch'
import {get} from '../utils/nioUtils'

export  const updateKaseya = (url, userName, password) => dispatch => {
  (fetch as any)('http://192.168.20.11:10969/KaseyaApi/VerifyFirstTime',
    // (fetch as any)('http://localhost:3333/KaseyaApi',
    { method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'orgId': 'f5e7ee7d-125a-438d-9c20-06c32914431d',
        'userId': '231',
        'userName': 'junaid.malik@itboost.com',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bmFpZC5tYWxpa0BpdGJvb3N0LmNvbSIsImlhdCI6MTQ5NDU4NTExOX0.WvsA28bnETEcVmgS8OKG2CJzcKZK3K0guf1OilDduAs'
      },
      body: JSON.stringify({
        "KaseyaUrl":url,
        "KaseyaUser":userName,
        "KaseyaUserPass":password
      })
    })
    .then(response => response.json())
    .then(kaseyaDetails => {
      console.log(JSON.stringify(kaseyaDetails))
      dispatch ({
        type: T.INTEGRATIONS.KASEYA.UPDATE,
        payload: {url, userName, password}
      })
      dispatch (addSuccess("Updated!"))
      dispatch(addError("testError"))
    })
    .catch(error => {
      console.log(error)
      // dispatch(addError(error.message))

      dispatch(addError("testError"))
      dispatch (addSuccess("Updated!"))
      // dispatch({
      //   // type: T.CANCEL_FETCHING
      // })
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


