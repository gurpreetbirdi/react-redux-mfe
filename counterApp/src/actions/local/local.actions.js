import { ACTION_TYPES } from "../actionTypes";

export const IncrementLocalCounter = () => {
  return {
    type: ACTION_TYPES.INCREMENT_LOCAL,
    payload: null,
  };
};

export const DecrementLocalCounter = () => {
  return {
    type: ACTION_TYPES.DECREMENT_LOCAL,
    payload: null,
  };
};
