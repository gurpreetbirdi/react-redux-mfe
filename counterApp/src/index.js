import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import LocalCounter from "./components/LocalCounter";
import { store as localStore } from "./store";

const mountCounter = (elementId, globalStore) => {
  console.log({ globalStore });
  let store = localStore;
  if (globalStore) {
    store = globalStore;
  }
  const renderElemement = document.getElementById(elementId);
  render(
    <Provider store={store}>
      <LocalCounter />
    </Provider>,
    renderElemement
  );
  return { component: "LocalCounter" };
};

window["mountCounter"] = mountCounter;

if (!window["micro-front-end-context"]) {
  mountCounter("app");
}
