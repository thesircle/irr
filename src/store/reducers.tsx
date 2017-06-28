import {IWiseObj} from "../components/UtilComp/wiseMessageContainer";
import {combineReducers } from "redux";
import {types as T} from "../constants/types";


interface IAction{
  type:string;
  payload:{};
}
export const kaseya = (state={}, action:IAction) => {
  switch(action.type as String) {

  case T.INTEGRATIONS.KASEYA.VIEW :
      //TODO: do some math
    return action.payload;

  case T.INTEGRATIONS.KASEYA.UPDATE :
      //TODO: do some math
    return action.payload;
  default:
    return state;
  }
};

export const kaseyaFetching = (state={}, action:IAction) => {
  switch(action.type) {

  case T.INTEGRATIONS.KASEYA.FETCHING :
      //TODO: do some math
    return action.payload;
    // could be extended
  default:
    return state;
  }
};
export const kaseyaTransmitting= (state={}, action:IAction) => {
  switch(action.type) {

  case T.INTEGRATIONS.KASEYA.TRANSMITTING :
      //TODO: do some math
    return action.payload;
    // could be extended
  default:
    return state;
  }
};

export const wiseMessages = (state:IWiseObj[]=[], action:IAction) => {
  switch(action.type) {
  case T.WISE_MESSAGE.ADD :
    return [
      ...state,
      action.payload
    ];
  case T.WISE_MESSAGE.CLEAR :
    return state.filter((message, i) => i !== action.payload);
  default:
    return state;
  }
};

// export const domainTracker=(state=initState.companyDomainTracker,action:IAction) => {
//   switch (action.type){
//   case T.COMPANY.DOMAINTRACKER.WHOIS:
//     return Object.assign({},state,{whois:Object.assign({},state.whois,action.payload)});
//   case T.COMPANY.DOMAINTRACKER.A:
//     return Object.assign({},state,
//       {aName:Object.assign({},state.aName,
//         {data:Object.assign({},state.aName.data,action.payload.data),fetching:action.payload.fetching})});
//   case T.COMPANY.DOMAINTRACKER.DNS:
//     return Object.assign({},state,
//       {dns:Object.assign({},state.dns,
//         {data:Object.assign({},state.dns.data,action.payload.data),fetching:action.payload.fetching})});
//   default:
//     return state;
//   }
// };

export const appReducer=combineReducers({
  kaseya,
  kaseyaFetching,
  kaseyaTransmitting,
  wiseMessages
  // domainTracker,
  // state: (state = {}) => state //??
});

