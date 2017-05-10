import T from '../constants/types'
import 'isomorphic-fetch'

export  const updateKaseya = (url, companyId, userName, password) => {
  return {
    type: T.INTEGRATIONS.KASEYA.UPDATE,
    payload: {url, companyId, userName, password}
  }
}
export const viewKaseya = () => dispatch => {
  (fetch as any)('http://192.168.20.11:10969/KaseyaApi/',
  // (fetch as any)('http://localhost:3333/KaseyaApi',
  { method: 'get',
    headers: {
      'orgId': 'f5e7ee7d-125a-438d-9c20-06c32914431d',
      'userId': '312'
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
    // dispatch(
    //   // addError(error.message)
    // )
    //
    // dispatch({
    //   // type: T.CANCEL_FETCHING
    // })
  })
}