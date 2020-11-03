import { createStore, combineReducers } from "redux";

const initialState = {
  text: "global",
};

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };

    default:
      return state;
  }
};

export const store = createStore(combineReducers({ text: textReducer }));

export const combineStore = (counterReducer, todoReducer) => {
  return createStore(
    combineReducers({
      counter: counterReducer,
      todo: todoReducer,
      text: textReducer,
    })
  );
};
