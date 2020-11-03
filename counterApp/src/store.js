import { createStore, combineReducers } from "redux";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

export const setCount = (count) => ({ type: "SET_COUNT", payload: count });

export const store = createStore(combineReducers({ counter: counterReducer }));
