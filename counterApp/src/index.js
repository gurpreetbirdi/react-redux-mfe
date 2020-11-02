import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import AppCounter from "./components/AppCounter";

const { registerRender } = window;

function domRenderer() {
  ReactDOM.render(
    <Provider store={store}>
      <AppCounter />
    </Provider>,
    document.getElementById("root")
  );
}
// Function to execute when application is launch in parent application.
// We are passing the root component which will render first in parent app.
registerRender("counter", {
  component: AppCounter,
  domRenderer,
});
