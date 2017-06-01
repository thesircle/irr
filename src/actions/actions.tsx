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
  dispatch(addWiseMessage(S.WISE_MESSAGE.ERROR,
                          "newErrorMessage",
                          "Custom Heading"))
  dispatch(addWiseMessage(S.WISE_MESSAGE.SUCCESS,
                          "newSuccessMessage"))
  dispatch(addWiseMessage(S.WISE_MESSAGE.INFO,
    "newInfoMessage"))
  dispatch(addWiseMessage(S.WISE_MESSAGE.WARNING,
    "newWarningMessage","Custom Warn Heading here"))
  // dispatch(addWiseMessage(`testError2`))
  // dispatch(addWiseMessage(`testError3`))
  dispatch({
    type: "fetching",
    payload: {kaseyaFetching: true}
  })
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

export const addWiseMessage = (type,message,heading="") => dispatch => {
  dispatch({
    type: T.WISE_MESSAGE.ADD,
    payload: {type,message,heading} // same as {type:type,message:message,heading:heading} in es6
  })
}
export const clearWiseMessage = index => dispatch => {
  dispatch({
    type: T.WISE_MESSAGE.CLEAR,
    payload: index
  })
}


// export const clearAllWiseMessages = () => dispatch => {

//}


