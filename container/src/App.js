import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    (function () {
      window["micro-front-end-context"] = true;
      window["mountCounter"]("counter");
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
