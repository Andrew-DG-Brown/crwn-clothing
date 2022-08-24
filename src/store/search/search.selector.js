import { createSelector } from "reselect";

const selectSearchReducer = (state) => state.search;

export const selectIsSearchOpen = createSelector(
  [selectSearchReducer],
  (searchObj) => searchObj.isSearchOpen
);
