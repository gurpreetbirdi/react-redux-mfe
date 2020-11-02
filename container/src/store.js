import { createStore } from "redux";

const initialState = {
  text: "global",
  component: null,
  global: "global",
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      console.log({ action });
      return { ...state, text: action.payload };
    case "SET_COMPONENT":
      return { ...state, component: action.payload };

    default:
      return state;
  }
};

// export const setText = (text) => ({ type: "SET_TEXT", payload: text });
export const setComponent = (component) => ({
  type: "SET_COMPONENT",
  payload: component,
});

const store = createStore(textReducer);

export default store;
