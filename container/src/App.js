import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import store, { setComponent } from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (function () {
      window["micro-front-end-context"] = true;
      const local = window["mountCounter"]("counter", store);
      console.log({ local });
      dispatch(setComponent(local.component));
      window["mountTodo"]("todo");
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
