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
  // dispatch(addWiseMessage(error.message))
  // dispatch({type: T.CANCEL_FETCHING}) //TODO
  })
}
export const viewKaseya = () => dispatch => {
  dispatch(addWiseMessage("e","newErrorMessage"))
  dispatch(addWiseMessage("s","newSuccessMessage"))
  // dispatch(addWiseMessage(`testError2`))
  // dispatch(addWiseMessage(`testError3`))
  get(S.BK.API.KASEYA_VIEW).then(({body}:any) => {
    let url = body.data.KaseyaUrl;
    let userName = body.data.KaseyaUser;
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.VIEW,
      payload: {url,userName}
    })
  })
  .catch(error => {
    // dispatch(addWiseMessage(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
  })
}

export const addWiseMessage = (type,message) => dispatch => {
  console.log(JSON.stringify(`---------${JSON.stringify({type,message})}`))
  dispatch({
    type: T.ERROR_MESSAGES.ADD,
    payload: [type,message]
  })
}
export const clearWiseMessage = index => dispatch => {
  dispatch({
    type: T.ERROR_MESSAGES.CLEAR,
    payload: index
  })
}

// export const clearAllWiseMessages = () => dispatch => {

//}


