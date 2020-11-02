import { ACTION_TYPES } from "../actionTypes";

export const incrementCounter = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
    payload: null,
  };
};

export const decrementCounter = () => {
  return {
    type: ACTION_TYPES.DECREMENT,
    payload: null,
  };
};
