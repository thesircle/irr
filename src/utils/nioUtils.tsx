import {system as S} from "../constants/system";
interface Params{
  headers:{};
}
interface WindowInterface extends Window{
  securityObject:SecurityObject;
}
interface SecurityObject{
  token:string;
  orgId:string;
  userId:string;
  userName:string;
}
export const api = (url:string, params:{}) => {
  let fullUrl:string = S.GET_BASE + url;
  return fetch(fullUrl, params)
    .then((res) => {
      if (res.ok) {//200 to 299
        return res.json().then((body) => ({body, res}));
      }
      else {
        return res.json().then((body) => Promise.reject({body, res}));
      }
    });
};
let securityObject = (window as WindowInterface).securityObject;
//window.securityObject = securityInfo;
let headers = {
  "Authorization" : "Bearer "+securityObject.token,
  "orgId"         : securityObject.orgId,
  "userId"        : securityObject.userId,
  "userName"      : securityObject.userName
};

export const get = (url:string, params={} as Params) => {
  if (params.headers) {
    Object.assign(headers, params.headers);
  }
  let finalParams = Object.assign({}, params || {}, {
    method: "GET",
    headers: headers,
  });

  return api(url, finalParams);
};


export const post = (url:string, body:{}, params={} as Params) => {
  Object.assign(headers, {
    "Content-Type": "application/json"
  });
  if (params.headers) {
    Object.assign(headers, params.headers);
  }

  let finalParams = Object.assign({}, params, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });

  return api(url, finalParams);
};