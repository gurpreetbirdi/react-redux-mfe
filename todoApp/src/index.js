import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import ToDoList from "./components/ToDoList";
import { store as localStore, todoReducer } from "./store";

const mountApp = (elementId, globalStore) => {
  let store = localStore;
  if (globalStore) {
    store = globalStore;
  }
  const renderElemement = document.getElementById(elementId);
  if (renderElemement) {
    render(
      <Provider store={store}>
        <ToDoList />
      </Provider>,
      renderElemement
    );
  }
};

window["mountTodo"] = mountApp;

window["todoReducer"] = todoReducer;

if (!window["micro-front-end-context"]) {
  mountApp("app");
}
