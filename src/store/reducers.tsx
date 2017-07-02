import {combineReducers } from "redux";
import {types as T} from "../constants/types";
import {WiseMessage} from "../components/UtilComp/wiseMessageContainer";


interface IAction{
  type:string;
  payload:{};
}
export const Kaseya = (state={}, action:IAction) => {
  switch(action.type as String) {

  case T.INTEGRATIONS.KASEYA.VIEW
    || T.INTEGRATIONS.KASEYA.UPDATE
    || T.INTEGRATIONS.KASEYA.FETCHING
    || T.INTEGRATIONS.KASEYA.TRANSMITTING :
    //returning the same for all so using same case..
    return Object.assign({}, state, action.payload);

  default:
    return state;
  }
};


export const WiseMessages = (state:Array<WiseMessage>=[], action:IAction) => {
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
  Kaseya,
  WiseMessages
  // domainTracker,
  // state: (state = {}) => state //??
});

