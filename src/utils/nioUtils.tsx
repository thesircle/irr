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

export const get = (url, params:any={}) => {
  var headers = {// TODO: refactor on iframe implementation
    'orgId': 'f5e7ee7d-125a-438d-9c20-06c32914431d',
    'userId': '231',
    'userName': 'junaid.malik@itboost.com',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bmFpZC5tYWxpa0BpdGJvb3N0LmNvbSIsImlhdCI6MTQ5NDU4NTExOX0.WvsA28bnETEcVmgS8OKG2CJzcKZK3K0guf1OilDduAs'
  };
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
  var headers = {// TODO: refactor on iframe implementation
    'Content-Type': 'application/json',
    'orgId': 'f5e7ee7d-125a-438d-9c20-06c32914431d',
    'userId': '231',
    'userName': 'junaid.malik@itboost.com',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1bmFpZC5tYWxpa0BpdGJvb3N0LmNvbSIsImlhdCI6MTQ5NDU4NTExOX0.WvsA28bnETEcVmgS8OKG2CJzcKZK3K0guf1OilDduAs'
  };
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