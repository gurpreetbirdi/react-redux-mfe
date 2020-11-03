import { createStore, combineReducers } from "redux";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export const setTodo = (todo) => ({ type: "SET_TODO", payload: todo });

export const store = createStore(combineReducers({ todo: todoReducer }));
