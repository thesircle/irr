import S from '../constants/system'
export const api = (url, params) => {
  var fullUrl = S.BK_BASE + url;
  return fetch(fullUrl, params)
    .then((res) => {
      if (res.ok) {//200 to 299
        return res.json().then((body) => ({body, res}));
      }
      else {
        return res.json().then((body) => Promise.reject({body, res}));
      }
    });
}
var securityObject = (window as any).securityObject;
//window.securityObject = securityInfo;
var headers = {
  "Authorization" : "Bearer "+securityObject.token,
  "orgId"         : securityObject.orgId,
  "userId"        : securityObject.userId,
  "userName"      : securityObject.userName
}

export const get = (url, params:any={}) => {
  if (params.headers) {
    Object.assign(headers, params.headers);
  }
  var finalParams = Object.assign({}, params || {}, {
    method: 'GET',
    headers: headers,
  });

  return api(url, finalParams);
}


export const post = (url, body, params:any={}) => {
  Object.assign(headers, {
    'Content-Type': 'application/json'
  })
  if (params.headers) {
    Object.assign(headers, params.headers);
  }

  var finalParams = Object.assign({}, params, {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  });

  return api(url, finalParams);
}