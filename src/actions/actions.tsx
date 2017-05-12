import T from '../constants/types'
import 'isomorphic-fetch'

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
      dispatch(addError(error.message))

      // dispatch({
      //   // type: T.CANCEL_FETCHING
      // })
    })
}
export const viewKaseya = () => dispatch => {
  (fetch as any)('http://192.168.20.11:10969/KaseyaApi/',
  // (fetch as any)('http://localhost:3333/KaseyaApi',
  { method: 'get',
    headers: {
      'orgId': 'f5e7ee7d-125a-438d-9c20-06c32914431d',
      'userId': '231',
      'userName': 'junaid.malik@itboost.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bmFpZC5tYWxpa0BpdGJvb3N0LmNvbSIsImlhdCI6MTQ5NDU4NTExOX0.WvsA28bnETEcVmgS8OKG2CJzcKZK3K0guf1OilDduAs'

    }
  })
  .then(response => response.json())
  .then(kaseyaDetails => {
    let url = kaseyaDetails.data.KaseyaUrl;
    let userName = kaseyaDetails.data.KaseyaUser;
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.VIEW,
      payload: {url,userName}
    })
  })
  .catch(error => {
    console.log(error)
    dispatch(addError(error.message))

    // dispatch({
    //   // type: T.CANCEL_FETCHING
    // })
  })
}

export const addError = message =>
  ({
    type: T.ERROR_MESSAGES.ADD,
    payload: message
  })

export const clearError = index =>
  ({
    type: T.ERROR_MESSAGES.CLEAR,
    payload: index
  })
export const addSuccess = message =>
  ({
    type: T.SUCCESS_MESSAGES.ADD,
    payload: message
  })

export const clearSuccess = index =>
  ({
    type: T.SUCCESS_MESSAGES.CLEAR,
    payload: index
  })