import "isomorphic-fetch";
import {get,post} from "../utils/nioUtils";
import {system as S} from "../constants/system";
import {types as T} from "../constants/types";


export const viewDomainTracker:any= (): any => (dispatch:any) : void => {
  dispatch({
    type:T.INTEGRATIONS.DOMAINTRACKER.VIEW,
    payload:{domainTrackerFetchingWhois:true}
  });
  setTimeout(() => {
    get(S.BK.DOMAINTRACKER.GET).then(({body}:any) => {
      dispatch({
        type:T.INTEGRATIONS.DOMAINTRACKER.VIEW,
        payload:{domainTrackerFetching:false,data:body}
      });
    });},10000);
};
export  const updateKaseya:any = (url, userName, password):any => (dispatch):void => {
  //TODO: resolve issue of any with variable invoking method
  let postBody:object = {
    "KaseyaUrl":url,
    "KaseyaUser":userName,
    "KaseyaUserPass":password
  };
  post(S.BK.API.KASEYA_UPDATE,postBody).then(({body}:any) => {
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.UPDATE,
      payload: {url, userName, password}
    });
  })
    .catch((error) => {
  // dispatch(addWiseMessage(error.message))
  // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};
export const viewKaseya:any = ():any => (dispatch):void => {
  dispatch(addWiseMessage(S.WISE_MESSAGE.ERROR,
                          "newErrorMessage",
                          "Custom Heading"));
  dispatch(addWiseMessage(S.WISE_MESSAGE.SUCCESS,
                          "newSuccessMessage"));
  dispatch(addWiseMessage(S.WISE_MESSAGE.INFO,
    "newInfoMessage"));
  dispatch(addWiseMessage(S.WISE_MESSAGE.WARNING,
    "newWarningMessage","Custom Warn Heading here"));
  // dispatch(addWiseMessage(`testError2`))
  // dispatch(addWiseMessage(`testError3`))
  dispatch({
    type: "fetching",
    payload: {kaseyaFetching: true}
  });
  get(S.BK.API.KASEYA_VIEW).then(({body}:any) => {
    let url:string = body.data.KaseyaUrl;
    let userName:string = body.data.KaseyaUser;
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.VIEW,
      payload: {url,userName}
    });
  })
    .catch((error) => {
    // dispatch(addWiseMessage(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};

export const addWiseMessage:any = (type, message, heading=""):any => (dispatch):void => {
  dispatch({
    type: T.WISE_MESSAGE.ADD,
    payload: {type,message,heading} // same as {type:type,message:message,heading:heading} in es6
  });
};
export const clearWiseMessage:any = (index):any => (dispatch):void => {
  dispatch({
    type: T.WISE_MESSAGE.CLEAR,
    payload: index
  });
};


// export const clearAllWiseMessages = ()  =>  dispatch  =>  {

//}
