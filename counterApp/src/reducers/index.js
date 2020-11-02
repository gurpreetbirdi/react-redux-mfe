import { combineReducers } from "redux";

import { counterReducer } from "./Counter.reducer";

export default combineReducers({
  counter: counterReducer,
});
