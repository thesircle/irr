import * as React from "react";
import * as sampleState from  "./constants/initialState";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {routes as Routes} from "./routes";
import {storeFactory} from "./store";

const store:any = (storeFactory(sampleState) as any);
(window as any).React = React;
(window as any).store = store;
render(
  <Provider store={store}>
      <Routes/>
  </Provider>
  ,document.getElementById("react-container")
);