import T from '../constants/types'
import 'isomorphic-fetch'

export  const updateKaseya = (url, companyId, userName, password) => {
  return {
    type: T.INTEGRATIONS.KASEYA.UPDATE,
    payload: {url, companyId, userName, password}
  }
}
export const viewKaseya = () => {
  // return {
  //   type: T.INTEGRATIONS.KASEYA.VIEW,
  //   payload: {url, companyId, userName, password}
  // }
  fetch('http://192.168.20.11:10969/KaseyaApi/',
  { method: 'get',
    headers: {
      'orgId': 'f5e7ee7d-125a-438d-9c20-06c32914431d',
      'userId': '312'
    }
  })
    .then(response => response.json())
    .then(kaseyaDetails => {
    console.log(kaseyaDetails)
      // dispatch({
      //   type: T.INTEGRATIONS.KASEYA.VIEW,
      //   payload: kaseyaDetails
      // })

    })
    .catch(error => {
      console.log(error)
      // dispatch(
      //   // addError(error.message)
      // )
      //
      // dispatch({
      //   // type: C.CANCEL_FETCHING
      // })

    })
}