import React, { useEffect } from "react";

import { combineStore } from "./store";

const App = () => {
  useEffect(() => {
    (function () {
      window["micro-front-end-context"] = true;
      const counterReducer = window["counterReducer"];
      const todoReducer = window["todoReducer"];
      const combinedStore = combineStore(counterReducer, todoReducer);
      window["mountCounter"]("counter", combinedStore);
      window["mountTodo"]("todo", combinedStore);
    })();
  }, []);

  return (
    <>
      <h1>Casa App as container / Stitch apps here</h1>
      <div id="counter"></div>
      <hr />
      <h1>Customer story / Task App</h1>
      <div id="todo"></div>
    </>
  );
};

export default App;
