import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCount } from "../store";

const LocalCounter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  const state = useSelector((state) => state);
  console.log({ state });

  return (
    <div>
      <h2>Counter</h2>
      <span>{count}</span>
      <button onClick={() => dispatch(setCount(count + 1))}>+</button>
      <button onClick={() => dispatch(setCount(count + 1))}>-</button>
    </div>
  );
};

export default LocalCounter;
