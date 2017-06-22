import * as React from "react";
import * as sampleState from  "./constants/initialState";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {routes as Routes} from "./routes";
import {storeFactory} from "./store";

interface WindowInterface extends Window {
  React:Object ;
  store:Object;
}

const store = (storeFactory(sampleState));
(window as WindowInterface).React = React;
(window as WindowInterface).store = store;
render(
  <Provider store={store}>
      <Routes/>
  </Provider>
  ,document.getElementById("react-container")
);