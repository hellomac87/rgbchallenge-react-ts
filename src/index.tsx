import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./reducers";
import { StoreState } from "./types/index";

import * as serviceWorker from "./serviceWorker";

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
