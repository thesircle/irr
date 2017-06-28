import "./styles/main.scss";
import * as React from "react";
import * as sampleState from  "./constants/initialState";
import {Provider} from "react-redux";
import {render} from "react-dom";
import {routes as Routes} from "./routes";
import {storeFactory} from "./store";

interface IWindow extends Window {
  React:Object ;
  store:Object;
}

const store = (storeFactory(sampleState));
(window as IWindow).React = React;
(window as IWindow).store = store;
render(
  <Provider store={store}>
      <Routes/>
  </Provider>
  ,document.getElementById("react-container")
);