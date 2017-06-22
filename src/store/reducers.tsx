import {combineReducers} from "redux";
import {types as T} from "../constants/types";

interface Action{
  type:string;
  payload:{};
}
export const kaseya = (state={}, action:Action) => {
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

export const kaseyaFetching = (state={}, action:Action) => {
  switch(action.type) {

  case "fetching" :
      //TODO: do some math
    return action.payload;
    // could be extended
  default:
    return state;
  }
};
export const domainTracker=(state={},action:Action) => {
  switch (action.type){
  case T.INTEGRATIONS.DOMAINTRACKER.VIEW:
    return action.payload;
  default:
    return state;
  }
};
export const kaseyaTransmitting= (state={}, action:Action) => {
  switch(action.type) {

  case "transmitting" :
      //TODO: do some math
    return action.payload;
    // could be extended
  default:
    return state;
  }
};

export const wiseMessages = (state=[{}], action:Action) => {
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

export const appReducer=combineReducers({
  kaseya,
  kaseyaFetching,
  kaseyaTransmitting,
  wiseMessages,
  domainTracker,
  state: (state = {}) => state
});

