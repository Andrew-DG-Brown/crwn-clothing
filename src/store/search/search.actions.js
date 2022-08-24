import { createAction } from "../../utils/reducer/reducer.utils";
import { SEARCH_ACTION_TYPES } from "./search.types";

export const setIsSearchOpen = (bool) => {
  return createAction(SEARCH_ACTION_TYPES.SET_IS_SEARCH_OPEN, bool);
};
