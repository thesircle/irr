import "isomorphic-fetch";
import {get,post} from "../utils/nioUtils";
import {Dispatch} from "redux";
import {Kaseya} from "../components/integrations/kaseya/kaseyaContainer";
import {system as S} from "../constants/system";

import {types as T} from "../constants/types";


export const viewDomainTracker= () => (dispatch:Dispatch<string>) => {
  dispatch({
    type:T.COMPANY.DOMAINTRACKER.VIEW,
    payload:{domainTrackerFetchingWhois:true}
  });
  get(S.BK.API.DOMAINTRACKER_VIEW).then(({body}) => {
    dispatch({
      type:T.COMPANY.DOMAINTRACKER.VIEW,
      payload:{domainTrackerFetching:false,data:body}
    });
  });
};
export  const updateKaseya = (url:string, userName:string, password:string) => (dispatch:Dispatch<string>) => {
  let postBody = {
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
export const viewKaseya = () => (dispatch:Dispatch<string>) => {
  let kaseya = new Kaseya();
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
  kaseya.fetching = true;
  dispatch({
    type: T.INTEGRATIONS.KASEYA.FETCHING,
    payload: kaseya
  });

  get(S.BK.API.KASEYA_VIEW).then(({body}) => {

    kaseya.url = body.data.KaseyaUrl;
    kaseya.userName = body.data.KaseyaUser;

    dispatch ({
      type: T.INTEGRATIONS.KASEYA.VIEW,
      payload: kaseya
    });
  })
    .catch((error) => {
    // dispatch(addWiseMessage(error.message))
    // dispatch({type: T.CANCEL_FETCHING}) //TODO
    });
};

export const addWiseMessage = (type:string, message:string, heading:string="") => (dispatch:Dispatch<string>) => {
  dispatch({
    type: T.WISE_MESSAGE.ADD,
    payload: {type,message,heading} // same as {type:type,message:message,heading:heading} in es6
  });
};
export const clearWiseMessage = (index:number) => (dispatch:Dispatch<string>) => {
  dispatch({
    type: T.WISE_MESSAGE.CLEAR,
    payload: index
  });
};
export const whoisDomainTracker = (domainName:string) => (dispatch:Dispatch<string>) => {
  dispatch({
    type:T.COMPANY.DOMAINTRACKER.WHOIS,
    payload:{fetching:true}
  });
  get(S.BK.DOMAINTRACKER.URL+S.BK.DOMAINTRACKER.DOMAINS.WHOIS+domainName).then(({body}) => {
    dispatch({
      type:T.COMPANY.DOMAINTRACKER.WHOIS,
      payload:{fetching:false,data:body}
    });
  });
};
export const aDomainTracker = (domainName:string) => (dispatch:Dispatch<string>) => {
  dispatch({
    type:T.COMPANY.DOMAINTRACKER.A,
    payload:{fetching:true}
  });
  get(S.BK.DOMAINTRACKER.URL+S.BK.DOMAINTRACKER.DOMAINS.A+domainName).then(({body}) => {
    dispatch({
      type:T.COMPANY.DOMAINTRACKER.A,
      payload:{fetching:false,data:body.data}
    });
  });
};
export const dnsDomainTracker = (domainName:string) => (dispatch:Dispatch<string>) => {
  dispatch({
    type:T.COMPANY.DOMAINTRACKER.DNS,
    payload:{fetching:true}
  });
  get(S.BK.DOMAINTRACKER.URL+S.BK.DOMAINTRACKER.DOMAINS.DNS+domainName).then(({body}) => {
    dispatch({
      type:T.COMPANY.DOMAINTRACKER.DNS,
      payload:{fetching:false,data:body.data}
    });
  });
};


// export const clearAllWiseMessages = ()  =>  dispatch  =>  {

//}
