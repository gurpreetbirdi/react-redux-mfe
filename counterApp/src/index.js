import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import LocalCounter from "./components/LocalCounter";
import { counterReducer, store as localStore } from "./store";

const mountApp = (elementId, globalStore) => {
  let store = localStore;
  if (globalStore) {
    store = globalStore;
  }
  const renderElemement = document.getElementById(elementId);
  if (renderElemement) {
    render(
      <Provider store={store}>
        <LocalCounter />
      </Provider>,
      renderElemement
    );
  }
};

window["mountCounter"] = mountApp;

window["counterReducer"] = counterReducer;

if (!window["micro-front-end-context"]) {
  mountApp("app");
}
