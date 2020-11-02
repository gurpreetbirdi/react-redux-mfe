import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./../store";
import ParentCounter from "./ParentCounter";

function mountComponent() {
  console.log("here");
  const state = store.getState();
  console.log({ state });
  const TestChild = state.component;
  const renderElemement = document.getElementById("counter");
  console.log({ renderElemement });
  //   ReactDOM.render(
  //     <Provider store={store}>
  //       <ParentCounter />
  //     </Provider>,
  //     renderElemement
  //   );
}

export const exec = () => {
  mountComponent();
};
