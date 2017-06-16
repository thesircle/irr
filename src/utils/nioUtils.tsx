import {system as S} from "../constants/system";
export const api:any = (url, params):object => {
  // var fullUrl = S.BK_BASE + url;
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
let securityObject:any = (window as any).securityObject;
//window.securityObject = securityInfo;
let headers:object = {
  "Authorization" : "Bearer "+securityObject.token,
  "orgId"         : securityObject.orgId,
  "userId"        : securityObject.userId,
  "userName"      : securityObject.userName
};

export const get:any = (url, params:any={}):any => {
  if (params.headers) {
    Object.assign(headers, params.headers);
  }
  let finalParams:any = Object.assign({}, params || {}, {
    method: "GET",
    headers: headers,
  });

  return api(url, finalParams);
};


export const post:any = (url, body, params:any={}):any => {
  Object.assign(headers, {
    "Content-Type": "application/json"
  });
  if (params.headers) {
    Object.assign(headers, params.headers);
  }

  let finalParams:any = Object.assign({}, params, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });

  return api(url, finalParams);
};