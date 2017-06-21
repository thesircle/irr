import "isomorphic-fetch";
import {get,post} from "../utils/nioUtils";
import {system as S} from "../constants/system";
import {types as T} from "../constants/types";

export const viewDomainTracker= () => (dispatch:Function) => {
  dispatch({
    type:T.INTEGRATIONS.DOMAINTRACKER.VIEW,
    payload:{domainTrackerFetchingWhois:true}
  });
  setTimeout(() => {
    get(S.BK.DOMAINTRACKER.GET).then(({body}) => {
      dispatch({
        type:T.INTEGRATIONS.DOMAINTRACKER.VIEW,
        payload:{domainTrackerFetching:false,data:body}
      });
    });},10000);
};
export  const updateKaseya = (url:string, userName:string, password:string) => (dispatch:Function) => {
  //TODO: resolve issue of any with variable invoking method
  let postBody:object = {
    "KaseyaUrl":url,
    "KaseyaUser":userName,
    "KaseyaUserPass":password
  };
  post(S.BK.API.KASEYA_UPDATE,postBody).then(({body}) => {
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
export const viewKaseya = () => (dispatch:Function) => {
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
  get(S.BK.API.KASEYA_VIEW).then(({body}) => {
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

export const addWiseMessage = (type:string, message:string, heading="") => (dispatch:Function) => {
  dispatch({
    type: T.WISE_MESSAGE.ADD,
    payload: {type,message,heading} // same as {type:type,message:message,heading:heading} in es6
  });
};
export const clearWiseMessage = (index:string) => (dispatch:Function) => {
  dispatch({
    type: T.WISE_MESSAGE.CLEAR,
    payload: index
  });
};


// export const clearAllWiseMessages = ()  =>  dispatch  =>  {

//}
