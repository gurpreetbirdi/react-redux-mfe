import { ACTION_TYPES } from "../actionTypes";

export const IncrementGlobalCounter = () => {
  return {
    type: ACTION_TYPES.INCREMENT_GLOBAL,
    payload: null,
  };
};

export const DecrementGlobalCounter = () => {
  return {
    type: ACTION_TYPES.DECREMENT_GLOBAL,
    payload: null,
  };
};
