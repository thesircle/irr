import { combineReducers } from "redux";
import {state as initState} from "../constants/initialState";
import {types as T} from "../constants/types";

export const kaseya = (state={}, action) => {
  switch(action.type) {

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

export const kaseyaFetching = (state={}, action) => {
  switch(action.type) {

  case "fetching" :
      //TODO: do some math
    return action.payload;
    // could be extended
  default:
    return state;
  }
};
export const domainTracker=(state=initState.domainTracker,action) => {
  switch (action.type){
  case T.COMPANY.DOMAINTRACKER.VIEW:
    return action.payload;
  default:
    return state;
  }
};
export const kaseyaTransmitting = (state={}, action) => {
  switch(action.type) {

  case "transmitting" :
      //TODO: do some math
    return action.payload;
    // could be extended
  default:
    return state;
  }
};

export const wiseMessages = (state=[], action) => {
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

export const domainTrackerWhois=(state=initState.domainTracker,action) => {
  switch (action.type){
  case T.COMPANY.DOMAINTRACKER.WHOIS:
    return action.payload;
  default:
    return state;
  }
};

export const domainTrackerA = (state={},action) => {
  switch (action.type){
  case T.COMPANY.DOMAINTRACKER.A:
    return action.payload;
  default:
    return state;
  }
};

export const appReducer=combineReducers({
  kaseya,
  kaseyaFetching,
  kaseyaTransmitting,
  wiseMessages,
  domainTracker,
  domainTrackerWhois,
  domainTrackerA

});

