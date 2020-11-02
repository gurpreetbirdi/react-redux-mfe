import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementCounter,
  incrementCounter,
} from "../actions/local/local.actions";
import { Counter } from "./Counter";

const AppCounter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <Counter
        count={count}
        header="Counter"
        increment={() => dispatch(incrementCounter())}
        decrement={() => dispatch(decrementCounter())}
      ></Counter>
    </div>
  );
};

export default AppCounter;
