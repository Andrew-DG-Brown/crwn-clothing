import { SEARCH_ACTION_TYPES } from "./search.types";

const INITIAL_STATE = {
  isSearchOpen: false,
};

export const searchReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ACTION_TYPES.SET_IS_SEARCH_OPEN:
      return {
        ...state,
        isSearchOpen: payload,
      };
    default:
      return state;
  }
};
