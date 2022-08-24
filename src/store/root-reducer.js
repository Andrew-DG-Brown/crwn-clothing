import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { searchReducer } from "./search/search.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  search: searchReducer,
});
