import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {routes as Routes} from "./routes";

import * as sampleState from  "./constants/initialState";
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