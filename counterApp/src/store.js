import { createStore } from "redux";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNT":
      console.log("local", action);
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

export const setCount = (count) => ({ type: "SET_COUNT", payload: count });

export const store = createStore(counterReducer);
