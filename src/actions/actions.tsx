import "isomorphic-fetch";
import {system as S} from "../constants/system";
import {types as T} from "../constants/types";
import {get,post} from "../utils/nioUtils";


export const viewDomainTracker = () => dispatch => {
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
export  const updateKaseya = (url, userName, password) => dispatch => {
  let postBody = {
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
    .catch(error => {
  // dispatch(addWiseMessage(error.message))
  // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};
export const viewKaseya = () => dispatch => {
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
    let url = body.data.KaseyaUrl;
    let userName = body.data.KaseyaUser;
    dispatch ({
      type: T.INTEGRATIONS.KASEYA.VIEW,
      payload: {url,userName}
    });
  })
    .catch(error => {
    // dispatch(addWiseMessage(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};

export const addWiseMessage = (type, message, heading="") => dispatch => {
  dispatch({
    type: T.WISE_MESSAGE.ADD,
    payload: {type,message,heading} // same as {type:type,message:message,heading:heading} in es6
  });
};
export const clearWiseMessage = index => dispatch => {
  dispatch({
    type: T.WISE_MESSAGE.CLEAR,
    payload: index
  });
};
export const whoisDomainTracker = () => dispatch => {
  dispatch({
    type:T.INTEGRATIONS.DOMAINTRACKER.WHOIS,
    payload:{fetching:true,data:{}}
  });
  setTimeout( () =>  {
    get(S.BK.DOMAINTRACKER.MXTOOL+S.BK.DOMAINTRACKER.WHOIS+S.BK.DOMAINTRACKER.DOMAIN).then(({body}:any) => {
      dispatch({
        type:T.INTEGRATIONS.DOMAINTRACKER.WHOIS,
        payload:{fetching:false,data:body}
      });
    });
  },5000);
};
export const aDomainTracker = () => dispatch => {
  dispatch({
    type:T.INTEGRATIONS.DOMAINTRACKER.A,
    payload:{fetching:true,data:{}}
  });

  setTimeout( () => {
    get(S.BK.DOMAINTRACKER.MXTOOL+S.BK.DOMAINTRACKER.A+S.BK.DOMAINTRACKER.DOMAIN).then(({body}:any) => {
      dispatch({
        type:T.INTEGRATIONS.DOMAINTRACKER.A,
        payload:{fetching:false,data:body}
      });
    });
  },2000);
};


// export const clearAllWiseMessages = ()  =>  dispatch  =>  {

//}
